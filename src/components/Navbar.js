import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { Auth } from "aws-amplify";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid #68d391;
  height: 4rem;
`;

const NavGroupLeft = styled.div`
    display: flex;
    align-self: flex-start;
`;

const NavGroupRight = styled.div`
    display: flex;
    align-self: flex-end;
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
    color: #20BF6B;
    background-color: white;

    &:hover {
        color: white;
        background-color: #20BF6B;
    }
`;

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
    let history = useHistory();

    async function signOut() {
        try {
            const signOut = await Auth.signOut();
            console.log(signOut);
            setIsAuthenticated(false);
            history.push('/');
        } catch (error) {
            console.log(`Error signing out with ${ error }`)
        }
    }

    let userItem;
    // eslint-disable-next-line no-lone-blocks
    {
        isAuthenticated ? userItem = (
            <NavGroupRight>
                <NavChoice>
                    <StyledLink onClick={ signOut } to="/">Logout</StyledLink>
                </NavChoice>
            </NavGroupRight>
        ) : userItem = (
            <NavGroupRight>
                <NavChoice>
                    <StyledLink to="/signup">Sign Up</StyledLink>
                </NavChoice>
                <NavChoice>
                    <StyledLink to="/login">Login</StyledLink>
                </NavChoice>
            </NavGroupRight>
        )
    }
    return (
        <div>
            <Nav>
                <NavGroupLeft>
                    <NavChoice>
                        <StyledLink to="/">Home</StyledLink>
                    </NavChoice>
                </NavGroupLeft>
                { userItem }
            </Nav>
        </div>
    );
};

export default Navbar;
