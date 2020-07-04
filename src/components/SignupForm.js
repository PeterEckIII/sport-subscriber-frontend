import React from 'react';
import styled from 'styled-components';

import TextField from '../components/TextField';
import FormButton from '../components/FormButton';
import Loader from '../components/Loader';

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

const HelpBlock = styled.div`
    font-size: 0.75rem;
    font-weight: 600;
    padding: 5px 10px;
    margin: 10px auto;
    color: #999;
`;

const SignupForm = ({
    loading,
    validateConfirmationForm,
    handleConfirmationSubmit,
    confirmationCode,
    validateForm,
    handleSubmit,
    email,
    password,
    confirmPassword,
    setFields,
    newUser
}) => {
    let confirmationUi = loading ? (
        <Loader size={ 20 } margin={ 5 } color={ '#20BF6B' } />
    ) : (
            <>
                <FormButton
                    loading={ loading }
                    validate={ validateConfirmationForm }
                    onClick={ handleConfirmationSubmit }
                >
                    Confirm
                </FormButton>
            </>
        )

    const confirmationForm = () => (
        <Container>
            <StyledForm onSubmit={ handleConfirmationSubmit }>
                <TextField
                    htmlFor="confirmationCode"
                    labelName="Confirmation Code"
                    type="text"
                    name="confirmationCode"
                    placeholder="Confirmation code"
                    onChange={ setFields }
                    value={ confirmationCode }
                    autoFocus
                />
                <HelpBlock>Check your email for the confirmation code</HelpBlock>
                { confirmationUi }
            </StyledForm>
        </Container>
    )

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

    const signupForm = () => (
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

    return (
        <>
            { newUser === null ? signupForm() : confirmationForm() }
        </>
    )
}

export default SignupForm
