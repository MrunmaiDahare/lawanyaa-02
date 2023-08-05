import "./cart.scss";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Item1 from "../../assets/you-may-like/yml-1.jpg";
import Item2 from "../../assets/you-may-like/yml-2.jpg";
import Item3 from "../../assets/you-may-like/yml-3.jpg";
import Item4 from "../../assets/you-may-like/yml-4.jpg";
import Item5 from "../../assets/you-may-like/yml-5.jpg";
import Item6 from "../../assets/you-may-like/yml-6.jpg";
import Slider from "react-slick";
import { City, State } from "country-state-city";

export const Cart = () => {
  const navigate = useNavigate();
  const [states, setStates] = useState([]);
  // const [isoCode, setIsoCode] = useState("");
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [isoCode, setIsoCode] = useState("AN");
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [cartItems, setCartProducts] = useState([]);

  setCartProducts([]);

  console.log(cities + " + " + city);
  useEffect(() => {
    setStates(State.getStatesOfCountry("IN"));
  }, []);

  useEffect(() => {
    setCities(City.getCitiesOfState("IN", isoCode));
  }, [isoCode]);

  const ymal = [
    { imgsrc: Item1, name: "Blue T-Shirt", price: "$19.99", description: "A stylish blue t-shirt made from high-quality fabric."},
    { imgsrc: Item2, name: "Striped T-Shirt", price: "$24.99", description: "A trendy striped t-shirt with a comfortable fit."},
    { imgsrc: Item3, name: "Graphic Print T-Shirt", price: "$18.99", description: "A cool graphic print t-shirt that adds a touch of personality to your outfit."},
    { imgsrc: Item4, name: "Black V-Neck T-Shirt", price: "$21.99", description: "A classic black v-neck t-shirt that never goes out of style."},
    { imgsrc: Item5, name: "White Polo Shirt", price: "$29.99", description: "A sophisticated white polo shirt perfect for both casual and formal occasions."},
    { imgsrc: Item6, name: "Long Sleeve T-Shirt", price: "$22.99", description: "A versatile long sleeve t-shirt suitable for all seasons."},
  ];

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3.5,
    swipeToSlide: true,
    arrow: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    prevArrow: <FiChevronLeft className="slick-prev" />,
    nextArrow: <FiChevronRight className="slick-next" />,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1118,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1028,
        settings: {
          slidesToShow: 3,
          arrow: false,
        },
      },
      {
        breakpoint: 735,
        settings: {
          slidesToShow: 1,
          arrow: false,
        },
      },
    ],
  };

  return (
    <div className="cart-container">
      <div className="inner-box">
        <div className="cart-box">
          <div className="cart-details">
            <div className="left-box">
              <div className="cart-items-box left-box-div">
                <span>1. CART</span>
                {cartItems.length !== 0 && (
                  <div className="cart-items">
                    {cartItems.map((item, index) => {
                      return (
                        <div key={index}>
                          <div className="cart-item">
                            <div>
                              <img src={item.img} alt="" />
                              <h6>{item.name}</h6>
                            </div>
                            
                            <span>₹ {item.amount}</span>
                            <IoMdClose className="icon" />
                          </div>
                          <hr />
                        </div>
                      );
                    })}

                    <section className="section-ofpw">
                      <span className="txt">Often Purchased With</span>
                      <div className="container-3">
                        <div className="whole">
                          <Slider {...settings}>
                            {ymal.map((product, index) => (
                              <div className="each-card1" key={index}>
                                <img src={product.imgsrc} alt={product.name} />
                                <p className="text-center item-name">
                                  {product.name}
                                </p>
                                <p className="text-center item-price">
                                  {product.price}
                                </p>
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </div>
                    </section>
                    {!showAddAddress && (
                      <div className="button-div">
                        <button
                          onClick={() => setShowAddAddress((prev) => !prev)}
                        >
                          CONTINUE TO Address
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="address left-box-div">
                <span>2. ADDRESS</span>
                {showAddAddress && (
                  <div className="address-box">
                    <div className="heading">contact details</div>
                    <form action="">
                      <div className="combined-box">
                        <div className="input-box">
                          <label htmlFor="">Email</label>
                          <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-box">
                          <label htmlFor="">Phone Number</label>
                          <input type="tel" placeholder="Phone number" />
                        </div>
                      </div>
                      <div className="combined-box">
                        <div className="input-box">
                          <label htmlFor="">First Name</label>
                          <input type="text" placeholder="First name" />
                        </div>
                        <div className="input-box">
                          <label htmlFor="">Last Name</label>
                          <input type="text" placeholder="Last name" />
                        </div>
                      </div>
                      <div className="input-box">
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder="Street Address" />
                      </div>
                      <div className="input-box">
                        <label htmlFor="">Apartment/Unit/Suite(Optional)</label>
                        <input type="text" placeholder="A-002, Gujarat" />
                      </div>
                      <div className="input-box">
                        <label htmlFor="">State</label>
                        <select
                          onChange={(e) => {
                            setIsoCode(e.target.value);
                          }}
                          name=""
                          id=""
                          title=""
                        >
                          {states.map((state) => {
                            return (
                              <option key={state.isoCode} value={state.isoCode}>
                                {state.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="combined-box">
                        <div className="input-box">
                          <label htmlFor="">Pincode</label>
                          <input type="text" placeholder="382350" />
                        </div>
                        <div className="input-box">
                          <label htmlFor="">City</label>
                          {isoCode ? (
                            <>
                              <select
                                onChange={(e) => {
                                  setCity(e.target.value);
                                }}
                                name=""
                                id=""
                                title=""
                              >
                                {City.getCitiesOfState("IN", isoCode).map((city) => {
                                  return (
                                    <option key={city.name} value={city.name}>
                                      {city.name}
                                    </option>
                                  );
                                })}
                              </select>
                            </>
                          ) : (
                            <select disabled>
                              <option value="">Select a state</option>
                            </select>
                          )}
                        </div>
                      </div>
                      <div className="input-box">
                        <label htmlFor="">
                          Delivery Instructions (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="Delivery Instructions"
                        />
                      </div>
                    </form>
                    <div className="heading">
                      estimated delivery: Apr 26th - May 8th
                    </div>
                  </div>
                )}
              </div>
              {cartItems.length === 0 && (
                <div className="left-box-div">
                  <span>3. PAYMENT</span>
                </div>
              )}
            </div>

            <div className="summary-box">
              <p>CHECKOUT SUMMARY</p>
              {cartItems.length === 0 ? (
                <span>Your cart is empty</span>
              ) : (
                <div className="checkout-summary">
                  <span>
                    <span className="bold-text">Delivered to</span> Ahmedabad
                  </span>
                  <span>
                    <span className="bold-text">Estimated Delivery:</span> Apr
                    26th - May 8th
                  </span>
                  <div className="coupon-box">
                    <label htmlFor="">APPLY COUPON CODE</label>
                    <input type="text" placeholder="Enter Coupon Code" />
                  </div>
                  <div className="total">
                    <div>
                      <p>Subtotal</p>
                      <span className="bold-text">₹ 2598</span>
                    </div>
                    <div>
                      <p>Shipping</p>
                      <span className="bold-text">FREE</span>
                    </div>
                    <div>
                      <p>Tax (Sales)</p>
                      <span className="bold-text">₹ 246.81</span>
                    </div>
                    <div>
                      <p>TOTAL</p>
                      <span className="bold-text">₹ 2844.81</span>
                    </div>
                    <button>PAY NOW</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="shop-the-sale">
            <div>
              <div className="text-div">
                <div className="title">The Great Outdoors Sale </div>
                <div className="bold-text">Save Big</div>
                <div className="desc">Ends in 5 days at midnight</div>
              </div>
              <button
                onClick={() => {
                  navigate("/allproducts");
                }}
              >
                shop the sale
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
