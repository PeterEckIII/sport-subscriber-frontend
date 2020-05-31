import React from 'react'
import styled from 'styled-components'
// import { Auth } from 'aws-amplify';

const PasswordButton = styled.button`
    font-size: 0.5rem;
    margin-left: 10px;
    padding: 4px 8px;
    border: none;
    outline: none;
    background-color: #fff;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

const ForgotPassword = () => {

    const handleForgotPassword = () => {
        console.log(`Forgot Password function called`)
    }

    return (
        <div>
            <PasswordButton onClick={ handleForgotPassword }>Forgot Password?</PasswordButton>
        </div>
    );
}

export default ForgotPassword;
