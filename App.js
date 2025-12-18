import React from "react";
import ReactDOM from "react-dom/client";

// Jsx syntax -> not html but React.createElement which is converted by the transpiler(babel) in the bundler to React element(object) which is then converted to html by .render method

/* React Element
 * const heading = <h1 id="heading">Namste React 🦥</h1>;
 */

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRhMhx7UA6rwV4mBSOTjFqV9D_vAyRgwqhPpBmctghZy2v9JCES"
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

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <div className="res-logo-container">
        <img
          alt="res-logo"
          className="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/26d62df0-a5b4-43be-9b7b-ee927cd803c4_235620.JPG"
        />
      </div>
      <div className="res-contents">
        <h3>KFC</h3>
        <p>Fried Chicken</p>
        <p>4.4 stars</p>
        <p>20 mins</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input />
        <button>Search</button>
      </div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

// React Functional Component -> a function that return React elements(JSX)
// Component Composition -> composing 2 components together
const AppLayout = () => {
  return (
    <div className="app">
      <Navbar />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
