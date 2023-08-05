import React, { useState } from 'react';
import './admin-pannel.scss';

const AdminPanel = () => {
  const [product, setProduct] = useState({
    price: '',
    category: '',
    description: '',
    deliveryTime: '',
    leadTime: '',
    minOrderQuantity: '',
    fabric: '',
    sizeAvailable: '',
    title: '',
    specialNote: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform logic to upload the product object to your backend or do other actions
    console.log(product);
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel - Upload Product</h2>
      <form onSubmit={handleFormSubmit}>
      <label>
          Title:
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={product.description}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <br />
        <label>
          Delivery Time:
          <input
            type="text"
            name="deliveryTime"
            value={product.deliveryTime}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Lead Time:
          <input
            type="text"
            name="leadTime"
            value={product.leadTime}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Minimum Order Quantity:
          <input
            type="text"
            name="minOrderQuantity"
            value={product.minOrderQuantity}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Fabric:
          <input
            type="text"
            name="fabric"
            value={product.fabric}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Size Available:
          <input
            type="text"
            name="sizeAvailable"
            value={product.sizeAvailable}
            onChange={handleInputChange}
          />
        </label>
        <br />
        
        <label>
          Special Note:
          <textarea
            name="specialNote"
            value={product.specialNote}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <br />
        <button type="submit">Upload Product</button>
      </form>
    </div>
  );
};

export default AdminPanel;
