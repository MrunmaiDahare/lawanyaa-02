import React, { useState } from "react";


import "./productDetail.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SofaProduct1 from "../../assets/our products/p2-1.jpg";
import SofaProduct2 from "../../assets/our products/p2-2.jpg";
import SofaProduct3 from "../../assets/our products/p2-3.jpg";
import SofaProduct4 from "../../assets/our products/p2-4.jpg";
import SofaProduct5 from "../../assets/our products/p2-5.jpg";
import SofaProduct6 from "../../assets/our products/p2-1.jpg";
import SofaProduct7 from "../../assets/our products/p2-2.jpg";
import SofaProduct8 from "../../assets/our products/p2-3.jpg";
import SofaProduct9 from "../../assets/our products/p2-4.jpg";

import Fabric01 from "../../assets/our products/fabric1.jpg";
import Fabric02 from "../../assets/our products/fabric2.jpg";
import Fabric03 from "../../assets/our products/fabric3.jpg";
import Fabric04 from "../../assets/our products/fabric4.jpg";
import Fabric05 from "../../assets/our products/fabric6.jpg";
import { CiCircleInfo, CiDeliveryTruck } from "react-icons/ci";
import Item1 from "../../assets/you-may-like/yml-1.jpg";
import Item2 from "../../assets/you-may-like/yml-2.jpg";
import Item3 from "../../assets/you-may-like/yml-3.jpg";
import Item4 from "../../assets/you-may-like/yml-4.jpg";
import Item5 from "../../assets/you-may-like/yml-5.jpg";
import Item6 from "../../assets/you-may-like/yml-6.jpg";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ymal = [
  { imgsrc: Item1, name: "Blue T-Shirt", price: "$19.99", description: "A stylish blue t-shirt made from high-quality fabric."},
  { imgsrc: Item2, name: "Striped T-Shirt", price: "$24.99", description: "A trendy striped t-shirt with a comfortable fit."},
  { imgsrc: Item3, name: "Graphic Print T-Shirt", price: "$18.99", description: "A cool graphic print t-shirt that adds a touch of personality to your outfit."},
  { imgsrc: Item4, name: "Black V-Neck T-Shirt", price: "$21.99", description: "A classic black v-neck t-shirt that never goes out of style."},
  { imgsrc: Item5, name: "White Polo Shirt", price: "$29.99", description: "A sophisticated white polo shirt perfect for both casual and formal occasions."},
  { imgsrc: Item6, name: "Long Sleeve T-Shirt", price: "$22.99", description: "A versatile long sleeve t-shirt suitable for all seasons."},
];




const ThumbnailSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailImages = [
    SofaProduct1,
    SofaProduct2,
    SofaProduct3,
    SofaProduct4,
    SofaProduct5,
    SofaProduct6,
    SofaProduct7,
    SofaProduct8,
    SofaProduct9,
  ];

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? thumbnailImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === thumbnailImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="product-gallery" style={{ display: "flex" }}>
      <div className="thumbnail-images">
        {thumbnailImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Sofa"
            style={{ width: "100px", height: "auto" }}
            className={activeIndex === index ? "active" : ""}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
      <div className="main-image-container">
        <img
          src={thumbnailImages[activeIndex]}
          alt="Sofa"
          className="main-image"
        />
        <div className="slider-arrows">
          <button className="slider-arrow" onClick={handlePrevious}>
            <FiChevronLeft />
          </button>
          <button className="slider-arrow" onClick={handleNext}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

function ProductDetail() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: true,
    centerMode: true,
    prevArrow: (
      <div className="arrow arrow-prev">
        <FiChevronLeft />
      </div>
    ),
    nextArrow: (
      <div className="arrow arrow-next">
        <FiChevronRight />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1200, // adjust the settings for screens larger than 1200px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992, // adjust the settings for screens larger than 992px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576, // adjust the settings for screens larger than 576px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [counters, setCounters] = useState([
    { id: 1, value: 1 },
    { id: 2, value: 1 },
    { id: 3, value: 1 },
  ]);

  
  const subtotal = counters.reduce(
    (total, counter) => total + counter.value * 20500,
    0
  );

  // Calculate Fusion Discount


  const [mainImageSrc, setMainImageSrc] = useState(SofaProduct1);

  const handleThumbnailClick = (event) => {
    const thumbnailSrc = event.target.src;
    setMainImageSrc(thumbnailSrc);
  };

  const [showModal, setShowModal] = useState(false);

  const handleShowMainProduct = () => setShowModal(true);

  //   const [showCards, setShowCards] = useState(false);

  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const [activeSection, setActiveSection] = useState(null); // State to keep track of the active section

  // Event handler for clicking on each-txt
  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId); // Set the active section to the clicked sectionId
    const element = document.getElementById(sectionId); // Get the element with the corresponding sectionId
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Scroll to the element smoothly
    }
  };
  return (
    <>
      <div className="outer-div-pd">
        <div className="product-page">
          <div className="product-gallery" id="overview">
            <div className="product-whole" style={{ display: "flex" }}>
              <div className="thumbnail-images">
                <img
                  src={SofaProduct1}
                  alt="Sofa"
                  onClick={handleThumbnailClick}
                />
                <img
                  src={SofaProduct2}
                  alt="Sofa"
                  onClick={handleThumbnailClick}
                />
                <img
                  src={SofaProduct3}
                  alt="Sofa"
                  onClick={handleThumbnailClick}
                />
                <img
                  src={SofaProduct4}
                  alt="Sofa"
                  onClick={handleThumbnailClick}
                />
                <img
                  src={SofaProduct5}
                  alt="Sofa"
                  onClick={handleThumbnailClick}
                />
                <img
                  src={SofaProduct6}
                  alt="Sofa"
                  onClick={handleThumbnailClick}
                />
                <img
                  src={SofaProduct7}
                  alt="Sofa"
                  onClick={handleThumbnailClick}
                />
                <img
                  src={SofaProduct8}
                  alt="Sofa"
                  onClick={handleThumbnailClick}
                />
                <img
                  src={SofaProduct9}
                  alt="Sofa"
                  onClick={handleThumbnailClick}
                />
              </div>

              <img
                src={mainImageSrc}
                alt="Sofa"
                className="main-image"
                onClick={handleShowMainProduct}
              />

              <Modal
                className="modal-pp"
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
              >
                <Modal.Body>
                  <ThumbnailSlider />
                </Modal.Body>
                <Button
                  variant="light"
                  onClick={() => setShowModal(false)}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    backgroundColor: "transparent",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    class="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M9.464 8l3.88-3.879a.5.5 0 0 0-.707-.707L8.757 7.293 4.878 3.414a.5.5 0 1 0-.707.707L8.05 8l-3.88 3.879a.5.5 0 0 0 .708.707L8.757 8.707l3.879 3.88a.5.5 0 0 0 .707-.708L9.464 8z"
                    />
                  </svg>
                </Button>
              </Modal>
            </div>
          </div>
          <div className="product-description text-start">
            <p className="txt-h3"><strong>
              Women's Power Performance Elbow Sleeve Drawstring Top
              </strong>
            </p>
            <div className="select-section border-01">
              <p className="txt-01">Price Range: </p>
              <h5>₹250 - ₹450</h5><CiCircleInfo/>
            </div>

            <div className="select-section ">
              <p className="txt-01">FABRIC Color:</p>
              <div className="select-img">
                <div className="each-img-div">
                  <img src={Fabric01} alt="" />
                  <p className="fabric-name">Ash Grey</p>
                </div>
                <div className="each-img-div">
                  <img src={Fabric02} alt="" />
                  <p className="fabric-name">Salmon</p>
                </div>
                <div className="each-img-div">
                  <img src={Fabric03} alt="" />
                  <p className="fabric-name">Ash Grey</p>
                </div>
                <div className="each-img-div">
                  <img src={Fabric04} alt="" />
                  <p className="fabric-name">Ash Grey</p>
                </div>
                <div className="each-img-div">
                  <img src={Fabric05} alt="" />
                  <p className="fabric-name">Ash Grey</p>
                </div>
              </div>
            </div>

            <div className="select-section">
              <p className="txt-01">Sizes Available:</p>
              <div className="select-size">
                <div className="mobile-size">
                  <div className="mobile-size-01">
                <div className="each-size-div">
                  <p className="size-name">XS</p>
                </div>
                <div className="each-size-div">
                  <p className="size-name">S</p>
                </div>
                <div className="each-size-div">
                  <p className="size-name">M</p>
                </div>
                </div>
                <div className="mobile-size-01">
                <div className="each-size-div">
                  <p className="size-name">L</p>
                </div>
                <div className="each-size-div">
                  <p className="size-name">XXL</p>
                </div>
                <div className="each-size-div">
                  <p className="size-name">XXXL</p>
                </div>
                </div>
                </div>
              </div>
            </div>

            <div className="select-section">
              <p className="txt-01">Get a Sample:</p>
              <div className="select-size">
                <h6 className="txt-h3">₹450/-</h6>
                <p className="txt-01">Min Order: 1 </p>
              </div>
              
            </div>
            <div>
                <p>
                  <strong>Lead time:</strong>
                </p>
                <table className="custom-table">
                  <tr>
                    <td>Quantity (pieces)</td>
                    <td>1 - 500</td>
                  </tr>
                  <tr>
                    <td>Lead time (days)</td>
                    <td>7</td>
                  </tr>
                </table>
                <br />
                <p>
                  <strong>Customization:</strong>
                </p>
                <ul>
                  <li>Customized logo (Min. order 100 pieces)</li>
                  <li>Customized packaging (Min. order 100 pieces)</li>
                </ul>
              </div>
            <div className="delivery-form">
              {/* <p className="deliverto">Delivering to</p> */}
              <button
              
                className="address"
              >BUY NOW</button>
              
              <p className="df-txt-01">
                {/* <span className="truck">
                  <CiDeliveryTruck />
                </span> */}
                {/* Delivered to Ahmedabad : Apr 26th - May 8th */}
              </p>
            </div>
          </div>
        </div>
        <hr style={{ width: "90%", margin: "auto" }} />
      </div>





      <div class="shipping-info">
  <h2 class="shipping-title">Free Shipping on Orders with $99+ of Merchandise*</h2>
  <p class="shipping-description">*Excludes non-merchandise purchases and fees such as: personalization service charges for monogramming, embroidery, hemming, etc; Lands’ End Gift Cards; gift boxes or wrapping; or duties and taxes. Minimum purchase value applies to each ship-to address. Offer valid in US & Canada only.</p>

  <h3 class="shipping-title">Upgrading to Expedited or Express Shipping</h3>
  <p class="shipping-description">Upgrading to Expedited or Express Shipping is available for an additional fee (eligible US addresses only), see checkout for details.</p>

  <h3 class="shipping-title">International Shipping</h3>
  <p class="shipping-description">We partner with Borderfree to deliver your order as swiftly as possible to over 180 countries.</p>

  <h2 class="shipping-title">Complete Shipping Details</h2>
  
  <h2 class="shipping-title">Easy Returns</h2>
  <p class="shipping-description">To return items in store, bring the merchandise and proof of purchase, such as the packing slip included in the shipment, to a Lands' End store near you.</p>

  <p class="shipping-description">To return items by mail, use the Easy Return shipping label found on the packing slip for a flat fee of $6.95 (US only, $10.95 for Canada). If you use the Easy Return label to return items within 90 days of purchase AND you select to receive a Merchandise Credit for your refund, the $6.95 return shipping fee will be waived.</p>

  <p class="shipping-description">Personalized items, including, but not limited to, items with a monogram or embroidery, and items marked final sale may not be returned to Lands' End and are expressly excluded by our Return Policy.</p>

  <p class="shipping-description">See our <a class="shipping-link" href="/returns">Returns Page</a> for full policy details and return instructions.</p>
</div>




      <section className="section-ymal">
      
          <h3>You May Also Like</h3>
          <div className="shop">
            <Slider {...settings}>
              {ymal.map((item) => (
                <div key={item.title}>
                  <div className="client-div">
                    <img src={item.imgsrc} alt={item.title} />
                    <p className="name-price">{item.name}</p>
                    <p className="name-price">{item.price}</p>
                    <p style={{fontSize:"10px"}}>{item.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>



        
        <section className="section-7">
          <div className="flex-sec-7">
            <h3>Have Requirements? Enquire Here</h3>
            <div className="wrap">
              <input
                placeholder="Enter your Email here"
                type="text"
                className="input-class-sec-7"
              />
              <button className="sec-7-btn">Submit</button>
            </div>
          </div>
        </section>
    
    </>
  );
}

export default ProductDetail;
