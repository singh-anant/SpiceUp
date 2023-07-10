import React from "react";
import { useParams } from "react-router-dom";
import { RES_IMG_CDN, ITEM_IMG_CDN } from "../config";
import { ShimmerCategoryList } from "react-shimmer-effects";
import useRestaurantInfo from "../../utils/useRestaurantInfo";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice.js";
import { addMoney } from "../../utils/amountSlice.js";
const RestaurantMenuComponent = () => {
  const { id } = useParams();
  const restaurantInfo = useRestaurantInfo(id);
  const restaurantMenu = useRestaurantMenu(id);
  const dispatch = useDispatch();
  // We will pass all the items
  const addFoodItem = (item) => {
    // Dispatching action and passing the payload
    dispatch(addItem(item));
  };

  const addAmountItem = (amount) => {
    dispatch(addMoney(amount / 100));
  };

  return !restaurantMenu ? (
    <ShimmerCategoryList title items={7} categoryStyle="STYLE_SEVEN" />
  ) : (
    <div className="restaurant-menu">
      <div className="rm-summary">
        <img
          className="rm-img"
          src={RES_IMG_CDN + restaurantInfo?.cloudinaryImageId}
          alt={restaurantInfo?.name}
        />
        <div className="rm-summary-details">
          <h2 className="rm-title">{restaurantInfo?.name}</h2>
          <p className="rm-tags">{restaurantInfo?.cuisines.join(", ")}</p>
          <div className="rm-details">
            <div className="rm-rating" style={{ color: "white" }}>
              <AiFillStar style={{ color: "f5b301" }} />
              <span style={{ color: "#f5b301" }}>
                {restaurantInfo?.avgRating}
              </span>
            </div>
            <div>|</div>
            <div>{restaurantInfo?.sla.slaString}</div>
            <div>|</div>
            <div>{restaurantInfo?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="rm-content">
        <div className="rm-items-container">
          <div className="rm-title-wrap">
            <h3 className="rm-menu-title">Recommended</h3>
            <p className="rm-count">{restaurantMenu.length} ITEMS</p>
          </div>
          <div className="rm-menu-items-list">
            {restaurantMenu?.map((item) => (
              <div className="rm-menu-item" key={item?.card?.info?.id}>
                <div className="rm-menu-item-details">
                  <h3 className="item-title">{item?.card?.info?.name}</h3>
                  <p className="item-cost">₹{item?.card?.info?.price / 100}</p>
                  <p className="item-desc">{item?.card?.info?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.card?.info?.imageId && (
                    <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN + item?.card?.info?.imageId}
                      alt={item?.card?.info?.name}
                    />
                  )}
                  <button
                    className="add-btn"
                    onClick={() => {
                      addFoodItem(item?.card?.info);
                      addAmountItem(item?.card?.info?.price);
                    }}
                  >
                    ADD{" "}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuComponent;
