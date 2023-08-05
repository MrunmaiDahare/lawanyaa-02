import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { AiFillMail } from "react-icons/ai";
import "./footer.scss";
import { Link } from 'react-router-dom';
const Footer = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  // const [country, setCountry] = useState("");
  const [requirement, setRequirement] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted!");
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Our Company</h4>
            <ul>
            <li>
          <Link to='/about-us'>About Us</Link>
        </li>
        <li>
          <Link to='/terms-and-conditions'>Terms and Policy</Link>
        </li>
        <li>
          <Link to='/faq'>FAQ</Link>
        </li>
        <li>
          <Link to='/delivery-tracking-policy'>Delivery and Tracking Policy</Link>
        </li>
        <li>
          <Link to='/payment-policy'>Payment Policy</Link>
        </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>
              <span className="icon">
                <IoMdCall />
              </span>
              (+91) 82083 19285
              <br />
              <span className="icon">
                <AiFillMail />
              </span>
              info@lawanyaa.com
            </p>
            <p>
              <span className="icon">
                <FaMapMarkerAlt/>
              </span>
              Office Address: <br />
              Raghuji Nagar, Bhosalewada, Behind Chota Tajbag
              <br />
              Nagpur, 440009
            </p>
          </div>
          <div className="col-md-4">
            <div className="form-div" style={{ width: "400px" }}>
              <h3>Leave a Message, we will call you back!</h3>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <div className="input-wrap">
                    <span>+91</span>
                    <input
                      type="text"
                      id="mobileNumber"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="Enter your mobile"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="requirement">Requirement Details</label>
                  <br />
                  <textarea
                    id="requirement"
                    rows={4}
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                    placeholder="Additional details about your requirement..."
                    required
                  ></textarea>
                </div>

                <button className="footer-btn" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="text-muted">
            © 2023 Uniform Factory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
