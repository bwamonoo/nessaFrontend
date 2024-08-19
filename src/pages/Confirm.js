import React, { useEffect, useState } from "react";
import "../styles/Confirm.css";
import { Link, useParams } from "react-router-dom";
import { verifyEmail } from "../services/api";

const Confirm = () => {
  const { token } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const handleVerifyEmail = async () => {
      try {
        await verifyEmail(token);
        setConfirmed(true);
      } catch (error) {
        console.error("Verification failed:", error);
        setError("Verification failed. Please try again or contact support.");
      } finally {
        setLoading(false);
      }
    };

    handleVerifyEmail();
  }, [token]);

  if (loading) {
    return <div className="email-box">Wait while we confirm your email...</div>;
  }

  if (error) {
    return (
      <div className="email-box">
        <div className="email-error">{error}</div>
        <span>Error Confirming email. Try signing up again.</span>
        <Link to={"/signup"} className="login-link">Signup page</Link>
      </div>
    );
  }

  if (confirmed) {
    return (
      <div className="email-box">
        <div className="email-confirm">Email Confirmed</div>
        <span>Click on the button below to go to the login page</span>
        <Link to={"/login"} className="login-link">Login page</Link>
      </div>
    );
  }

  return null; // This should never be reached, but it's here as a fallback.
};

export default Confirm;
