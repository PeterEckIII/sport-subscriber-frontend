import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 3px solid #68d391;
  height: 4rem;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    &:hover {
        color: white;
    }
    &:visited {
        color: black;
    }
    &:active {
        color: black;
    }
`;

const NavChoice = styled.div`
    padding: 5px 10px;
    margin: 5px 5px;
    border-radius: 5px;

    &:hover {
        color: white;
        background-color: #606061;
    }
`;

const Navbar = () => (
    <div>
        <Nav>
            <NavChoice>
                <StyledLink to="/">Home</StyledLink>
            </NavChoice>
            <NavChoice>
                <StyledLink to="/about">About</StyledLink>
            </NavChoice>
            <NavChoice>
                <StyledLink to="/signup">Sign Up</StyledLink>
            </NavChoice>
            <NavChoice>
                <StyledLink to="/login">Login</StyledLink>
            </NavChoice>
        </Nav>
    </div>
);

export default Navbar;
