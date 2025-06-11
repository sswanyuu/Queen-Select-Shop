import styled from 'styled-components'

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
`
