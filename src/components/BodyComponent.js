import { useEffect, useState } from "react";
import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import { ALL_RES_LIST } from "../config";

const BodyComponent = () => {
  // useState Hook-to create local state variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  useEffect(() => {
    getRestaurantList();
  }, []);

  async function getRestaurantList() {
    const data = await fetch(ALL_RES_LIST);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  // Early Return
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <ShimmerSimpleGallery card imageHeight={200} caption />
  ) : (
    <>
      <div className="search-container p-5 m-2">
        <input
          type="text"
          className="search-input"
          placeholder="Search for Restaurant"
          value={searchText}
          onChange={(x) => {
            setSearchText(x.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // We want filter the data first
            const Data = filterData(searchText, allRestaurants);
            //  Update the data

            setfilteredRestaurants(Data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <h1>Oops!No restro matches</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link className="r-link" to={"/restaurant/" + restaurant.data.id}>
                <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default BodyComponent;
