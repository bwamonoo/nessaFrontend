import React from 'react'
import '../styles/VendorDetails.css'
import { FaRegEdit } from "react-icons/fa";
import { TbProgressCheck } from "react-icons/tb";

const VendorDetails = () => {
  return (
    <div className='V-detail-main'>

      <div className='first-vdetail-box'>
        <span className='detail-welcome'>Welcome to Nessa Center , Sell With Us!</span>
        <span className='detail-instruction'>Fill every section below to start selling</span>

        <div className='detail-info-box'>

          <span className='detail-options'>
            <span className='shop-info'>Shop Information <FaRegEdit /></span>
            <span className='shop-info-progress'><TbProgressCheck /> in Progress</span>
          </span>

          <span className='detail-options'>
            <span className='shop-info'>Shop Information <FaRegEdit /></span>
            <span className='shop-info-progress'><TbProgressCheck /> in Progress</span>
          </span>

          <span className='detail-options'>
            <span className='shop-info'>Shop Information <FaRegEdit /></span>
            <span className='shop-info-progress'><TbProgressCheck /> in Progress</span>
          </span>

        </div>
      </div>


      <div className="second-vdetail-box">
        {/* <div className="section"> */}
        <span className='v-shop-info'>Shop Information</span>
        <span className='v-account-details'>Account Details</span>
        <span className='v-account-details-info'>Your seller account information</span>

        <div className="v-first-input">
          {/* <div className="form-group"> */}
            <div className="v-first-field">
              <label>Account Email*</label>
              <input type="email" placeholder="Enter email" />
            </div>
            <div 
            onCl
            className="v-first-field">
              <label>Account Phone Number*</label>
              <input type="tel" placeholder="Enter phone number" />
            </div>
            <div className="v-first-field">
              <label>Account Type*</label>
              <input type="text" placeholder="Select account type" />
            </div>
          {/* </div> */}
        </div>

        <div className="v-second-input-box">
          <span className='v-shop-details'>Shop Details</span>
          <div className="v-second-input">
            <div className="v-second-field">
              <label>Shop Name*</label>
              <input type="text" placeholder="Enter shop name" />
            </div>
            <div className="v-second-field">
              <label>Shop Description*</label>
              <input type="text" placeholder="Enter shop description" />
            </div>
          </div>
        </div>

        <div className="subsection">
          <span>Communication Details</span>
          <p>How should we reach out to you? We'll send communications and contact you on the details below:</p>
          <div className="form-group">
            <div className="form-field">
              <label>Contact Name*</label>
              <input type="text" placeholder="Enter contact name" />
            </div>
            <div className="form-field">
              <label>Contact Email*</label>
              <input type="email" placeholder="Enter contact email" />
            </div>
            <div className="form-field">
              <label>Contact Phone Number*</label>
              <input type="tel" placeholder="Enter contact phone number" />
            </div>
          </div>
          <button className="save-button">SAVE</button>
        </div>

        <div className="subsection">
          <span>Representative Details</span>
          <span>Legal Representative Details</span>
          <div className="form-group">
            <div className="form-field">
              <label>Full Name*</label>
              <input type="text" placeholder="Enter full name" />
            </div>
            <div className="form-field">
              <label>Provide ID Type*</label>
              <input type="text" placeholder="Select ID type" />
            </div>
            <div className="form-field">
              <label>Tax Identification Number*</label>
              <input type="text" placeholder="Enter tax identification number" />
            </div>
            <div className="form-field">
              <label>Provide Image of ID*</label>
              <input type="file" />
            </div>
          </div>

          <span>Legal Representative Address</span>
          <div className="form-group">
            <div className="form-field">
              <label>Address Line 1*</label>
              <input type="text" placeholder="Enter address line 1" />
            </div>
            <div className="form-field">
              <label>Address Line 2</label>
              <input type="text" placeholder="Enter address line 2" />
            </div>
            <div className="form-field">
              <label>City/Town*</label>
              <input type="text" placeholder="Enter city/town" />
            </div>
            <div className="form-field">
              <label>Region*</label>
              <input type="text" placeholder="Enter region" />
            </div>
          </div>
          <button className="save-button">SAVE</button>
        </div>

        <div className="subsection">
          <span>Payment Details</span>
          <span>Preferred Payment Option</span>
          <p>Select the payment method of your choice, and ensure to provide all required details. We'll review the validity of your documents upon submission.</p>
          <div className="payment-options">
            <label>
              <input type="radio" name="payment" />
              Bank Account
            </label>
            <label>
              <input type="radio" name="payment" />
              Mobile Money
            </label>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label>Registered Name*</label>
              <input type="text" placeholder="Enter registered name" />
            </div>
            <div className="form-field">
              <label>Phone Number*</label>
              <input type="tel" placeholder="Enter phone number" />
            </div>
          </div>
          <button className="save-button">SAVE</button>
        </div>

        <div className="submit-section">
          <span>Done filling your details?</span>
          <button className="submit-button">SUBMIT</button>
        </div>
        {/* </div> */}
      </div>

    </div>
  )
}

export default VendorDetails