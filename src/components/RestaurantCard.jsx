import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
  return (
    <div className="res-card">
      <div className="res-logo-container">
        <img
          alt="res-logo"
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="res-contents">
        <h3>{name}</h3>
        <p>{cuisines.join(",")}</p>
        <p>{avgRating}</p>
        <p>{sla.deliveryTime}mins</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
