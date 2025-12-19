import { LOGO_URL } from "../utils/constants";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <p>Home</p>
        <p>About Us</p>
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Navbar