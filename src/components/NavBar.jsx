import { Link } from "react-router-dom";
import "../styles/navbar.styles.scss";
import CartIcon from "./CartIcon";

const NavBar = () => {
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <Link
            className="logo-container"
            style={{ textDecoration: "none" }}
            to="/"
          >
            <img
              src="../src/assets/favicon.ico"
              alt="logo"
              className="logo"
            ></img>
            <div
              style={{
                fontSize: "2rem",
                padding: "0px 20px",
                color: "black",
                fontWeight: "500",
              }}
            >
              UK
            </div>
          </Link>
        </div>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/signIn">
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
