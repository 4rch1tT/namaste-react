import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData;
  return (
    <div className="w-78 bg-gray-100 rounded-lg hover:bg-gray-200">
      <div className="h-45 overflow-y-hidden p-3">
        <img
          alt="res-logo"
          className="w-full rounded-lg"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="res-contents">
        <h3 className="font-bold text-xl">{name}</h3>
        <p>{cuisines.join(",")}</p>
        <p>{avgRating}</p>
        <p>{sla.deliveryTime}mins</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
