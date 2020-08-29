import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { API } from 'aws-amplify';

import TextField from '../../TextField';
import FormButton from '../FormButton';
import SubscriptionList from '../../../components/Subscription/SubscriptionList';
import Loader from '../../Loader';
import { subscriptionReducer } from '../../../libs/reducerLib';
import { useSubscriptionGenerator } from '../../../libs/hooksLib';
import { onError } from '../../../libs/errorLib';

const PageContainer = styled.div`
    @media all and (min-width: 480px) {
        padding: 60px 0;
    }
`;

const SectionContainer = styled.form`
    @media all and (min-width: 480px) {
        margin: 0% 8%;
        max-width: 320px;
        margin-bottom: 45px;
    }
`;

const ProfileForm = () => {
    const [ user, setUser ] = useState(null);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ subscriptionOptions ] = useSubscriptionGenerator();
    const [ subscriptions, dispatch ] = useReducer(subscriptionReducer, subscriptionOptions);
    let { id } = useParams();

    const loadUserSettings = id => {
        const payload = {
            queryStringParameters: {
                id: id
            }
        };
        API
            .get('users', `/users/${ id }`, payload)
            .then(res => {
                let user = res.user.Item;
                setUser(user);
                setEmail(user.email);
                setPassword(user.password);
                dispatch({
                    type: 'LOAD_SUBSCRIPTIONS',
                    subscriptions: user.subscriptions
                });
            })
            .catch(e => {
                onError(e)
            })
    }

    useEffect(() => {
        loadUserSettings(id);
    }, [ id ])

    let buttonUi = loading ? (
        <Loader size={ 20 } margin={ 5 } color={ '#20BF6B' } />
    ) : (
            <>
                <FormButton
                    loading={ loading }
                    onClick={ (e) => setLoading() }
                >
                    Save Changes
                </FormButton>
            </>
        )

    return (
        <PageContainer>
            <SectionContainer>
                <h3>Profile Settings</h3>
                <TextField
                    htmlFor="email"
                    labelName="Email"
                    type="text"
                    value={ email }
                    name="email"
                    onChange={ e => setEmail(e.target.value) }
                    autofocus
                />
                <TextField
                    htmlFor="password"
                    labelName="Password"
                    type="password"
                    value={ password }
                    name="password"
                    onChange={ e => setPassword(e.target.value) }
                />
                { buttonUi }
            </SectionContainer>
            <SectionContainer>
                <h3>Subscriptions</h3>
                <SubscriptionList
                    subscriptions={ subscriptions }
                    dispatch={ dispatch }
                />
            </SectionContainer>
        </PageContainer>
    )
}

export default ProfileForm;
