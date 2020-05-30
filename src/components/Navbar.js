import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Auth } from "aws-amplify";

import NavItem from './NavItem';
import NavLink from './NavLink';
import NavGroup from './NavGroup';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid #68d391;
  height: 4rem;
`;

const Navbar = ({ authenticated, setAuthenticated }) => {
    let history = useHistory();

    const handleLogout = () => {
        setAuthenticated(false);
    }

    let authNavItem;
    // eslint-disable-next-line no-lone-blocks
    {
        authenticated ? authNavItem = (
            <>
                <NavItem>
                    <NavLink onClick={ handleLogout } to="/">Logout</NavLink>
                </NavItem>
            </>
        ) : authNavItem = (
            <>
                <NavItem>
                    <NavLink to="/signup">Sign Up</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/login">Login</NavLink>
                </NavItem>
            </>
        )
    }
    return (
        <div>
            <Nav>
                <NavGroup left>
                    <NavItem>
                        <NavLink to="/">Home</NavLink>
                    </NavItem>
                </NavGroup>
                <NavGroup right>
                    { authNavItem }
                </NavGroup>
            </Nav>
        </div>
    );
};

export default Navbar;
