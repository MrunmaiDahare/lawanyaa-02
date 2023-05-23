import React, { useRef, useState, useEffect } from "react";
import "./home.scss";
import TrustSeal from "../../assets/icons/trusted-seller.jpg";
import SlideImg1 from "../../assets/tt (1).png";
import SlideImg2 from "../../assets/tt (2).png";
import SlideImg3 from "../../assets/tt (3).png";
import SlideImg4 from "../../assets/tt (4).png";
import SlideImg5 from "../../assets/tt (5).png";
import SlideImg6 from "../../assets/tt (6).png";
import SlideImg7 from "../../assets/tt (7).png";
import SlideImg8 from "../../assets/tt (8).png";
import Client1 from "../../assets/clients/client1.png";
import Client2 from "../../assets/clients/client2.png";
import Client3 from "../../assets/clients/client3.png";
import Client4 from "../../assets/clients/client4.png";
import Client5 from "../../assets/clients/client5.png";
import Client6 from "../../assets/clients/client6.jpg";
import Client7 from "../../assets/clients/client7.png";
import Client8 from "../../assets/clients/client8.png";
import Client9 from "../../assets/clients/client9.jpg";
import Trust from "../../assets/icons/trust.png";
import PeopleTrust from "../../assets/icons/trust (1).png";
import Secure from "../../assets/icons/secure-payment.png";
import Quality from "../../assets/icons/quality-assurance.png";
import Certified from "../../assets/icons/certified.png";
import { FcApproval } from "react-icons/fc";
// import { Link } from 'react-router-dom';
// import { FcCollaboration } from "react-icons/fc";
import Bkc from "../../assets/bkc.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Paa1 from "../../assets/Hoodie/p (1).jpg";
import Paa2 from "../../assets/Hoodie/p (1).png";
import Paa3 from "../../assets/Hoodie/p (10).png";
import Paa4 from "../../assets/Hoodie/p (2).jpg";
import Paa5 from "../../assets/Hoodie/p (2).png";
import Paa6 from "../../assets/Hoodie/p (3).jpg";
import Paa7 from "../../assets/Hoodie/p (4).png";
import Paa8 from "../../assets/Hoodie/p (5).jpg";
import Paa9 from "../../assets/Hoodie/p (5).png";
import Paa10 from "../../assets/Hoodie/p (6).jpg";
import Paa11 from "../../assets/Hoodie/p (6).png";
import Paa12 from "../../assets/Hoodie/p (7).jpg";
import Paa13 from "../../assets/Hoodie/p (7).png";
import Paa14 from "../../assets/Hoodie/p (8).jpg";
import Paa15 from "../../assets/Hoodie/p (8).png";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function useElementOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIsIntersecting] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );

    const currentRef = ref.current; // Create a local variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

