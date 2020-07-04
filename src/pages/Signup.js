import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppContext } from '../libs/contextLib';
import { onError } from '../libs/errorLib';
import { useFormFields } from '../libs/hooksLib';
import { Auth, API } from 'aws-amplify';

import SignupForm from '../components/SignupForm';

const Signup = () => {
    const [ newUser, setNewUser ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ fields, setFields ] = useFormFields({
        email: "",
        password: "",
        confirmPassword: "",
        confirmationCode: "",
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
                password: fields.password,
            })
            .then(res => {

                setLoading(false);
                setNewUser(res)
            })
            .catch(e => {
                if (e === "UsernameExistsException") {
                    Auth.resendSignUp(fields.email)
                }
                onError(e)
                setLoading(false);
            })
    }

    const handleConfirmationSubmit = e => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            body: {
                email: fields.email,
                password: fields.password
            },
            headers: {}
        };

        try {
            Auth.confirmSignUp(fields.email, fields.confirmationCode)
            API.post('users', '/users/', payload)
            Auth.signIn(fields.email, fields.password);
            setAuthenticated(true);
            setLoading(false);
            history.push("/");
        } catch (error) {
            onError(e)
            setLoading(false);
        }
    }

    return (
        <>
            <SignupForm
                newUser={ newUser }
                loading={ loading }
                validateConfirmationForm={ validateConfirmationForm }
                handleConfirmationSubmit={ handleConfirmationSubmit }
                validateForm={ validateForm }
                handleSubmit={ handleSubmit }
                email={ fields.email }
                password={ fields.password }
                confirmPassword={ fields.confirmPassword }
                confirmationCode={ fields.confirmationCode }
                setFields={ setFields }
            />
        </>
    )
}

export default Signup;
