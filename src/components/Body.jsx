import { useState, useEffect } from "react";
import { Link } from "react-router";
import { RES_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  console.log(restaurantList);
  console.log(filteredResList);

  // Shimmer ui is a modern concept where skeleton is place instead of blank pages
  // This concept of rendering component based on conditions is known as conditional rendering
  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
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
      <div className="res-container">
        {filteredResList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
