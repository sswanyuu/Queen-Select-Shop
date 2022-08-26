import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      {/* just want the text to be clickable */}
      <h2>
        <span className="title">{title.toLowerCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => {
            return index < 4;
          })
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
