import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../../contexts/categories.context";
import CategoryPreview from "../../category-preview/category-preview.component";
import Spinner from "../../spinner/spinner.component";

const CategoriesPreview = () => {
  const { categoriesMap, loading } = useContext(CategoriesContext);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        //  give back an array of key value of each item
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};
export default CategoriesPreview;
