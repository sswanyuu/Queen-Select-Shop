import "./cart-dropdown.styles.scss";
import { CartItemContext } from "../../contexts/cart-items.context";
import Button from "../button/button.component";
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
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <hr></hr>
      <span className="total">Total : ${total}</span>
      <Button
        buttonType="inverted"
        children="Check out"
        onClick={goToCheckoutHandler}
      />
    </div>
  );
};
export default CartDropdown;
