import styled from 'styled-components'
export const CheckoutContainer = styled.div`
  width: 85%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 800px) {
    width: 95%;
    margin: 30px auto 0;
  }
`
export const CheckoutHeader = styled.div`
  width: 90%;
  padding: 10px 0;
  display: flex;
  gap: 12px;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  @media screen and (max-width: 800px) {
    gap: 4px;
  }
`
export const HeaderBlock = styled.div`
  text-align: center;
  font-size: 16px;
  &:first-child {
    width: 12%;
  }
  &:nth-child(2) {
    width: 48%;
  }
  &:nth-child(3) {
    width: 14%;
  }
  &:nth-child(4) {
    width: 14%;
  }
  &:last-child {
    width: 12%;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`
export const Total = styled.span`
  align-items: center;
  margin: 40px auto;
  font-size: 24px;
  @media screen and (max-width: 800px) {
    margin: 12px auto;
    font-size: 20px;
  }
`
