import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addToCart } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="mt-4 ">
      {items.map((item) => (
        <div
          className="border-b border-solid-gray-100 py-6 px-2 text-left flex gap-6 "
          key={item.card?.info?.id}
        >
          <div className="w-9/12">
            <div className="font-bold mb-2">
              <span>{item.card?.info?.name}</span>{" "}
              <span>₹{item.card?.info?.price / 100}</span>
            </div>
            <p className="text-sm">{item.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
            <button
              className="absolute bg-black text-gray-50 p-2 rounded-lg"
              onClick={() => handleAddToCart(item)}
            >
              ADD+
            </button>
            <img
              src={CDN_URL + item.card?.info?.imageId}
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
