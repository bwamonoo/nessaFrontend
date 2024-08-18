import React, { useState } from "react";
import "../styles/AddProduct.css";
import upload_area from "../asset/upload_area.svg";
import axiosInstance from '../config/axiosConfig';
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
	const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    categoryId: 1,
    description: "",
		stockQuantity: 1,
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("product_name", formData.name);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("stock_quantity", formData.stockQuantity);
    data.append("image", image);

    try {
      const response = await axiosInstance.post(`api/vendor/products/${formData.categoryId}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Product uploaded successfully:", response.data);
			
			navigate('/manage-product')
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };
  return (
    <div className="add-product-wrapper">
      <div className="add-product">
        <div className="addproduct-itemfield">
          <p>Product title</p>
          <input
            value={formData.name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Type here"
						required
          />
        </div>
        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input
						 type="text"
						 name="old_price"
						 placeholder="Type here"
					  />
          </div>
          <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input
              value={formData.price}
              onChange={handleChange}
              type="text"
              name="price"
              placeholder="Type here"
							required
            />
          </div>
        </div>
				<div className="addproduct-itemfield">
          <p>Stock quantity</p>
          <input
            value={formData.stockQuantity}
            onChange={handleChange}
            type="text"
            name="stockQuantity"
            placeholder="Type here"
						required
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Product Category</p>
          <select
            value={formData.category}
            onChange={handleChange}
            name="categoryId"
            className="add-product-selector"
						required
          >
            <option value={1}>Perfumes</option>
            <option value={2}>Electronics</option>
            <option value={3}>Sports</option>
            <option value={4}>Clothing</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <label htmlFor="file-input">
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              className="addproduct-thumbnail-img"
              alt=""
            />
          </label>
          <input
            onChange={handleImageChange}
            type="file"
            name="image"
            id="file-input"
            hidden
					  accept="image/*"
          />
        </div>
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="addproduct-btn"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
