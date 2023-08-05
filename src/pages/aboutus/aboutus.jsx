import React from "react";
import "./aboutus.scss";
import Factory from "../../assets/factory.gif";
// import Trust from "../../assets/icons/trust.png";
import PeopleTrust from "../../assets/icons/trust (1).png";
import Secure from "../../assets/icons/secure-payment.png";
import Quality from "../../assets/icons/quality-assurance.png";
import Certified from "../../assets/icons/certified.png";
import FadeUp from "../../components/Fadeup";
import GoogleMapReact from 'google-map-react';



const AnyReactComponent = ({ text }) => <div>{text}</div>;
function AboutUs() {

    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <section className="about-us">
     
      <div >
      <FadeUp>
        <h2 className="section-title">About Us</h2>
        <div className="section-content">
          <div className="company-description">
            <h3>Welcome to our Company</h3>
            <p>
              We are a team of dedicated professionals committed to delivering
              high-quality products and services to our customers. With years of
              experience in the industry, we strive to exceed expectations and
              provide innovative solutions that meet the needs of our clients.
            </p>
            <p>
              Our mission is to become a trusted partner for businesses
              worldwide, offering reliable and cost-effective solutions that
              drive success. We value integrity, collaboration, and customer
              satisfaction, and we continuously strive for excellence in
              everything we do.
            </p>
          </div>
          <div className="company-values">
            <img src={Factory} alt="" />
          </div>
        </div>
        </FadeUp>
        

        <section className="section-4">
          <FadeUp>
            <h2 className="section-title">Why Rely Us?</h2>
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

    

        <section className="section-7" style={{marginTop: "50px", backgroundColor: "#f6f6f6"}}>
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
    
    </section>
  );
}

export default AboutUs;
