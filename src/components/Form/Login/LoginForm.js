import React from 'react';
import styled from 'styled-components'

import TextField from '../../TextField';
import FormButton from '../FormButton'
import Loader from '../../Loader';

const LoginContainer = styled.div`
    @media all and (min-width: 480px) {
        padding: 60px 0;
    }
`;

const LoginFormContainer = styled.form`
    @media all and (min-width: 480px) {
        margin: 0 auto;
        max-width: 320px
    }
`;

const LoginForm = ({ loading, validateForm, handleSubmit, email, password, setFields }) => {

    let ui = loading ? (
        <Loader size={ 20 } margin={ 5 } color={ '#20BF6B' } />
    ) : (
            <>
                <FormButton
                    loading={ loading }
                    validate={ validateForm }
                    onClick={ handleSubmit }
                >
                    Login
            </FormButton>
            </>
        )

    return (
        <LoginContainer>
            <LoginFormContainer>
                <TextField
                    htmlFor='email'
                    labelName="Email"
                    type="text"
                    value={email}
                    name="email"
                    placeholder="Santa.Claus@northpole.com"
                    onChange={setFields}
                    autoFocus
                />
                <TextField
                    htmlFor="password"
                    labelName="Password"
                    type="password"
                    value={password}
                    name="password"
                    placeholder="MrsClaus1234"
                    onChange={setFields}
                />
                {ui}
            </LoginFormContainer>
        </LoginContainer>
    );
}

export default LoginForm;
