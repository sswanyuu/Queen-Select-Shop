import { useState, useEffect, Fragment } from "react";
import { CategoriesContext } from "../../../contexts/categories.context";
import { CategoryContainer, Title } from "./category.styles";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import ProductCard from "../../product-card/product-card.component";
import Spinner from "../../spinner/spinner.component";

const GET_CATEGORY = gql`
  query ($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;
const Category = () => {
  //destuctring
  const { category } = useParams();
  const { loading, error, data } = useQuery(GET_CATEGORY, {
    variables: { title: category },
  });
  useEffect(() => {
    if (data) {
      const {
        getCollectionsByTitle: { items },
      } = data;
      setProducts(items);
    }
  }, [category, data]);
  // const { categoriesMap, loading } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   setProducts(categoriesMap[category]);
  // }, [category, categoriesMap]);

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
