import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='signup-Input-container signup-input-fields'>
      <label className='signup-label'>Password<span style={{ color: 'red' }}>*</span></label>
      <input
        className='signup-input'
        type={showPassword ? 'text' : 'password'}
        name='password'
        placeholder='At least 8 characters'
        value={value}
        onChange={onChange}
        required
      />
      <span className='eye-icon' onClick={togglePasswordVisibility}>
        {showPassword ? <FiEyeOff /> : <FiEye />}
      </span>
    </div>
  );
};

export default PasswordInput;