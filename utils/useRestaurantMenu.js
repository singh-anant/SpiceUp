import { useEffect, useState } from "react";
import { RES_MENU_LIST } from "../src/config";

const useRestaurantMenu = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState();
  useEffect(() => {
    getRestaurantFood();
  }, []);
  async function getRestaurantFood() {
    const data = await fetch(RES_MENU_LIST + id);
    const json = await data.json();
    setRestaurantMenu(
      json.data?.cards[2]["groupedCard"]?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }
  return restaurantMenu;
};

export default useRestaurantMenu;
