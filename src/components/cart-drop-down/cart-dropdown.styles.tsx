import styled from 'styled-components'
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: medium;
`

export const BackgroundCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
`

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  ${BaseButton},${GoogleSignInButton},${InvertedButton} {
    margin-top: auto;
    font-size: small;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const Hr = styled.hr`
  margin: 10px 0;
`

export const Total = styled.span`
  margin-bottom: 10px;
`
