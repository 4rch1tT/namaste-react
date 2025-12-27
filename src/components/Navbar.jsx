import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Navbar = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <p><Link to="/">Home</Link></p>
        <p><Link to="/about">About Us</Link></p>
        <p><Link to="/contact">Contact Us</Link></p>
        <p><Link to="/grocery">Grocery</Link></p>
        <p>Cart</p>
        <button
          className="login"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
