import { useEffect, useState } from "react";
import { RES_MENU_LIST } from "../src/config";

const useRestaurantInfo = (id) => {
  const [restaurantInfo, setRestaurantInfo] = useState();
  useEffect(() => {
    getRestaurentInfo();
  }, []);
  async function getRestaurentInfo() {
    const data = await fetch(RES_MENU_LIST + id);
    const json = await data.json();
    setRestaurantInfo(json.data?.cards[0]?.card?.card?.info);
  }
  return restaurantInfo;
};

export default useRestaurantInfo;
