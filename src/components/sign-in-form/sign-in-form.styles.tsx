import styled from 'styled-components'
import { MEDIA_QUERIES } from '../../utils/breakpoints'

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;

  .h2 {
    margin: 10px 0;
  }
  ${MEDIA_QUERIES.mobile} {
    width: 100%;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
`
