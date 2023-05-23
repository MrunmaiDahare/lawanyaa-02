import React from 'react';
import './productDetail.scss';
import Tshirt from "../../assets/Hoodie/p (10).png";

const ProductDetails = () => {
  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={Tshirt} alt="T-Shirt" />
      </div>
      <div className="product-info">
        <h1 className="product-title">T-Shirt Title</h1>
        <div className="rating">
          <span className="rating-stars">⭐⭐⭐⭐⭐</span>
          <span className="rating-count">(256)</span>
        </div>
        <p className="price">₹550.00</p>
        <p className="delivery">One-Day FREE delivery Tomorrow, May 19. Order within 9 hrs 4 mins. Details</p>
        <p className="delivery-address">Deliver to Ajay - Pimpri Chinchwad 411033</p>
        <p className="availability">In stock</p>
        <p className="sold-by">Sold by Cocoblu Retail and Fulfilled by Amazon.</p>
        <div className="quantity">
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
        </div>
        <div className="add-to-cart">
          <button className="add-to-cart-button">Add to Cart</button>
          <button className="buy-now-button">Buy Now</button>
        </div>
        <p className="size-message">
          M will fit you best based on data from customers who buy the same sizes as you.
        </p>
        <div className="product-details">
          <h2>Product Details</h2>
          <ul>
            <li>Is Discontinued By Manufacturer: No</li>
            <li>Product Dimensions: 27 x 24 x 2 cm; 150 Grams</li>
            <li>Date First Available: 12 April 2015</li>
            <li>Manufacturer: PAGE INDUSTRIES LIMITED</li>
            <li>ASIN: B00W062CB2</li>
            <li>Item model number: 2726-0105-WHITE White M</li>
            <li>Department: Men</li>
            <li>Manufacturer: PAGE INDUSTRIES LIMITED</li>
            <li>Item Weight: 150 g</li>
            <li>Item Dimensions LxWxH: 27 x 24 x 2 Centimeters</li>
            <li>Net Quantity: 1.00 count</li>
            <li>Generic Name: V Neck Half Sleeved T-Shirt</li>
            <li>Best Sellers Rank: #33 in Clothing & Accessories (See Top 100 in Clothing & Accessories)</li>
            <li>Customer Reviews: 4.3 out of 5 stars, 15,914 ratings</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
