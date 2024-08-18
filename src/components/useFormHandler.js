import { useState } from 'react';

export const useFormHandler = (initialState, apiFunc, navigate, redirectPath) => {
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiFunc(formData);
      setMessage(response.data.message);
      navigate(redirectPath, { state: { message: response.data.message } });
    } catch (err) {
      setError('Failed to register. Please try again.');
      setMessage('Registration failed: ' + (err.response?.data?.messages || err.message));
    }
  };

  return { formData, handleChange, handleSubmit, message, error };
};
