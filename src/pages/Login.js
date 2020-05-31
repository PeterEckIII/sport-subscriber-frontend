import React, { useState } from 'react';
import styled from 'styled-components'
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';

import TextField from '../components/TextField';
import FormButton from '../components/FormButton'
import ForgotPassword from '../components/ForgotPassword';
import Loader from '../components/Loader';
import { useFormFields } from '../libs/hooksLib';
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
    const [ loading, setLoading ] = useState(false);
    const { setAuthenticated } = useAppContext();
    const [ fields, setFields ] = useFormFields({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        Auth
            .signIn(fields.email, fields.password)
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
                <FormButton email={ fields.email } password={ fields.password } loading={ loading } setLoading={ setLoading } onClick={ handleSubmit }>
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
                    value={ fields.email }
                    name="email"
                    placeholder="Santa.Claus@northpole.com"
                    onChange={ setFields }
                    autoFocus
                />
                <TextField
                    htmlFor="password"
                    labelName="Password"
                    type="password"
                    value={ fields.password }
                    name="password"
                    placeholder="MrsClaus1234"
                    onChange={ setFields }
                />
                { ui }
                <ForgotPassword />
            </LoginForm>
        </LoginContainer>
    );
};

export default Login;
