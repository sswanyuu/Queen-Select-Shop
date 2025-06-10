import styled from 'styled-components'
export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 450px;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 5px;
  }

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
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.8;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    height: 300px;
    img {
      height: 85%;
    }
    button {
      display:block;
      font-size: 8px;
      top: 125px;
    }
    &:hover {
      img {
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
  @media screen and (max-width: 800px) {
    width: 100%;
    font-size: 14px;
  }
`

export const Footer = styled.div`
  width: 85%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 15%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: end;
  }
`
