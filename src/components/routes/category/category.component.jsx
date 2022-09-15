import { useState, useEffect, Fragment } from "react";
import { CategoryContainer, Title } from "./category.styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../../store/categories/category.selector";
import ProductCard from "../../product-card/product-card.component";
const Category = () => {
  //destuctring
  const { category } = useParams();
  console.log("render/re-rendering category component");
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};
export default Category;
