import { RES_IMG_CDN } from "../config";
import { AiFillStar } from "react-icons/ai";
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  avgRating,
  costForTwoString,
}) => {
  return (
    <div className="card">
      <img className="r-img" src={RES_IMG_CDN + cloudinaryImageId} />
      <h3 className="r-name">{name}</h3>
      <h5 className="r-cuisines">{cuisines.join(", ")}</h5>

      <span>
        <h4
          className="r-rating"
          style={
            avgRating < 4
              ? { backgroundColor: "red" }
              : avgRating === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white", backgroundColor: "green" }
          }
        >
          <AiFillStar style={{ color: "white" }} />
          {avgRating}
        </h4>

        <h4 className="r-lastMileTravelString">🛵{lastMileTravelString}</h4>

        <h4 className="r-costForTwoString">{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
