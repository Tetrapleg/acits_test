import styled from 'styled-components';
import { Container } from '../layoutComponent/Container';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  fontWeight: "bold",
  color: "#f8c555",
  textDecoration: "underline"
};

const NavWrapper = styled.nav`
  height: 100px;
  width: 100%;
  color: #fff;
  border-bottom: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;

  & a {
    color: #ccc;
    font-size: 24px;
    text-decoration: none;
  }

  & a+a {
    margin-left: 15px;
  }
`;

export const Header = () => (
  <NavWrapper >
    <Container >
      <NavLink 
        to="/today"
        activeStyle={activeStyle}
      >Сегодня</NavLink>
      <NavLink 
        to="/animals"
        activeStyle={activeStyle}
      >Животные</NavLink>
    </Container>
  </NavWrapper>
);