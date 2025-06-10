import styled from 'styled-components'
export const CheckoutContainer = styled.div`
  width: 85%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`
export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`
export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  text-align: center;
  font-size: 18px;

  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`
export const Total = styled.span`
  margin: 30px auto;
  font-size: 36px;
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`
