import {
  CheckoutItemContainer,
  RemoveButton,
  Image,
  Label,
  Quantity,
  Arrow,
  Value,
} from "./checkout-item.styles";
import { useContext } from "react";
import { CartItemContext } from "../../contexts/cart-items.context";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, removeItemWhenCheckout } =
    useContext(CartItemContext);
  const addItemhandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const removeItemWhenCheckoutHandler = () => removeItemWhenCheckout(cartItem);
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <Image>
        <img src={imageUrl} alt={name} />
      </Image>
      <Label>{name}</Label>

      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemhandler}>&#10095;</Arrow>
      </Quantity>
      <Label>{price}</Label>
      <RemoveButton onClick={removeItemWhenCheckoutHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
