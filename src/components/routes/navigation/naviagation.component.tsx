import { Outlet, useLocation } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg'
import CartIcon from '../../cart-icon/cart-icon.component'
import CartDropdown from '../../cart-drop-down/cart-dropdown.component'
import { NavigationContainer, LogoContainer, NavLinkContainer, NavLink } from './navigation.styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../../store/user/user.selector'
import { selectIsCartOpen } from '../../../store/cart/cart.selector'
import { signOutStart } from '../../../store/user/user.action'

const Navigation = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  const location = useLocation()
  const isCheckoutPage = location.pathname === '/checkout'

  const signOutHandler = () => {
    dispatch(signOutStart())
  }

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          {!isCheckoutPage && <CartIcon />}
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation
