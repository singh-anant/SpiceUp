import { RES_IMG_CDN, ITEM_IMG_CDN } from "../config";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
const RestaurantMenuCard = ({ id }) => {
  const restaurantMenu = useRestaurantMenu(id);
  console.log(id);
  return (
    <div className="restaurant-menu-content">
      <div className="menu-items-container">
        <div className="menu-title-wrap">
          <h3 className="menu-title">Recommended</h3>
          <p className="menu-count">{restaurantMenu.length} ITEMS</p>
        </div>
        <div className="menu-items-list">
          {restaurantMenu?.map((item) => (
            <div className="menu-item" key={item?.card?.info?.id}>
              <div className="menu-item-details">
                <h3 className="item-title">{item?.card?.info?.name}</h3>
                <p className="item-cost">
                  {item?.card?.info?.defaultPrice > 0
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(item?.price / 100)
                    : " "}
                </p>
                <p className="item-desc">{item?.card?.info?.description}</p>
              </div>
              <div className="menu-img-wrapper">
                {item?.cloudinaryImageId && (
                  <img
                    className="menu-item-img"
                    src={ITEM_IMG_CDN + item?.card?.info?.cloudinaryImageId}
                    alt={item?.card?.info?.name}
                  />
                )}
                <button className="add-btn"> ADD +</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
