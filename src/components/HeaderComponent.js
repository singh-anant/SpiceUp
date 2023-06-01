import logo from "../../assets/logo.png";
import { CiShoppingCart } from "react-icons/ci";
// import cart from "../../assets/cart.png";
const HeaderComponent = () => {
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Food</li>
          <li className="h-cart">
            <span className="h-count">1</span>
            <CiShoppingCart className="h-carticon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
