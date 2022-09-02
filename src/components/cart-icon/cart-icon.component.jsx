import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import { useContext } from "react";
import { CartItemContext } from "../../contexts/cart-items.context";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartItemContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
