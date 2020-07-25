import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import { API } from 'aws-amplify';
import { onError } from '../libs/errorLib';

import TextField from '../components/TextField';
import FormButton from '../components/Form/FormButton'
import Loader from '../components/Loader';

const PageContainer = styled.div`
    @media all and (min-width: 480px) {
        padding: 60px 0;
    }
`;

const ProfileContainer = styled.form`
    @media all and (min-width: 480px) {
        margin: 0 auto;
        max-width: 320px
    }
`;

const Profile = () => {
    const [ user, setUser ] = useState({});
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
                setUser(user)
            })
            .catch(e => {
                onError(e)
            })
    }

    useEffect(() => {
        loadUserSettings(id);
    }, [ id ])

    return (
        <PageContainer>
            <ProfileContainer>
                <h2>Profile Settings</h2>
                <TextField
                    htmlFor="email"
                    labelName="Email"
                    type="text"
                    value={ user.email }
                    name="email"
                // onChange={}
                />
                <TextField
                    htmlFor="password"
                    labelName="Password"
                    type="password"
                    value={ user.password }
                    name="password"
                // onChange={}
                />
                <FormButton>Save</FormButton>
            </ProfileContainer>
        </PageContainer>
    )
};

export default Profile;
