//A component render to nothing
import { Fragment, useContext } from "react";
//Outlet decide where to put the child route component
//Link is for connect to another router (just like anchor)
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../../contexts/users.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

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
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
