import { CartItemContainer, ItemDetail, Name, Img } from "./cart-item.styles";
const CartItem = ({ cartItem }) => {
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
