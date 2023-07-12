import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { logout } from "../../utils/authSlice";

import { useDispatch } from "react-redux";

// import cart from "../../assets/cart.png";
const HeaderComponent = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  const userName = useSelector((store) => store.user.username);
  const dispatch = useDispatch();
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
          <Link to="/" className="link">
            {isLoggedIn ? (
              <li style={{ padding: 30 }}>{userName}</li>
            ) : (
              <li>No User</li>
            )}
          </Link>
          {/* use conditional rendering for login and logout */}
          {isLoggedIn ? (
            <button className="h-login" onClick={() => dispatch(logout())}>
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="h-login">Login</button>
            </Link>
          )}
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
