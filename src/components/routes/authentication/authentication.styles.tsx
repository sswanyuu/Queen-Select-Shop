import styled from 'styled-components'
export const AuthenticationContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 90%;
`

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: underline;
  margin: 20px 0;
  padding: 10px;

  &:hover {
    color: #333;
  }
`
