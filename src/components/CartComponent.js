import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodComponent from "./FoodComponent";
import { clearCart } from "../../utils/cartSlice.js";
import emptyCartImg from "../../assets/empty_cart.png";
import { Link } from "react-router-dom";
import { clearMoney } from "../../utils/amountSlice.js";
import GooglePayButton from "@google-pay/button-react";
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
      <div className="c-checkout-wrapper">
        <GooglePayButton
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                    gateway: "example",
                    gatewayMerchantId: "exampleGate",
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: "123456733",
              merchantName: "Demo Merchant",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: totalamount.toFixed(2),
              currencyCode: "INR",
              countryCode: "IN",
            },
            shippingAddressRequired: true,
            callbackIntents: ["PAYMENT_AUTHORIZATION"],
          }}
          onLoadPaymentData={(paymentRequest) => {
            console.log(paymentRequest);
          }}
          onPaymentAuthorized={(paymentData) => {
            console.log(paymentData);
            return { transactionState: "SUCCESS" };
          }}
          existingPaymentMethodRequired="false"
          buttonColor="Yellow"
          buttonLocale="checkout"
        ></GooglePayButton>
      </div>
    </div>
  );
};

export default CartComponent;
