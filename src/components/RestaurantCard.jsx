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

export default RestaurantCard