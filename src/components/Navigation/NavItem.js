import React from 'react'
import styled from 'styled-components'

const NavChoice = styled.div`
    padding: 5px 10px;
    margin: 5px 5px;
    border-radius: 5px;
    color: #20BF6B;
    background-color: white;

    &:hover {
        color: white;
        background-color: #20BF6B;
    }
`;

const NavItem = ({ children }) => (
    <NavChoice>
        { children }
    </NavChoice>
);

export default NavItem;
