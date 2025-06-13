import { Footer, Name, Price, ProductCardContainer } from './product-card.styles'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart } from '../../store/cart/cart.action'
import { showNotification } from '../../store/notification/notification.action'
import { FC } from 'react'
import { CategoryItem } from '../../store/categories/category.types'

type ProductCardProps = {
  product: CategoryItem
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch()

  const { name, price, imageUrl } = product
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product))
    dispatch(showNotification(`${name} added to cart`, 'success'))
  }

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name}></img>
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add To Cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
