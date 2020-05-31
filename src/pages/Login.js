import React, { useState } from 'react';
import styled from 'styled-components'
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';

import TextField from '../components/TextField';
import FormButton from '../components/FormButton'
import ForgotPassword from '../components/ForgotPassword';
import Loader from '../components/Loader';
import { useAppContext } from '../libs/contextLib';
import { onError } from '../libs/errorLib';

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
    const [ loading, setLoading ] = useState(false);
    const { setAuthenticated } = useAppContext();

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        Auth
            .signIn(email, password)
            .then(res => {
                console.log(`Cognito User ${ JSON.stringify(res) }`)
                setAuthenticated(true);
                history.push('/')
            })
            .catch(e => {
                onError(e);
            })
            .finally(_ => {
                setLoading(false);
            })
    }

    let ui = loading ? (
        <Loader size={ 20 } margin={ 5 } color={ '#20BF6B' } />
    ) : (
            <>
                <FormButton email={ email } password={ password } loading={ loading } setLoading={ setLoading } onClick={ handleSubmit }>
                    Login
                </FormButton>
            </>
        )

    return (
        <LoginContainer>
            <LoginForm>
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
                { ui }
                <ForgotPassword />
            </LoginForm>
        </LoginContainer>
    );
};

export default Login;
