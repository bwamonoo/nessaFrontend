import { useState } from 'react';
import { healthCheck } from '../../services/api';

const Health = () => {
	const [healthResponse, setHealtResponse] = useState('');

	const performCheck = async () => {
		return await healthCheck();
	};

	const displayResults = async () => {
	 const response = await performCheck();
	 setHealtResponse(response.data);
	}	

	displayResults()
		.then((response) => response)
		.catch((err) => err);

	return (
		<div>
			<p>Health Check</p>
			<p>{healthResponse.data}</p>
			<p>{healthResponse.message}</p>
		</div>
	)
}

export default Health