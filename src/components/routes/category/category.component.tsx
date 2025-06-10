import { useState, useEffect, Fragment } from 'react'
import { CategoryContainer, Title } from './category.styles'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../../store/categories/category.selector'
import ProductCard from '../../product-card/product-card.component'
import Spinner from '../../spinner/spinner.component'
const Category = () => {
  type CategoryRouteParams = {
    category: string
  }
  //destuctring
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams
  console.log('render/re-rendering category component')
  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category])
  const isLoading = useSelector(selectCategoriesIsLoading)
  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => <ProductCard key={product.id} product={product} />)}
        </CategoryContainer>
      )}
    </Fragment>
  )
}
export default Category
