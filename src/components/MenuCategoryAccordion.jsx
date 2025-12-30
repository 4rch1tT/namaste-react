import { useState } from "react";
import ItemList from "./ItemList";

const MenuCategoryAccordion = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
   setShowItems(!showItems)
  };

  return (
    <div className="cursor-pointer mb-6">
      <div className=" w-6/12 m-auto p-2 bg-gray-100 shadow-lg rounded-sm">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <div>{showItems && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default MenuCategoryAccordion;
