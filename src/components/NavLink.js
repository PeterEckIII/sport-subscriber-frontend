import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

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

const NavLink = ({ children, to }, ...props) => (
    <StyledLink to={ to } { ...props }>
        { children }
    </StyledLink>
);

export default NavLink;
