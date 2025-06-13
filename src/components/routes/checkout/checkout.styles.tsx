import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../../utils/breakpoints'
import { CHECKOUT_LAYOUT, CHECKOUT_COLUMN_WIDTHS } from '../../../utils/layout-constants'

export const CheckoutContainer = styled.div`
  width: 85%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  ${MEDIA_QUERIES.mobile} {
    width: 95%;
    margin: 30px auto 0;
  }
`

export const CheckoutHeader = styled.div`
  width: ${CHECKOUT_LAYOUT.container.width};
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid darkgrey;
  gap: ${CHECKOUT_LAYOUT.container.gap};

  ${MEDIA_QUERIES.mobile} {
    display: none;
  }
`

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  text-align: center;
  font-size: 18px;
  font-weight: bold;

  /* Automatically apply widths based on order */
  &:nth-child(1) {
    width: ${CHECKOUT_COLUMN_WIDTHS[0]};
  } /* Product */
  &:nth-child(2) {
    width: ${CHECKOUT_COLUMN_WIDTHS[1]};
  } /* Description */
  &:nth-child(3) {
    width: ${CHECKOUT_COLUMN_WIDTHS[2]};
  } /* Price */
  &:nth-child(4) {
    width: ${CHECKOUT_COLUMN_WIDTHS[3]};
  } /* Quantity */
  &:nth-child(5) {
    width: ${CHECKOUT_COLUMN_WIDTHS[4]};
  } /* Remove */

  &:first-child {
    padding: 4px;
  }

  ${MEDIA_QUERIES.mobile} {
    font-size: 14px;
  }
`

export const Total = styled.span`
  margin: 30px auto;
  font-size: 36px;

  ${MEDIA_QUERIES.mobile} {
    font-size: 24px;
    margin: 20px auto;
  }
`
