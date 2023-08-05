import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import MapImg from "../../assets/map.png";
import { IoIosCall } from "react-icons/io";
import "./contactus.scss";

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form submission
    // ...
  };

  return (
    <section className="contact-us">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <br />
        {/* <hr className="line-1" /> */}
        <div className="contact-info">
          <div className="contact-details">
            <div className="contact-item">
              <FaMapMarkerAlt/>
             
              <p> <strong>Office Address:</strong> <br /> Raghuji Nagar
Nagpur-09
Maharashtra</p>
            </div>
            <div className="contact-item">
              <IoIosCall/>
              <p> <strong>Contact Details:</strong> <br /> +1 123-456-7890</p>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <p><strong>Mail Us:</strong> <br /> contact@example.com</p>
            </div>
          </div>
          <div className="map-container">
            <img src={MapImg} alt="" />
          </div>
        </div>
        <div className="contact-form">
          <h3 className="section-title">Get in Touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
