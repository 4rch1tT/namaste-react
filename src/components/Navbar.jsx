import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Navbar = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <p>Home</p>
        <p>About Us</p>
        <p>Contact Us</p>
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
