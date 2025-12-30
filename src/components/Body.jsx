import { useState, useEffect } from "react";
import { Link } from "react-router";
import { RES_API } from "../utils/constants";
import RestaurantCard, { withTopRatedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const TopRatedRestaurantCard = withTopRatedLabel(RestaurantCard);

  console.log(restaurantList);

  // useEffect without dependency array => keep on calling useEffect whenever the component re-renders
  // useEffect with empty dependency array => initially calls useEffect
  // useEffect with dependency array with value inside => calls useEffect when the value changes
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();

    console.log(json);

    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline :( </h1>;
  }
  // Shimmer ui is a modern concept where skeleton is place instead of blank pages
  // This concept of rendering component based on conditions is known as conditional rendering
  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="p-10">
      <div className="filter-container">
        <div className="search-container">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setFilteredResList(
                restaurantList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = restaurantList.filter(
              (res) => res.info.avgRating > 4.3
            );
            console.log(filtered);

            setFilteredResList(filtered);
          }}
        >
          Top rated
        </button>
      </div>
      <div className="p-4 m-4 flex gap-4 flex-wrap">
        {filteredResList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.4 ? (
              <TopRatedRestaurantCard resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
