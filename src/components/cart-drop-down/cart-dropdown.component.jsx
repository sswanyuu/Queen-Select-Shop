import "./cart-dropdown.styles.scss";
import { CartItemContext } from "../../contexts/cart-items.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
const CartDropdown = () => {
  const { cartItems } = useContext(CartItemContext);
  const cost = cartItems
    .map((item) => {
      return item.quantity * item.price;
    })
    .reduce((partialSum, a) => {
      return partialSum + a;
    }, 0);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <hr></hr>
      <span className="total">total : ${cost}</span>
      <Button buttonType="inverted" children="Check out" />
    </div>
  );
};
export default CartDropdown;
