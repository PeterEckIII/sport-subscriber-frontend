import React from 'react'
import styled from 'styled-components'

import SubscriptionList from '../Subscription/SubscriptionList';
import TextField from '../../TextField';
import FormButton from '../FormButton';
import Loader from '../../Loader';

const StyledForm = styled.form`
    @media all and (min-width: 480px) {
        margin: 0 auto;
        max-width: 320px
    }
`;

const Container = styled.div`
    @media all and (min-width: 480px) {
        padding: 60px 0;
    }
`;

const InformationForm = ({
    fields,
    setFields,
    handleSubmit,
    validateConfirmationForm,
    subscriptions,
    dispatch,
    loading,
    validateForm
}) => {

    let buttonUi = loading ? (
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
                <SubscriptionList
                    subscriptions={ subscriptions }
                    dispatch={ dispatch }
                />
            </StyledForm>
            { buttonUi }
        </Container>
    )
}

export default InformationForm;
