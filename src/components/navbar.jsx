import React, { useState } from 'react';
import "./navbar.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineShop } from "react-icons/ai";
import {
  BsCart,
  BsSearch,
  BsThreeDots,
} from "react-icons/bs";
import {
  FiHome,
  FiHelpCircle,
  FiMessageCircle,
} from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { IoIosCall } from "react-icons/io";
import { SiTrustpilot } from "react-icons/si";
import Flag from "../assets/icons/flag.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleSearchOpen = () => setOpen(true);
  const handleSearchClose = () => setOpen(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const list = [
    { title: "Home", icon: FiHome, color: "#dc143c" },
    { title: "Shop", icon: AiOutlineShop, color: "#3c40c6" },
    { title: "Get Quote", icon: FiMessageCircle, color: "#05c46b" },
    { title: "Help", icon: FiHelpCircle, color: "#0fbcf9" },
    { title: "WhatsApp Us", icon: BsWhatsapp, color: "#ffa801" },
  ];

  const handleListItemClick = (index) => {
    setActiveIndex(index);
    document.body.style.backgroundColor = list[index].color;
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



 



  return (
    <>
 
      <nav className="nav-web">
      <div className="small-nav-top"><p style={{display:"flex", gap:"10px"}}>Shipping All Over India <img src={Flag} alt="Indian Flag" /></p><p>Get Quotation Now <SiTrustpilot/> </p><p><IoIosCall/> +91 820 831 XXXX</p>
          </div>
        <div className="nav-container">
          <h1 className="nav-logo"><Link to="/">Lawanyaa</Link></h1>
          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/products"> Shop</Link>
              
            </li>
            <li>
              <Link to="/catalogue">Catalogue</Link>
            </li>
            <li>
              <Link to="/contactus">Contact</Link>
            </li>
          </ul>
          <div className="nav-button">
            <button
              className="btn btn-search nav-icon"
              onClick={handleSearchOpen}
            >
              <BsSearch />
            </button>
            <Link to="/cart">
            <button className="btn btn-search nav-icon">
              <BsCart />
            </button></Link>
            <Link to="/login"><button className="btn btn-login">Login</button></Link>
            <button className="btn btn-signup" style={{ marginLeft: "15px" }}>
              Signup
            </button>
          </div>
        </div>
        {open && (
          <div className="small-nav">
            <div class="input-group wrap-input mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search what are you looking for..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <button className=" input-group-text search-icon-small-nav" onClick={handleSearchClose}>
              <RxCross1 />
            </button>
            </div>
            
          </div>
        )}
      </nav>
      <nav className="nav-mobile">
        <div className="nav-container">
          <h1 className="nav-logo">Lawanyaa</h1>
          <div className="nav-mobile-icons">
            <span onClick={handleShow}>
              <BsThreeDots />
            </span>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Main Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ul className="nav-mobile-menu">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Shop</a>
                  </li>
                  <li>
                    <a href="/">Catalogue</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                </ul>
                <div className="nav-mobile-button">
                  <button className="btn btn-login">Login</button>
                  <button
                    className="btn btn-signup"
                    style={{ marginLeft: "15px" }}
                  >
                    Signup
                  </button>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </nav>
      <div className="nav-mobile-body">
        <div className="navigation">
          <ul>
            {list.map((item, index) => (
              <li
                key={index}
                className={`list ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleListItemClick(index)}
                data-color={item.color}
              >
                <a href="/">
                  <span className="icon">
                    <item.icon />
                  </span>
                  <span className="title">{item.title}</span>
                </a>
              </li>
            ))}
            <div className="indicator"></div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
