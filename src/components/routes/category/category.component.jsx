import { useContext, useState, useEffect, Fragment } from "react";
import { CategoriesContext } from "../../../contexts/categories.context";
import { CategoryContainer, Title } from "./category.styles";
import { useParams } from "react-router-dom";
import ProductCard from "../../product-card/product-card.component";
import Spinner from "../../spinner/spinner.component";
const Category = () => {
  //destuctring
  const { category } = useParams();
  const { categoriesMap, loading } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Title>{category.toUpperCase()}</Title>
          <CategoryContainer>
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </CategoryContainer>{" "}
        </Fragment>
      )}
    </Fragment>
  );
};
export default Category;
