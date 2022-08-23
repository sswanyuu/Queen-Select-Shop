import "./checkout-item.styles.scss";
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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemhandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeItemWhenCheckoutHandler}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
