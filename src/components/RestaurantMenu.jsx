import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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
            {item.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
