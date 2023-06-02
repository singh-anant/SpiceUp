import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
// import cart from "../../assets/cart.png";
const HeaderComponent = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <div className="nav-items">
        <ul>
          <Link to="/" className="link">
            <li>Home</li>
          </Link>
          <Link to="/about" className="link">
            <li>About</li>
          </Link>
          <Link to="/contact" className="link">
            <li>Contact</li>
          </Link>
          <Link to="/" className="link">
            <button className="h-login">Logout</button>
          </Link>
          <Link to="/cart" className="link">
            <li className="h-cart">
              <span className="h-count">{cartItems.length}</span>
              <CiShoppingCart className="h-carticon" />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
