import React, { useState } from 'react';
import styled from 'styled-components'
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';

import TextField from '../components/TextField';
import Button from '../components/Button'
import { useAppContext } from '../libs/contextLib';

const LoginContainer = styled.div`
    @media all and (min-width: 480px) {
        padding: 60px 0;
    }
`;

const LoginForm = styled.form`
    @media all and (min-width: 480px) {
        margin: 0 auto;
        max-width: 320px
    }
`;

const Login = () => {
    const history = useHistory();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { setAuthenticated } = useAppContext();

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Auth.signIn(email, password);
            setAuthenticated(true);
            history.push('/')
        } catch (e) {
            alert(e.message);
        }
        // setAuthenticated(true);
    }

    return (
        <LoginContainer>
            <LoginForm onSubmit={ handleSubmit }>
                <TextField
                    htmlFor='email'
                    labelName="Email"
                    type="text"
                    value={ email }
                    name="email"
                    placeholder="Santa.Claus@northpole.com"
                    onChange={ handleEmailChange }
                    autoFocus
                />
                <TextField
                    htmlFor="password"
                    labelName="Password"
                    type="password"
                    value={ password }
                    name="password"
                    placeholder="MrsClaus1234"
                    onChange={ handlePasswordChange }
                />
                <Button email={ email } password={ password }>
                    Login
                </Button>
            </LoginForm>
        </LoginContainer>
    );
};

export default Login;
