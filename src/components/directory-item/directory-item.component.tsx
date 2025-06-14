import { useNavigate } from 'react-router-dom'
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
  LoadingIndicator,
} from './directory-item.styles'
import { DirectoryCategory } from '../directory/directory.component'
import { FC, useState, useEffect } from 'react'

type DirectoryItemProps = {
  category: DirectoryCategory
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category
  const navigate = useNavigate()
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    // Preload the background image
    const img = new Image()
    img.onload = () => setImageLoaded(true)
    img.src = imageUrl
  }, [imageUrl])

  const navigateHandler = () => {
    navigate(route)
  }

  return (
    <DirectoryItemContainer onClick={navigateHandler}>
      {!imageLoaded ? (
        <LoadingIndicator>Loading...</LoadingIndicator>
      ) : (
        <>
          <BackgroundImage imageUrl={imageUrl} />
          <Body>
            <h2>{title}</h2>
            <p>Shop now</p>
          </Body>
        </>
      )}
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