function AnimateIn({ from, to, children }) {
  const ref = useRef(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles = { transition: "600ms ease-in-out" };

  return (
    <div
      ref={ref}
      style={
        onScreen ? { ...defaultStyles, ...to } : { ...defaultStyles, ...from }
      }
    >
      {children}
    </div>
  );
}

function FadeUp({ children }) {
  return (
    <AnimateIn
      from={{ opacity: 0, transform: "translateY(2rem)" }}
      to={{ opacity: 1, transform: "none" }}
    >
      {children}
    </AnimateIn>
  );
}
const products = [
  {
    imgSrc: Paa1,
    title: "Stylish Hoodie",
  },
  {
    imgSrc: Paa2,
    title: "Athletic Sports Tshirt",
  },
  {
    imgSrc: Paa3,
    title: "Ultra-Comfort Tee",
  },
  {
    imgSrc: Paa4,
    title: "Classic Tee",
  },
  {
    imgSrc: Paa5,
    title: "Cricket Fan Tshirt",
  },
  {
    imgSrc: Paa6,
    title: "Layered Fashion",
  },
  {
    imgSrc: Paa7,
    title: "Trendy Trouser",
  },
  {
    imgSrc: Paa8,
    title: "White Formal Shirt",
  },
  {
    imgSrc: Paa9,
    title: "Cricket Performance Pant",
  },
  {
    imgSrc: Paa10,
    title: "Chic Skirt",
  },
  {
    imgSrc: Paa11,
    title: "Smart Formal Pant",
  },
  {
    imgSrc: Paa12,
    title: "Fashionable Hoodie",
  },
  {
    imgSrc: Paa13,
    title: "Stylish Pant",
  },
  {
    imgSrc: Paa14,
    title: "Trendy Pant",
  },
  {
    imgSrc: Paa15,
    title: "Ultimate Comfort Tee",
  },
];

const reviews = [
  {
    name: "Dk",
    location: "Vadodara, Gujarat",
    date: "06-September-21",
    review:
      "I ordered uniforms for my staff from this shop and I am extremely satisfied with the quality and professionalism. The uniforms were well-fitted and the fabric was top-notch. Highly recommended!",
  },
  {
    name: "Atikh Siddiqui",
    location: "Nanded, Maharashtra",
    date: "01-November-20",
    review:
      "I recently purchased uniforms for my school from this shop. The attention to detail and craftsmanship is remarkable. The uniforms are comfortable, durable, and stylish. My students love them!",
  },
  {
    name: "Chandar Shekhar",
    location: "Nanded, Maharashtra",
    date: "21-March-20",
    productName: "School T Shirts",
    review:
      "I ordered school t-shirts for our students, and I must say, the shop delivered them on time with impeccable quality. The uniforms were exactly as per our specifications. Thumbs up!",
  },
  {
    name: "Mr Sahu",
    location: "Nagpur, Maharashtra",
    date: "13-December-19",
    productName: "School Uniform Shirt",
    review:
      "I am highly impressed with the shop's prompt delivery and the excellent quality of the school uniform shirts. The stitching is flawless, and the fabric feels comfortable. Great job!",
  },
  {
    name: "Ratip Sheikh",
    location: "Chandrapur, Maharashtra",
    date: "20-February-22",
    productName: "School Uniforms",
    review:
      "I have been purchasing school uniforms from this shop for years, and they never disappoint. The uniforms are made with precision, and the attention to detail is evident. I highly recommend their services.",
  },
  {
    name: "Hasibur Rohaman Sk",
    location: "Kolkata, West Bengal",
    date: "27-January-21",
    productName: "School T Shirts",
    review:
      "The school t-shirts I purchased from this shop exceeded my expectations. The quality is exceptional, and the design is modern and trendy. The students feel proud wearing them. Thank you!",
  },
  {
    name: "Akshay Kawale",
    location: "Nagpur, Maharashtra",
    date: "17-August-20",
    review:
      "I am extremely happy with the uniforms I ordered from this shop. The fabric is soft and comfortable, and the stitching is of the highest quality. The shop's attention to detail is commendable!",
  },
  {
    name: "Yogesh Bhagat",
    location: "Chandrapur, Maharashtra",
    date: "22-May-20",
    productName: "Face Mask",
    review:
      "I needed customized face masks for my employees, and this shop delivered them flawlessly. The masks are comfortable to wear and fit perfectly. I appreciate their dedication to customer satisfaction.",
  },
  {
    name: "Minushree Mahendrakumar Rawat",
    location: "Nagpur, Maharashtra",
    date: "25-March-20",
    productName: "Face Mask",
    review:
      "I recently purchased face masks from this shop, and I am highly impressed. The masks are of excellent quality and provide a comfortable fit. I feel safe and protected wearing them.",
  },
];

const clients = [
  {
    imgSrc: Client1,
  },
  {
    imgSrc: Client2,
  },
  {
    imgSrc: Client3,
  },
  {
    imgSrc: Client4,
  },
  {
    imgSrc: Client5,
  },
  {
    imgSrc: Client6,
  },
  {
    imgSrc: Client7,
  },
  {
    imgSrc: Client8,
  },
  {
    imgSrc: Client9,
  },
];
const items = [
  {
    imgSrc: SlideImg1,
    title: "Hospitality Uniform",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgSrc: SlideImg2,
    title: "Corporate Uniform",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgSrc: SlideImg3,
    title: "Kurti Uniform",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgSrc: SlideImg4,
    title: "Medical Apron",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgSrc: SlideImg5,
    title: "NCC Uniform",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgSrc: SlideImg6,
    title: "Promotional Tshirt",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgSrc: SlideImg7,
    title: "Saree Uniform",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgSrc: SlideImg8,
    title: "School Uniform",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
function HomePage() {
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <AiOutlineRight />,
    prevArrow: <AiOutlineLeft />,
  };
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
  return (
    <>
      <div className="home-page">
        <img className="background-image" src={Bkc} alt="" />
        <h1 className="overlay-text">
          <p className="txt-01">Welcome to,</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="lawanya">Lawanyaa </span>
            <span class="text_1"> Manufacturer!</span>
            <span class="text_2"> Uniforms!</span>
          </div>
        </h1>
      </div>
      <div className="container whole">
        <section className="section-2">
          <img
            src={Trust}
            alt="trust"
            width="60"
            style={{ marginRight: "15px" }}
          />
          MEET OUR SCHOOL UNIFORM PROGRAMME, SCHOOL ADMINS!{" "}
          <button className="btn">CLICK HERE FOR CATALOGUE</button>
        </section>

        <div>
          <h3 className="cat">Our Uniform Categories</h3>
          <div className="shop container shop-1">
            <Slider {...settings}>
              {items.map((item) => (
                <div key={item.title}>
                  <div className="card">
                    <Link to={`/products?title=${encodeURIComponent(item.title)}`}>
                      <img src={item.imgSrc} alt={item.title} />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      {/* <p className="card-text">{item.description}</p> */}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <section className="section-3">
          <h3>Are You Looking For This...</h3>
          <div className="shop ">
            <Slider {...settings}>
              {products.map((item) => (
                <div key={item.title}>
                  <div className="card sec-3-card">
                  <Link to={`/products?title=${encodeURIComponent(item.title)}`}>
                    <img src={item.imgSrc} alt={item.title} />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      {/* <p className="card-text">{item.description}</p> */}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section className="section-4">
          <FadeUp>
            <h3>About Us</h3>
          </FadeUp>
          <div className="sec-4-div">
            <div className="col2">
              <FadeUp>
                <div className="side">
                  <img src={PeopleTrust} width={100} alt="" />
                  <p>Trusted by 150+ Clients</p>
                </div>
              </FadeUp>
              <FadeUp>
                <div className="side">
                  <img src={Secure} width={100} alt="" />
                  <p>Secured and Government Approved Company</p>
                </div>
              </FadeUp>
            </div>
            <div className="col2">
              <FadeUp>
                <div className="side">
                  <img src={Quality} width={100} alt="" />
                  <p>Best Quality you can rely On</p>
                </div>
              </FadeUp>
              <FadeUp>
                <div className="side">
                  <img src={Certified} width={100} alt="" />
                  <p>Trademark registered Brand</p>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        <section className="section-5">
          <h3>Our Clients</h3>
          <div className="shop">
            <Slider {...settings}>
              {clients.map((item) => (
                <div key={item.title}>
                  <div className="client-div">
                    <img src={item.imgSrc} alt={item.title} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section className="section-6">
          <h2>See What people are saying about us</h2>
          <div className="content-sec-6">
            <Slider {...settings2}>
              {reviews.map((testimonial, index) => (
                <div key={index}>
                  <p className="by-name">
                    {testimonial.name}
                    <FcApproval />
                  </p>
                  <h4 className="stars">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                  </h4>
                  <h4>{testimonial.review}</h4>
                  <p className="details">~ {testimonial.location}</p>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section className="section-8">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={TrustSeal}
                  alt="IndiaMART Trust Seal Verified"
                  className="section-8-img img-fluid"
                />
              </div>
              <div className="col-md-4">
                <h4 className="section-8-title">Nature of Business</h4>
                <p>Exporter and Manufacturer</p>
              </div>
              <div className="col-md-4">
                <h4 className="section-8-title">Total Number of Employees</h4>
                <p>210 + People</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h4 className="section-8-title">Year of Establishment</h4>
                <p>2008</p>
              </div>
              <div className="col-md-4">
                <h4 className="section-8-title">Legal Status of Firm</h4>
                <p>Proprietary Company</p>
              </div>
              <div className="col-md-4">
                <h4 className="section-8-title">Annual Turnover</h4>
                <p>Rs. 90 Lac +</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h4 className="section-8-title">GST No.</h4>
                <p className="text-capitalize">27aojpd6942h1zt</p>
              </div>
              <div className="col-md-4">
                <h4 className="section-8-title">CIN No.</h4>
                <p>**************</p>
              </div>
              <div className="col-md-4">
                <h4 className="section-8-title">Import Export Code (IEC)</h4>
                <p>************</p>
              </div>
            </div>
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
      </div>
    </>
  );
}

export default HomePage;
