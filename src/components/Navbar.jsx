import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";

const Navbar = () => {
  const [btnName, setBtnName] = useState("Login");

  const {loggedInUser} = useContext(UserContext)

  return (
    <div className="flex justify-between px-4 py-2 bg-blue-50 shadow-xl">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex gap-5 items-center">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/about">About Us</Link>
        </p>
        <p>
          <Link to="/contact">Contact Us</Link>
        </p>
        <p>
          <Link to="/grocery">Grocery</Link>
        </p>
        <p>Cart</p>
        <button
          className="login"
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
        <p className="font-bold ">{loggedInUser}</p>
      </div>
    </div>
  );
};

export default Navbar;
