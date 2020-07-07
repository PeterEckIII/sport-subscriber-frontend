import React, { useState } from 'react';
import styled from 'styled-components';
import { Auth, API } from 'aws-amplify';
import { useHistory } from 'react-router-dom';

import SubscriptionList from '../Subscription/SubscriptionList';
import TextField from '../../TextField';
import FormButton from '../FormButton';
import Loader from '../../Loader';
import { useFormFields } from '../../../libs/hooksLib';
import { useAppContext } from '../../../libs/contextLib';
import { onError } from '../../../libs/errorLib';

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

const SignupForm = ({ user, setUser, fields, setFields, validateConfirmationForm }) => {
    const [ loading, setLoading ] = useState(false);
    const [ checkedItems, setCheckedItems ] = useState({});
    const [ subscriptions, setSubscriptions ] = useState([]);
    const history = useHistory();
    const { setAuthenticated } = useAppContext()

    const validateForm = () => {
        return (
            fields.email.length > 0 &&
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword
        );
    }

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);

        Auth
            .signUp({
                username: fields.email,
                password: fields.password,
            })
            .then(res => {

                setLoading(false);
                setUser(res)
            })
            .catch(e => {
                if (e === "UsernameExistsException") {
                    Auth.resendSignUp(fields.email)
                }
                onError(e)
                setLoading(false);
            })
    }

    const handleSubscriptionsChange = newSubscription => {
        setSubscriptions([
            ...subscriptions,
            newSubscription
        ]);
    }

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
                    handleSubscriptionsChange={ handleSubscriptionsChange }
                />
            </StyledForm>
            { buttonUi }
        </Container>
    )
}

export default SignupForm
