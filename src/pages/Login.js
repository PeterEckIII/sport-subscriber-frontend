import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import { useFormFields } from '../libs/hooksLib';
import { useAppContext } from '../libs/contextLib';
import { onError } from '../libs/errorLib'

import LoginForm from '../components/Form/Login/LoginForm';

const Login = () => {
    const history = useHistory();
    const [ loading, setLoading ] = useState(false);
    const { setAuthenticated } = useAppContext();
    const [ fields, setFields ] = useFormFields({
        email: '',
        password: ''
    });

    const validateForm = () => {
        return fields.email.length > 0 && fields.password.length > 0;
    }

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
    return (
        <LoginForm
            loading={ loading }
            validateForm={ validateForm }
            handleSubmit={ handleSubmit }
            email={ fields.email }
            password={ fields.password }
            setFields={ setFields }
        />
    )
};

export default Login;
