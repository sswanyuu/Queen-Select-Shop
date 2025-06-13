import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../utils/breakpoints'
import { CHECKOUT_LAYOUT } from '../../utils/layout-constants'

export const CheckoutItemContainer = styled.div`
  width: ${CHECKOUT_LAYOUT.container.width};
  display: flex;
  border-bottom: 1px solid darkgrey;
  padding: 8px 0;
  font-size: 16px;
  align-items: center;
  justify-content: space-between;
  gap: ${CHECKOUT_LAYOUT.container.gap};

  ${MEDIA_QUERIES.mobile} {
    font-size: 12px;
    padding: 12px 0;
    gap: ${CHECKOUT_LAYOUT.mobile.gap};
    align-items: flex-start;
  }
`

export const Image = styled.div`
  width: ${CHECKOUT_LAYOUT.columns.image};
  padding: 4px;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    max-width: 80px;
    object-fit: cover;
  }

  ${MEDIA_QUERIES.mobile} {
    width: ${CHECKOUT_LAYOUT.mobile.imageWidth};
    min-width: ${CHECKOUT_LAYOUT.mobile.imageWidth};
    padding: 0;
  }
`

export const ProductDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`

export const Description = styled.span`
  width: ${CHECKOUT_LAYOUT.columns.description};
  text-align: center;

  ${MEDIA_QUERIES.mobile} {
    width: 100%;
    text-align: left;
    font-weight: bold;
    font-size: 14px;
  }
`

export const Price = styled.span`
  width: ${CHECKOUT_LAYOUT.columns.price};
  text-align: center;

  ${MEDIA_QUERIES.mobile} {
    width: 100%;
    text-align: left;
    color: #666;
    font-size: 12px;
  }
`

export const Quantity = styled.span`
  width: ${CHECKOUT_LAYOUT.columns.quantity};
  display: flex;
  justify-content: center;
  align-items: center;

  ${MEDIA_QUERIES.mobile} {
    width: 100%;
    justify-content: flex-start;
    margin: 4px 0;
  }
`

export const Arrow = styled.span`
  cursor: pointer;
`

export const Value = styled.span`
  margin: 0 10px;
  ${MEDIA_QUERIES.mobile} {
    margin: 0 8px;
  }
`

export const RemoveButton = styled.div`
  width: ${CHECKOUT_LAYOUT.columns.remove};
  text-align: center;
  cursor: pointer;
  color: #ff4444;

  ${MEDIA_QUERIES.mobile} {
    width: 100%;
    text-align: right;
    margin-top: 4px;
    font-size: 12px;
  }
`
