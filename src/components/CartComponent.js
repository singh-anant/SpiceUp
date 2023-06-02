import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodComponent from "./FoodComponent";
import { clearCart } from "../../utils/cartSlice.js";
import emptyCartImg from "../../assets/empty_cart.png";
import { Link } from "react-router-dom";
import { clearMoney } from "../../utils/amountSlice.js";
const CartComponent = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalamount = useSelector((store) => store.amount.totalprice);

  const dispatch = useDispatch();
  const clearWholeCart = () => {
    dispatch(clearCart());
  };
  const clearCartAmount = () => dispatch(clearMoney());
  return cartItems.length === 0 ? (
    <div className="c-emptyCartImg">
      <img className="c-empty" src={emptyCartImg} alt="" />
      <h2>Your cart seems to be empty</h2>
      <Link className="c-link" to="/">
        <button className="e-back-home-btn">Back Home</button>
      </Link>
    </div>
  ) : (
    <div className="cart">
      <h1 className="c-title">Cart Items</h1>

      {cartItems.map((item) => (
        <FoodComponent key={item.id} {...item} />
      ))}
      <div className="c-total-wrapper">
        <button
          className="c-clear-btn"
          onClick={() => {
            clearWholeCart();
            clearCartAmount();
          }}
        >
          Clear All
        </button>
        <h2 className="c-total-amount">
          Total Amount-<span>₹{totalamount.toFixed(2)}</span>
        </h2>
      </div>
    </div>
  );
};

export default CartComponent;
