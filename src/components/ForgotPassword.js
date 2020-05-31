import React from 'react'
import styled from 'styled-components'
import { Auth } from 'aws-amplify';

const PasswordButton = styled.button`
    font-size: 0.5rem;
    margin: 5px 0px;
    padding: 4px 8px;
`;

const ForgotPassword = () => {

    const handleForgotPassword = () => {
        Auth
            .forgotPasswordSubmit()
            .then(res => {
                console.log(res);
            })
            .catch(e => {
                console.log(e);
            })
    }

    return (
        <div>
            <PasswordButton onClick={ handleForgotPassword }>Forgot Password?</PasswordButton>
        </div>
    );
}

export default ForgotPassword;
