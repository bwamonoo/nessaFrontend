import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './FirstHeader.css'

const FirstHeader = () => {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowLanguageOptions(false);
  };

  return (
    <div className="first-head-main">
      <div className="first-head">
        <span className="first-head-span">
          <Link style={{ textDecoration: "none", color: "black" }}>
            Sell on Nessa
          </Link>
        </span>
        <span className="first-head-span1">
          Buying and selling with comfort
        </span>

        <div className="first-head-div">
          <div
            className="language-selector"
            onMouseEnter={() => setShowLanguageOptions(true)}
            onMouseLeave={() => setShowLanguageOptions(false)}
          >
            <span className="first-head-div-span1">
              {selectedLanguage}{" "}
              <span className="english-icon">
                <MdKeyboardArrowDown />
              </span>
            </span>
            {showLanguageOptions && (
              <div className="language-options">
                <div onClick={() => handleLanguageChange("English")}>
                  English
                </div>
                <div onClick={() => handleLanguageChange("Spanish")}>
                  Spanish
                </div>
                <div onClick={() => handleLanguageChange("French")}>French</div>
                <div onClick={() => handleLanguageChange("German")}>German</div>
              </div>
            )}
          </div>

          <span className="first-head-div-span2">
            <span className="phone-icon">
              <FaPhoneVolume />
            </span>
            023484848
          </span>

          <span style={{ opacity: 0.6, fontFamily: "Georgia, serif" }}>
            Email: ecommerceness@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
