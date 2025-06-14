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
    flex-direction: row;
    height: 100px;
    align-items: center;
    padding: 10px;
    gap: 15px;
    border: 1px solid;
    border-radius: 10px;
    button {
      display: flex;
      position: relative;
      top: unset;
      width: auto;
      min-width: 80px;
      height: 35px;
      font-size: 10px;
      padding: 8px 12px;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      align-self: end;
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

type ProductImageProps = {
  $loaded: boolean
}
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${MEDIA_QUERIES.mobile} {
    width: 100px;
    height: 100px;
  }
`
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

  ${MEDIA_QUERIES.mobile} {
    width: 100%;
    font-size: 14px;
    margin-bottom: 3px;
    text-align: left;
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
    text-align: left;
  }
`

export const Footer = styled.div`
  width: 85%;
  height: 5%;
  display: flex;
  justify-content: space-between;

  ${MEDIA_QUERIES.mobile} {
    width: auto;
    height: auto;
    height: 15%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: end;
    align-self: start;
    flex: 1;
  }
`
