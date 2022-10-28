import { CartItemContainer, ItemDetail, Name, Img } from "./cart-item.styles";
import { FC } from "react";
import { TCartItem } from "../../store/cart/cart.types";
type CartItemProps = {
  cartItem: TCartItem;
};
const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={name} />
      <ItemDetail>
        <Name>{name}</Name>
        <span>
          ${price} x {quantity}
        </span>
      </ItemDetail>
    </CartItemContainer>
  );
};
export default CartItem;
