import React from 'react';
import styled from 'styled-components';

import TextField from '../../TextField';
import FormButton from '../FormButton';
import Loader from '../../Loader';

const Container = styled.div`
    @media all and (min-width: 480px) {
        padding: 60px 0;
    }
`;

const StyledForm = styled.form`
    @media all and (min-width: 480px) {
        margin: 0 auto;
        max-width: 320px
    }
`;

const SignupForm = ({
    loading,
    handleSubmit,
    validateForm,
    validateConfirmationForm,
    email,
    password,
    confirmPassword,
    setFields,
}) => {

    let signupUi = loading ? (
        <Loader size={ 20 } margin={ 5 } color={ '#20BF6B' } />
    ) : (
            <>
                <FormButton
                    loading={ loading }
                    validate={ validateForm }
                    onClick={ handleSubmit }
                    disabled={ !validateConfirmationForm }
                >
                    Sign Up
                </FormButton>
            </>
        )

    return (
        <Container>
            <StyledForm onSubmit={ handleSubmit }>
                <TextField
                    htmlFor='email'
                    labelName="Email"
                    type="text"
                    value={ email }
                    name="email"
                    placeholder="Santa.Claus@northpole.com"
                    onChange={ setFields }
                    autoFocus
                />
                <TextField
                    htmlFor='password'
                    labelName="Password"
                    type="password"
                    value={ password }
                    name="password"
                    placeholder="MrsClaus1234"
                    onChange={ setFields }
                />
                <TextField
                    htmlFor='confirmPassword'
                    labelName="Confirm Password"
                    type="password"
                    value={ confirmPassword }
                    name="confirmPassword"
                    placeholder="MrsClaus1234"
                    onChange={ setFields }
                />
            </StyledForm>
            { signupUi }
        </Container>
    )
}

export default SignupForm
