import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from "./directory-item.styles";
const DirectoryItem = ({ category }) => {
  // destructuring the categories*/
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(route);
  };
  return (
    <DirectoryItemContainer onClick={navigateHandler}>
      {/* style take an object */}
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
