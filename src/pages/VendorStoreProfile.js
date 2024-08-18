import React, { useState } from "react";
import "../styles/VendorStoreProfile.css";
import order from "../asset/order.png";
import product from "../asset/product.png";
import store from "../asset/store.png";
import help from "../asset/help.png";
import settings from "../asset/settings.png";
import user from "../asset/user.png";
import LOGO from "../asset/icons/LOGO.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import VendorDetails from "./VendorDetails";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";

const VendorStoreProfile = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [open, setOpen] = useState(false);

  return (
    <div className="v-main">
      <div className="logo-menu">
        <div>
          <img src={LOGO} alt="logo" />
          <span className="Vcenter">CENTER</span>
        </div>

        <div className="vendor-store-profile">
          <div className="menu-item order">
            <img src={order} alt="Orders Icon" />
            <span>Orders</span>
          </div>

          <div className="menu-item ">
            <img src={product} alt="Products Icon" />
            <span
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
              onClick={() => setShow1(!show1)}
            >
              My Products{" "}
              {show1 ? (
                <IoIosArrowUp style={{ marginTop: "4px" }} />
              ) : (
                <IoIosArrowDown style={{ marginTop: "4px" }} />
              )}
            </span>
          </div>
          {show1 && (
            <div className="submenu pduct">
              <span>Manage Products</span>
              <span onClick={() => setOpen(!open)}>Add New Products</span>
            </div>
          )}

          <div className="menu-item">
            <img src={store} alt="Store Icon" />
            <span
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
              onClick={() => setShow2(!show2)}
            >
              My Store{" "}
              {show2 ? (
                <IoIosArrowUp style={{ marginTop: "5px" }} />
              ) : (
                <IoIosArrowDown style={{ marginTop: "5px" }} />
              )}
            </span>
          </div>
          {show2 && (
            <div className="submenu">
              <span>Store Profile</span>
              <span>Details</span>
            </div>
          )}

          <div className="menu-item">
            <img src={help} alt="Help Icon" />
            <span>Help</span>
          </div>

          <div className="menu-item">
            <img src={settings} alt="Settings Icon" />
            <span>Settings</span>
          </div>

          <div className="menu-item user-info">
            <img src={user} alt="User Icon" />
            <span>benjaminwilberforce1@gmail.com</span>
          </div>
        </div>
      </div>

      {open && <AddProduct/>}
      {/* <VendorDetails /> */}
    </div>
  );
};

export default VendorStoreProfile;
