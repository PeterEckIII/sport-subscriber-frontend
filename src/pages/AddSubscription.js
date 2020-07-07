import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { onError } from '../libs/errorLib';
import { Auth, API } from 'aws-amplify';

import { useSubscriptionGenerator } from '../libs/hooksLib';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    margin: 5% 20%;
`;

const ContainerElement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const AddSubscription = () => {
    const [ subscriptionOptions ] = useSubscriptionGenerator();
    const [ code, setCode ] = useState('');
    const [ cadence, setCadence ] = useState('');
    const [ checked, setChecked ] = useState(false);

    const handleCodeChange = e => {
        setCode(e.target.value);
    }

    const handleCadenceChange = e => {
        setCadence(e.target.value);
    }

    const handleCheckChange = e => {
        setChecked(e.target.checked);
    }

    return (
        <>
            {
                subscriptionOptions.map(sub => {
                    return (
                        <>
                            <Container>
                                <ContainerElement><h3>{ sub.name }</h3></ContainerElement>
                                <ContainerElement><p>{ sub.code }</p></ContainerElement>
                                <ContainerElement><p>{ sub.cadence }</p></ContainerElement>
                                <input type="checkbox" checked={ checked } onChange={ handleCheckChange } />
                            </Container>
                        </>
                    )
                })
            }
        </>
    )

}

export default AddSubscription;
