import logo from '../asset/icons/LOGO.png';
import '../styles/RegisterAdmin.css'
import { Link, useNavigate } from 'react-router-dom';
import { registerAdmin } from '../services/api';
import { useFormHandler } from '../components/useFormHandler';
import PasswordInput from '../components/PasswordInput';
// Import the registerUser function from your API service

const RegisterAdmin = () => {
  const initialState = {
    full_name: '',
    email: '',
    role: '',
    phone_number: '',
    password: '',
    confirmPassword: '',
    user_group_id: 1
  };

const { formData, handleChange, handleSubmit, message, error } = useFormHandler(
  initialState,
  registerAdmin,
  useNavigate(),
  '/confirm-email'
);  

  return (
    <div className="sign-up-container">
      <div className='signup-logo'>
        <img src={logo} alt="Nessa Logo" />
      </div>

      <div className='signup-form-container'>
        <h3>Create your account</h3>
        <form className='signup-form' onSubmit={handleSubmit}>
          <div className='signup-Input-container signup-input-fields'>
            <label className='signup-label'>Full name<span style={ {color: 'red'} }>*</span></label>
            <input
              className='signup-input'
              type='text'
              name='full_name'
              placeholder='Full name..'
              value={formData.full_name}
              onChange={handleChange}
              required
            />
          </div>
					
          <div className='signup-Input-container signup-input-fields'>
            <label className='signup-label'>Email<span style={ {color: 'red'} }>*</span></label>
            <input
              className='signup-input'
              type='email'
              name='email'
              placeholder='Email..'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className='signup-Input-container signup-input-fields'>
            <label className='signup-label'>Role<span style={ {color: 'red'} }>*</span></label>
            <input
              className='signup-input'
              type='text'
              name='role'
              placeholder='role...'
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>

          <div className='signup-Input-container signup-input-fields'>
            <label className='signup-label'>Phone number<span style={ {color: 'red'} }>*</span></label>
            <input
              className='signup-input'
              type='tel'
              name='phone_number'
              placeholder='Phone number..'
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>

         <PasswordInput value={formData.password} onChange={handleChange}/>

          <div className='signup-Input-container signup-input-fields'>
            <label className='signup-label'>Re-enter password<span style={ {color: 'red'} }>*</span></label>
            <input
              className='signup-input'
              type='password'
              name='confirmPassword'
              placeholder='Re-enter password..'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {error && <div className='signup-error'>{error}</div>}
          {message && <div className='signup-error'>{message}</div>}
          <div className='signup-button-container'>
            <button type='submit' className='signup-button1'>Verify Email</button>
          </div>
        </form>

        <span className='signup-read-policy'>
          Please read <span style={{ color: '#0EA5E9', cursor: 'pointer' }}>Terms of service</span> and <span style={{ color: '#0EA5E9', cursor: 'pointer' }}>privacy note</span>.
        </span>

        <span style={{ marginTop: 12, fontSize: 14, fontFamily: 'Georgia, serif' }}>
          Already have an account? <Link style={{ textDecoration: 'none', fontSize: 14, fontFamily: 'Georgia, serif' }} to={'/login'}>
            <span style={{ color: '#0EA5E5', fontFamily: 'Georgia, serif' }}>Login</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterAdmin;
