import React, { useState, useContext } from 'react';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import { useFormFields } from '../libs/hooksLib';
import { useAppContext, UserContext } from '../libs/contextLib';
import { onError } from '../libs/errorLib'
import { useAuth } from '../libs/authLib';

import LoginForm from '../components/Form/Login/LoginForm';

const Login = () => {
    const history = useHistory();
    const [ loading, setLoading ] = useState(false);
    const { setAuthenticated } = useAppContext();
    const [ fields, setFields ] = useFormFields({
        email: '',
        password: ''
    });
    const [user, changeUser] = useContext(UserContext);
    const { signin } = useAuth();

    const validateForm = () => {
        return fields.email.length > 0 && fields.password.length > 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          let signInRes = signin(fields.email, fields.password);
            if (signInRes) {
                setAuthenticated(true);
                changeUser(signInRes.username);
                setLoading(false);
                history.push("/")
            }
        } catch (e) {
            onError(e)
        }
    }
    return (
        <LoginForm
            loading={loading}
            validateForm={validateForm}
            handleSubmit={handleSubmit}
            email={fields.email}
            password={fields.password}
            setFields={setFields}
        />
    )
};

export default Login;
