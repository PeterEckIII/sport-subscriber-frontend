import React, { useState } from 'react';
import styled from 'styled-components';
import { Auth, API } from 'aws-amplify';
import { useHistory } from 'react-router-dom';

import { useAppContext } from '../../../libs/contextLib';
import { onError } from '../../../libs/errorLib';

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

const HelpBlock = styled.div`
    font-size: 0.75rem;
    font-weight: 600;
    padding: 5px 10px;
    margin: 10px auto;
    color: #999;
`;

const ConfirmationForm = ({ fields, setFields, validateConfirmationForm }) => {
    const [ loading, setLoading ] = useState(false);
    const { setAuthenticated } = useAppContext();
    const history = useHistory();


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
            history.push("/")
        } catch (error) {
            onError(e)
            setLoading(false);
        }
    }

    let buttonUi = loading ? (
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

    return (
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
                { buttonUi }
            </StyledForm>
        </Container>
    )
}

export default ConfirmationForm;
