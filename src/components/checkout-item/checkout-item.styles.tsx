import styled from 'styled-components'
export const CheckoutItemContainer = styled.div`
  width: 90%;
  display: flex;
  border-bottom: 1px solid darkgrey;
  padding: 8px 0;
  font-size: 16px;
  align-items: center;
  justify-self: center;
  gap: 12px;
  @media screen and (max-width: 800px) {
    font-size: 12px;
    padding: 4px 0;
    gap: 4px;
  }
`

export const Image = styled.div`
  aspect-ratio: 1/1;
  width: 12%;
  padding: 4px;
  img {
    width: 100%;
    height: 100%;
  }
`

export const Description = styled.span`
  width: 48%;
  justify-content: baseline;
  text-align: center;
`

export const Price = styled.span`
  width: 14%;
  justify-content: baseline;
  text-align: center;
`

export const Quantity = styled.span`
  width: 14%;
  justify-content: center;
  display: flex;
`
export const Arrow = styled.span`
  cursor: pointer;
`
export const Value = styled.span`
  margin: 0 10px;
  @media screen and (max-width: 800px) {
    margin: 0 2px;
  }
`
export const RemoveButton = styled.div`
  width: 12%;
  text-align: center;
  cursor: pointer;
`
