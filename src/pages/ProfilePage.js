import React, { useContext } from "react";
import "../styles/ProfilePage.css";
import { CiHeart, CiSearch, CiCreditCard1 } from "react-icons/ci";
import {
  IoHelpCircleOutline,
  IoEllipseOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import { TbPasswordUser } from "react-icons/tb";
// import { FaRegCircle } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { HiClock } from "react-icons/hi2";
import { RiUserSettingsLine } from "react-icons/ri";
import { PiAddressBookTabsThin } from "react-icons/pi";
import { VscHistory } from "react-icons/vsc";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineCancel } from "react-icons/md";
import { NessaContext } from "../context/NessaContext";
import Account from "../components/Account/Account";
import Wishlist from "../components/Wishlist/Wishlist";

// ProfilePage component
const ProfilePage = () => {
  const { showWishlist, setShowWishlist, showAccount, setShowAccount } =
    useContext(NessaContext);

  return (
    <div className="main-profile-container">
      {/* Profile Information */}
      <span className="profile-info-two-divs">
        {/* First Profile Box */}
        <div className="first-profile-box">
          <span
            onClick={() => {
              setShowAccount(!showAccount);setShowWishlist(false);
            }}
            className="info"
          >
            <RiUserSettingsLine className="profile-icons" size={25} />
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Manage Account
            </Link>
          </span>

          <span className="info">
            <VscHistory className="profile-icons" size={25} />
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              History
            </Link>
          </span>

          <span className="info">
            <IoNotificationsOutline className="profile-icons" size={25} />
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Notifications
            </Link>
          </span>

          <span
            onClick={() => {
              setShowWishlist(!showWishlist); setShowAccount(false);
            }}
            className="info"
          >
            <CiHeart className="profile-icons" size={25} />
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Wishlist
            </Link>
          </span>

          <span className="info">
            <HiClock className="profile-icons" size={25} />
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Viewed Recently
            </Link>
          </span>

          <span className="info">
            <TbPasswordUser className="profile-icons" size={25} />
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Manage Password
            </Link>
          </span>

          <span className="info">
            <PiAddressBookTabsThin className="profile-icons" size={25} />
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Address Book
            </Link>
          </span>

          <span className="info">
            <CiCreditCard1 className="profile-icons" size={25} />
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Update Payment Method
            </Link>
          </span>

          <span 
          className="profiile-logout-span">LOGOUT</span>
        </div>

        {showAccount && <Account />}

        {showWishlist && <Wishlist />}
      </span>
    </div>
  );
};

export default ProfilePage;
