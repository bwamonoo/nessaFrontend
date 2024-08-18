import React, { useEffect } from "react";
import "../styles/Confirm.css";
import { Link, useParams } from "react-router-dom";
import { verifyEmail } from "../services/api";

const Confirm = () => {
  const { token } = useParams();

	useEffect(() => { 
		const handleVerifyEmail = async () => {
			try {
				const response = await verifyEmail(token)	
			} catch (error) {
				console.error("Verification failed:", error);
			}
		}
    
		handleVerifyEmail();
  }, []);

  return (
    <div className="email-box">
      <div className="email-confirm">Email Confirmed</div>

      <span>Click on the button below to go to the login page</span>

      <Link to={"/login"}>Login page</Link>
    </div>
  );
};

export default Confirm;
