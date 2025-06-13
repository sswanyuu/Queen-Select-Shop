import styled from 'styled-components'
import Button from '../button/button.component'
import { MEDIA_QUERIES } from '../../utils/breakpoints'

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 40px;
  padding: 10px 10px;
`
export const FormContainer = styled.form`
  margin: 10px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  height: 200px;
  min-width: 700px;
  ${MEDIA_QUERIES.mobile} {
    min-width: 300px;
  }
`
export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 3rem;
`
export const CardTitle = styled.h2`
  padding-bottom: 10px;
`
