import { useNavigate } from 'react-router-dom'
import { DirectoryItemContainer, BackgroundImage, Body } from './directory-item.styles'
import { DirectoryCategory } from '../directory/directory.component'
import { FC } from 'react'
type DirectoryItemProps = {
  category: DirectoryCategory
}
const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category
  const navigate = useNavigate()
  const navigateHandler = () => {
    navigate(route)
  }
  return (
    <DirectoryItemContainer onClick={navigateHandler}>
      {/* style take an object */}
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  )
}
export default DirectoryItem
