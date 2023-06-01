import logo from "../../assets/logo.png";
const HeaderComponent = () => {
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Food</li>
          <li>Ecart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
