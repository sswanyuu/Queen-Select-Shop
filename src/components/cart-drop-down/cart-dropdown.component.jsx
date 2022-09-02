import {
  Total,
  Hr,
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { CartItemContext } from "../../contexts/cart-items.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const CartDropdown = () => {
  const { cartItems, total } = useContext(CartItemContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <Hr></Hr>
      <Total>Total : ${total}</Total>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        children="Check out"
        onClick={goToCheckoutHandler}
      />
    </CartDropdownContainer>
  );
};
export default CartDropdown;
