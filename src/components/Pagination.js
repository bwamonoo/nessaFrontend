import React from "react";
//import './Pagination.css';
import "./Pagination.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <span className="previous">
      <MdArrowBackIos size={25}/>
        Previous
      </span>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={currentPage === index + 1 ? "active" : ""}
        >
          {index + 1}
        </button>
      ))}

      <span className="next">
        Next
        <MdOutlineArrowForwardIos size={25}/>
      </span>

    </div>
  );
};

export default Pagination;
