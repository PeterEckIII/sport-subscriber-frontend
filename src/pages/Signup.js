import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import TextField from '../components/TextField';
import FormButton from '../components/FormButton';
import Loader from '../components/Loader';
import { useAppContext } from '../libs/contextLib';
import { onError } from '../libs/errorLib';
import { useFormFields } from '../libs/hooksLib';
import { Auth } from 'aws-amplify';

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

const Signup = () => {
    const [ newUser, setNewUser ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ fields, setFields ] = useFormFields({
        email: "",
        password: "",
        confirmPassword: "",
        confirmationCode: ""
    });
    const history = useHistory();
    const { setAuthenticated } = useAppContext();

    const validateForm = () => {
        return (
            fields.email.length > 0 &&
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword
        );
    }

    const validateConfirmationForm = () => {
        return fields.confirmationCode.length > 0;
    }

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);

        Auth
            .signUp({
                username: fields.email,
                password: fields.password
            })
            .then(res => {
                setLoading(false);
                setNewUser(res)
            })
            .catch(e => {
                onError(e)
                setLoading(false);
            })
    }

    const handleConfirmationSubmit = e => {
        e.preventDefault();
        setLoading(true);
        try {
            Auth.confirmSignUp(fields.email, fields.confirmationCode)
            Auth.signIn(fields.email, fields.password);
            setAuthenticated(true);
            setLoading(false);
            history.push("/");
        } catch (error) {
            onError(e)
            setLoading(false);
        }
    }

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
                    value={ fields.confirmationCode }
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
                    value={ fields.email }
                    name="email"
                    placeholder="Santa.Claus@northpole.com"
                    onChange={ setFields }
                    autoFocus
                />
                <TextField
                    htmlFor='password'
                    labelName="Password"
                    type="password"
                    value={ fields.password }
                    name="password"
                    placeholder="MrsClaus1234"
                    onChange={ setFields }
                />
                <TextField
                    htmlFor='confirmPassword'
                    labelName="Confirm Password"
                    type="password"
                    value={ fields.confirmPassword }
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

export default Signup;
