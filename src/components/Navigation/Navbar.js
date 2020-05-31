import React from 'react';
import styled from 'styled-components';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';

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
    const history = useHistory();

    const handleLogout = () => {
        Auth
            .signOut()
            .then(res => {
                console.log(`Signed out user ${ JSON.stringify(res) }`);
            })
            .catch(e => {
                console.log(`Error signing out: ${ e }`)
            })
            .finally(_ => {
                history.push('/')
                setAuthenticated(false);
            })
    }

    let authNavItem;
    // eslint-disable-next-line no-lone-blocks
    {
        authenticated ? authNavItem = (
            <>
                <NavItem>
                    <button onClick={ handleLogout }>Logout</button>
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
