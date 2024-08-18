import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { verifyPayment } from '../services/api';
import { NessaContext } from '../context/NessaContext';

const PaymentStatus = () => {
  const { fetchCartItems } = useContext(NessaContext);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Parse the query string using URLSearchParams
  const queryParams = new URLSearchParams(location.search);

  // Extract specific query parameters
  const reference = queryParams.get('reference');
  const trxnref = queryParams.get('trxref');

  const [verificationData, setVerificationData] = useState('');

  useEffect(() => {
    handlePaymentVerification();
    setIsLoading(false);
  }, []);

  const handlePaymentVerification = async () => {
    try {
      const response = await verifyPayment(reference);
      setVerificationData(response.data.data);
      fetchCartItems();
      console.log(response.data.data);
    } catch (error) {
      setError(error.response?.data?.messages);
      console.error('Error verifying payment:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  };

  console.log(verificationData);

  if ( !(verificationData.status == 'success') ) {
    return <div>Payment Verification Failed: {error}</div>;
  };

  return (
    <div>
      <h1>Payment verificaiton successful</h1>
      <h2>Payment status: {verificationData.status} </h2>
      <div>Amount: {verificationData.amount} </div>
      <div>Customer id: {verificationData.customer.id} </div>
      <div>Customer email: {verificationData.customer.email} </div>
      <div>Customer code: {verificationData.customer.customer_code} </div>
      <div>Reference: {reference} </div>
      <div>Trxn Reference: {trxnref} </div>
    </div>
  );
};

export default PaymentStatus;
