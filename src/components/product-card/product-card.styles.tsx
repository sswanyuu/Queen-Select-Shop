import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../utils/breakpoints'

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 450px;
  align-items: center;
  position: relative;

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    min-width: 120px;
    line-height: 20px;
  }

  &:hover {
    button {
      opacity: 0.8;
      display: flex;
    }
  }

  ${MEDIA_QUERIES.mobile} {
    height: 300px;
    button {
      display: block;
      font-size: 8px;
      top: 125px;
    }
  }
`

export const LoadingText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #999;
  font-size: 14px;
`

export const ErrorText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #999;
  text-align: center;
  font-size: 14px;
`

type ProductImageProps = {
  $loaded: boolean
}

export const ProductImage = styled.img<ProductImageProps>`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
  ${MEDIA_QUERIES.mobile} {
    height: 85%;
    &:hover {
      opacity: unset;
    }
  }
`

export const Name = styled.span`
  width: 80%;
  margin-bottom: 15px;
  font-size: 18px;
  text-align: left;
  @media screen and (max-width: 800px) {
  ${MEDIA_QUERIES.mobile} {
    width: 100%;
    font-size: 14px;
    margin-bottom: 3px;
    text-align: right;
  }
`

export const Price = styled.span`
  width: 20%;
  margin-bottom: 15px;
  font-size: 16px;
  text-align: right;
  ${MEDIA_QUERIES.mobile} {
    width: 100%;
    font-size: 14px;
  }
`

export const Footer = styled.div`
  width: 85%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  ${MEDIA_QUERIES.mobile} {
    width: 100%;
    height: 15%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: end;
  }
`
