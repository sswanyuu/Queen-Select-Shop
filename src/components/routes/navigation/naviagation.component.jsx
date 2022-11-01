//A component render to nothing
import { Fragment, useContext } from "react";
//Outlet decide where to put the child route component
//Link is for connect to another router (just like anchor)
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/crown.svg";
import { UserContext } from "../../../contexts/users.context";
import { CartItemContext } from "../../../contexts/cart-items.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-drop-down/cart-dropdown.component";
import {
  LogoContainer,
  NavigationContainer,
  NavLinkContainer,
  NavLink,
} from "./navigation.styles";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartItemContext);
  // console.log(currentUser);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>

        <NavLinkContainer>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            //use the style of NavLink but as span
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;