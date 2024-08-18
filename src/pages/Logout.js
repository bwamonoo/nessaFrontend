import React, { useContext, useEffect } from 'react'
import { logoutUser } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
	const navigate = useNavigate();
	const { logout } = useAuth();

	useEffect(() => {
    handleLougout()
  }, []);



	const handleLougout = async () => {
		try {
			await logoutUser();
			await logout();
			navigate('/login');
		} catch (err) {
			console.error('Login error:', err);
		}
  }

	return (
		<div>Logging user out...</div>
	)
}

export default Logout