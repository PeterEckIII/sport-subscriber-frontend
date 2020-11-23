import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import FormButton from '../FormButton';
import Loader from '../../Loader';

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
    const [ loading, setLoading ] = useState(false);
    const history = useHistory();

    let buttonUi = loading ? (
        <Loader size={ 20 } margin={ 5 } color={ '#20BF6B' } />
    ) : (
            <>
                <FormButton loading={ loading }>
                    Save Changes
                </FormButton>
            </>
        )

    return (
        <PageContainer>
            <SectionContainer>
            { buttonUi }
            </SectionContainer>
        </PageContainer>
    )
}

export default ProfileForm;
