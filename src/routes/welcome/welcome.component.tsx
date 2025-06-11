import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import { Navigate } from 'react-router-dom'

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 20px;
`

const WelcomeTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`

const WelcomeMessage = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  line-height: 1.6;
`

const Welcome = () => {
  const currentUser = useSelector(selectCurrentUser)

  if (!currentUser) {
    return <Navigate to="/auth" replace />
  }

  return (
    <WelcomeContainer>
      <WelcomeTitle>Welcome, {currentUser.displayName}!</WelcomeTitle>
      <WelcomeMessage>
        Thank you for joining Queen Select Shop. We're excited to have you here! Feel free to
        explore our collections and find your perfect style.
      </WelcomeMessage>
    </WelcomeContainer>
  )
}

export default Welcome
