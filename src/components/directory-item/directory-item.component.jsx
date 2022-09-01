import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./directory-item.styles.scss";
const DirectoryItem = ({ category }) => {
  // destructuring the categories*/
  const { title, imageUrl } = category;
  return (
    <div className="directory-item-container">
      {/* style take an object */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="body">
        <Fragment>
          <Link to={`/shop/${title}`}>
            <h2>{title}</h2>
            <p>Shop now</p>
          </Link>
        </Fragment>
      </div>
    </div>
  );
};
export default DirectoryItem;
