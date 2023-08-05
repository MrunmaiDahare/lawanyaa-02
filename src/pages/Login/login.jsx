import {React, useState} from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
// import { ContactBox } from "../../components/ContactBox/ContactBox";

export const Login = () => {
    // const navigate = useNavigate();
    const [email, setEmail] = useState("");
  
    // Handle login
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  return (
    <div className="container-div-login">
      <div className="inner-div">
        <div className="login-box">
          <h2>Log in or register</h2>
          <div className="combined-box">
            <div className="box">
              <span>With your email:</span>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleEmailChange}
                  />
                </div>
                <button type="submit">Continue</button>
              </form>
            </div>
            <div className="divider-box">
              <div className="divider"></div>
              OR
              <div className="divider"></div>
            </div>
            <div className="login-link-box">
              <span>With an existing account:</span>
              <div className="login-icon-box">
                <FcGoogle/>
                google
              </div>
              <div className="login-icon-box">
                <BsFacebook/>
                facebook
              </div>
              <small>
                By Continuing with Google or Facebook, you are agreeing to our
                {/* <Link className="link" to={"/terms-of-use"}> */}
                  Terms & Conditions.
                {/* </Link> */}
              </small>
            </div>
          </div>
        </div>
        {/* <ContactBox /> */}
      </div>
    </div>
  );
};
