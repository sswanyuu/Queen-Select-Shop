import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./product-card.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartItemContext } from "../../contexts/cart-items.context";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartItemContext);
  const { setIsCartOpen } = useContext(CartItemContext);

  const addProductToCart = () => {
    addItemToCart(product);
    setIsCartOpen(true);
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name}></img>
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add To Cart
      </Button>
    </ProductCardContainer>
  );
};
export default ProductCard;
