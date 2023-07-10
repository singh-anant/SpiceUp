import { Link, useRouteError } from "react-router-dom";
import ErrorImg from "../../assets/error_page1.png";

const ErrorComponent = () => {
  const err = useRouteError();
  return (
    <div className="error-page">
      <img src={ErrorImg} alt="Error Image" />
      <h1>
        Inspiration not found. Please refuel with a slice of pizza and try again
      </h1>
      <h3 className="error-data">{err.data}</h3>
      <h3 className="error-back-home">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  );
};

export default ErrorComponent;
