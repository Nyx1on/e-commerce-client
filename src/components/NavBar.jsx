import { Link } from "react-router-dom";
import "../styles/navbar.styles.scss";
import CartIcon from "./CartIcon";

const NavBar = () => {
  return (
    <>
      <div className="header">
        <Link className="logo-container" to="/">
          <img
            src="../src/assets/favicon.ico"
            alt="logo"
            className="logo"
          ></img>
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
          <Link className="option" to="/contact">
            CONTACT
          </Link>
          <CartIcon />
        </div>
      </div>
    </>
  );
};

export default NavBar;
