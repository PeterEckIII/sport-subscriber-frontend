import React, { useState, useReducer } from 'react';
import { Auth } from 'aws-amplify';
import { useSubscriptionGenerator, useFormFields } from '../../../libs/hooksLib';
import { onError } from '../../../libs/errorLib';
import { subscriptionReducer } from '../../../libs/reducerLib';

import ConfirmationForm from './ConfirmationForm';
import InformationForm from './InformationForm';

const SignupForm = () => {
    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ subscriptionOptions ] = useSubscriptionGenerator();
    const [ subscriptions, dispatch ] = useReducer(subscriptionReducer, subscriptionOptions);
    const [ fields, setFields ] = useFormFields({
        email: "",
        password: "",
        confirmPassword: "",
        confirmationCode: "",
    });

    const validateConfirmationForm = () => {
        return fields.confirmationCode.length > 0;
    }

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
                console.log(`ID: ${res.userSub}`)
                setLoading(false);
                setUser(res);
            })
            .catch(e => {
                if (e === "UsernameExistsException") {
                    Auth.resendSignUp(fields.email)
                }
                onError(e)
                setLoading(false);
            })
    }

    return (
        <>
            { user ? (
                <ConfirmationForm
                    fields={ fields }
                    setFields={ setFields }
                    loading={ loading }
                    setLoading={ setLoading }
                    validateConfirmationForm={ validateConfirmationForm }
                    subscriptions={ subscriptions }
                    userId={user.userSub}
                />
            ) : (
                    <InformationForm
                        fields={ fields }
                        setFields={ setFields }
                        loading={ loading }
                        handleSubmit={ handleSubmit }
                        validateForm={ validateForm }
                        validateConfirmationForm={ validateConfirmationForm }
                        subscriptions={ subscriptions }
                        dispatch={ dispatch }
                    />
                ) }
        </>
    )
}

export default SignupForm
