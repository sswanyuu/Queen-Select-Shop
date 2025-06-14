import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../utils/breakpoints'

type BackgroundImageProps = {
  imageUrl: string
}

export const Body = styled.div`
  height: 90px;
  width: auto;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  opacity: 0.8;
  position: absolute;
  text-align: center;
  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }

  ${MEDIA_QUERIES.mobile} {
    padding: 5px;
    height: 70px;
    width: auto;
    h2 {
      font-weight: bold;
      font-size: 16px;
      margin: 0;
    }
    p {
      font-weight: lighter;
      font-size: 12px;
    }
  }
`

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`

export const LoadingIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #999;
  z-index: 1;
  font-size: 16px;

  ${MEDIA_QUERIES.mobile} {
    font-size: 14px;
  }
`
export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 300px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  margin: 1rem 1rem;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
    /* &:first-child {
      margin-right: 7.5px;
    }

    &:last-child {
      margin-left: 7.5px;
    } */
  }

  ${MEDIA_QUERIES.mobile} {
    height: 200px;
    margin: 0.5rem 0.5rem;
  }
`
