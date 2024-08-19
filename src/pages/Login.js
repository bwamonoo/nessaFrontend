import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaEnvelope } from 'react-icons/fa';
import logo from '../asset/icons/LOGO.png';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../asset/icons/LOGIN.png';
import { loginUser } from '../services/api'; // Import the login function from your API service
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await loginUser({ email, password });
      
      setMessage(response.data.message);
      await login();
      // Handle the response as needed, e.g., save tokens, redirect

      navigate('/'); // Redirect to the dashboard or another page upon successful login
    } catch (err) {
      setError('Failed to login.');
      setMessage('Login failed: ' + (err.response?.data?.messages || err.message));
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-container">
      <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
        <div className='logo-and-info'>
          <img src={logo} alt="Nessa Logo" />
          <h3>Welcome to Nessa</h3>
        </div>
      </Link>

      <span className='form-and-image-container'>
        <div className='login-forms-container'>
          <form className='login-form' onSubmit={handleSubmit}>
            <div className='Input-container input-fields'>
              <input
                className='login-input'
                type='text'
                name='email'
                placeholder='Enter email or phone number'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='Input-container input-fields'>
              <input
                className='login-input'
                type='password'
                name='password'
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            {error && <div className='login-error'>{error}</div>}
            {message && <div className='login-error'>{message}</div>}
            <button className='login-button1' type='submit'>Login</button>
          </form>

          <div className='centered-hr'>
            <hr />
            <span className='or-continue-with'>Or continue with</span>
            <hr />
          </div>
          <div className='alternative-login'>
            <div className='login-icons'>
              <FcGoogle className='login-icon' size={28} />
              <FaEnvelope className='login-icon' size={28} />
            </div>
          </div>

          <span className='forget-password'>Forgot password?</span>
          <span className='nessa'>New to Nessa?</span>

          <Link to='/signup'>
            <button className='login-button2'>Create Nessa Account</button>
          </Link>

          <span className='read-policy'>
            Please read <span style={{ color: '#90dcff', cursor: 'pointer' }}>Terms of service</span> and <span style={{ color: '#90dcff', cursor: 'pointer' }}>privacy note</span>.
          </span>
        </div>
        <img src={loginImage} alt="Login Visual" />
      </span>
    </div>
  );
}

export default Login;
