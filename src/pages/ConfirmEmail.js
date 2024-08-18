import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmEmail = () => {
	const location = useLocation();
  const { message } = location.state || { message: "No message passed" };
	return (
		<div>
			<p>Registration Success Page</p>
			<p>{message}</p>
		</div>
	)
}

export default ConfirmEmail