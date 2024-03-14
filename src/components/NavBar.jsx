import { Link } from "react-router-dom";
import "../styles/navbar.styles.scss";

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
        {/** Options */}
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
        </div>
      </div>
    </>
  );
};

export default NavBar;
