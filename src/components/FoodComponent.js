import { useDispatch } from "react-redux";
import { ITEM_IMG_CDN } from "../config";
import { removeItem } from "../../utils/cartSlice";
import { subtractMoney } from "../../utils/amountSlice";

const FoodComponent = ({ name, id, price, description, imageId }) => {
  const dispatch = useDispatch();
  const removeFoodItem = (id) => {
    dispatch(removeItem(id));
  };
  const removeAmount = (amount) => {
    dispatch(subtractMoney(amount));
  };
  return (
    <div className="c-card">
      <div className="c-item-details">
        <h2 className="c-name">{name}</h2>
        <h3 className="c-item-price">₹{price / 100}</h3>
        <p className="c-description">{description}</p>
        {/* <h3 className="c-quantity">×2</h3> */}
      </div>
      <div className="c-img-wrapper">
        {imageId && (
          <img className="c-item-image" src={ITEM_IMG_CDN + imageId} alt="" />
        )}
        <button
          className="c-remove-btn"
          onClick={() => {
            removeFoodItem(id);
            removeAmount(price / 100);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default FoodComponent;
