import React, { useState, useReducer, useContext } from 'react';
import { Auth } from 'aws-amplify';
import { useSubscriptionGenerator, useFormFields } from '../../../libs/hooksLib';
import { onError } from '../../../libs/errorLib';
import { subscriptionReducer } from '../../../libs/reducerLib';
import { UserContext } from '../../../libs/contextLib';
import { useAuth } from '../../../libs/authLib';

import ConfirmationForm from './ConfirmationForm';
import InformationForm from './InformationForm';

const SignupForm = () => {
    const [ loading, setLoading ] = useState(false);
    const [ subscriptionOptions ] = useSubscriptionGenerator();
    const [ subscriptions, dispatch ] = useReducer(subscriptionReducer, subscriptionOptions);
    const [ fields, setFields ] = useFormFields({
        email: "",
        password: "",
        confirmPassword: "",
        confirmationCode: "",
    });
    const [contextUser, changeContextUser] = useContext(UserContext);

    const { user, signup } = useAuth();

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          let signedUpUser = await signup(fields.email, fields.password);
          changeContextUser(signedUpUser);
          setLoading(false);
          return signedUpUser;
        } catch (e) {
          setLoading(false);
          console.log(`Error signing up: ${e}`);
        }
    };

    return (
        <>
            { contextUser ? (
                <ConfirmationForm
                    fields={ fields }
                    setFields={ setFields }
                    loading={ loading }
                    setLoading={ setLoading }
                    validateConfirmationForm={ validateConfirmationForm }
                    subscriptions={ subscriptions }
                    userId={contextUser}
                    changeUser={changeContextUser}
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
