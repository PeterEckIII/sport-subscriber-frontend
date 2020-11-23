import React, { useState, useContext, useEffect } from 'react';
import { API } from 'aws-amplify';
import styled from 'styled-components';

import { UserContext } from '../../../libs/contextLib';

const PageContainer = styled.div`
    @media all and (min-width: 480px) {
        padding: 60px 0;
    }
`;

const SectionContainer = styled.div`
    @media all and (min-width: 480px) {
        margin: 0% 8%;
        max-width: 320px;
        margin-bottom: 45px;
    }
`;

const ProfileForm = () => {
    const [user] = useContext(UserContext);
    const [fetchedUser, setFetchedUser] = useState({})

    const handleEmailChange = e => {
        setFetchedUser(prevUser => {
            return {
                ...prevUser,
                email: e.target.value
            }
        });
    };

    const handleProfileChange = e => {
        e.preventDefault();
        console.log(`Event object: ${e}`);
    };

    useEffect(() => {
        API
            .get('users', `/users/${user}`, {})
            .then(res => {
                setFetchedUser(res.user)
            })
            .catch(e => alert(`Error fetching user object: ${e}`))

    }, [user]);

    return (
        <PageContainer>
            <SectionContainer>
                <form onSubmit={handleProfileChange}>
                    <label htmlFor='email'>Email</label>
                    <input
                        type="text"
                        name='email'
                        id='email'
                        value={fetchedUser.email}
                        onChange={handleEmailChange}
                    />
                    <button type='submit'>Submit Changes</button>
                </form>
            </SectionContainer>
        </PageContainer>
    )
}

export default ProfileForm;
