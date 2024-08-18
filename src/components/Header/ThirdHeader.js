import React, { useContext, useState } from "react";
import { TbCategory2 } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import filter from "../../asset/icons/FILTER.png";
import "./ThirdHeader.css";
import { motion } from "framer-motion";

const ThirdHeader = () => {
  const [showArrowIconDirection, setShowArrowIconDirection] = useState(false);
  const [showOthersInfo, setShowOthersInfo] = useState(false);
  const [showFilterInfo, setShowFilterInfo] = useState(false);

  return (
    <div className="third-header">
      <div className="category-main">
        <span
          // onMouseEnter={() => setShowFilterInfo(true)}
          onClick={() => {
            setShowArrowIconDirection(!showArrowIconDirection);
            setShowFilterInfo(!showFilterInfo);
          }}
          className="category-name"
        >
          <span>
            <TbCategory2 size={22} />
          </span>

          <span style={{ display: "flex", alignItems: "center", gap: "2px" }}>
            All categories
            {showArrowIconDirection ? (
              <IoIosArrowUp size={18} />
            ) : (
              <IoIosArrowDown size={18} />
            )}
          </span>
        </span>

        <span className="help-others-menu">
          <span className="help-center">Help Center</span>

          <span
            onClick={() => setShowOthersInfo(!showOthersInfo)}
            className="others"
          >
            Others
            {showOthersInfo ? (
              <IoIosArrowUp size={18} />
            ) : (
              <IoIosArrowDown size={18} />
            )}{" "}
          </span>

          <div className="filter-icon">
            <img src={filter} alt="Filter Icon" style={{ cursor: "pointer" }} />
          </div>

          {showFilterInfo && (
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 10 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="product-categories"
            >
              <h3>Product Categories</h3>
              <hr />
              <div>
                <h4>Perfumes</h4>
                <label>
                  <input type="checkbox" /> Men's Perfumes
                </label>
                <label>
                  <input type="checkbox" /> Women's Perfumes
                </label>
                <label>
                  <input type="checkbox" /> Unisex Perfumes
                </label>
                <label>
                  <input type="checkbox" /> Perfume Sets
                </label>
                <label>
                  <input type="checkbox" /> New Arrivals
                </label>
              </div>
              <div>
                <h4>Outfits</h4>
                <label>
                  <input type="checkbox" /> Men's Clothing
                </label>
                <label>
                  <input type="checkbox" /> Women's Clothing
                </label>
                <label>
                  <input type="checkbox" /> Accessories
                </label>
                <label>
                  <input type="checkbox" /> New Arrivals
                </label>
                <label>
                  <input type="checkbox" /> Best Sellers
                </label>
              </div>
            </motion.div>
          )}
        </span>
      </div>
    </div>
  );
};

export default ThirdHeader;
