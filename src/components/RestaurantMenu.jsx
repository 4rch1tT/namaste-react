import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json.data);
    };

    fetchMenu();
  }, []);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[3].card.card;
  console.log(itemCards);
  const items = itemCards.map((item) => item.card.info);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}-{"  Rs"}
            {item.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
