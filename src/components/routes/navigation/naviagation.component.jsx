//A component render to nothing
import { Fragment } from "react";
//Outlet decide where to put the child route component
//Link is for connect to another router (just like anchor)
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
