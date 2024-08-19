import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/ConfirmEmail.css'

const ConfirmEmail = () => {
	const location = useLocation();
  const { message } = location.state || { message: "No message passed" };
	return (
		<div className='confirm-email-box'>
			<span>Registration Success Page</span>
			<p>{message}</p>
		</div>
	)
}

export default ConfirmEmail