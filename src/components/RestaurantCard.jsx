import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData;
  return (
    <div className="w-78 h-96 bg-gray-100 rounded-lg hover:bg-gray-200 p-4">
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

// Higher order components -> takes a component and returns another component
export const withTopRatedLabel = () => {
  return (props) => {
    return (
      <div>
        <label className="bg-black text-gray-50 p-1 rounded-sm absolute">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
