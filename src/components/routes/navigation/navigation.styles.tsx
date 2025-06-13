import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MEDIA_QUERIES } from '../../../utils/breakpoints'

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  ${MEDIA_QUERIES.mobile} {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`
export const LogoContainer = styled(Link)`
  display: flex;
  height: 100%;
  width: 80px;
  align-items: center;
  justify-content: center;
  ${MEDIA_QUERIES.mobile} {
    width: 50px;
    paddig: 0px;
  }
`
export const NavLinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${MEDIA_QUERIES.mobile} {
    width: 80%;
  }
`
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`
