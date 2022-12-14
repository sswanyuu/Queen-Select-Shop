import styled from "styled-components";
import { Link } from "react-router-dom";
//make sure that all the classes has their unique className
export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;
export const LogoContainer = styled(Link)`
  display: flex;
  height: 100%;
  width: 80px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 800px) {
    width: 50px;
    paddig: 0px;
  }
`;
export const NavLinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
