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
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    getRestaurantList();
  }, []);

  async function getRestaurantList() {
    const data = await fetch(ALL_RES_LIST);
    const json = await data.json();
    console.log(
      json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  // Early Return
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <ShimmerSimpleGallery card imageHeight={200} caption />
  ) : (
    <>
      <div className="search-container">
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
            const data = filterData(searchText, allRestaurants);
            //  Update the data
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <h1>Oops!No restaurant matches</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                className="r-link"
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
export default BodyComponent;
