import { Link } from "react-router-dom";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";
import ProductCard from "../product-card/product-card.component";
import { FC } from "react";
import { CategoryItem } from "../../store/categories/category.types";
type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};
const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title>
        <Link to={`/shop/${title}`}>{title.toLowerCase()}</Link>
      </Title>

      <Preview>
        {products
          .filter((_, index) => {
            return index < 4;
          })
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
