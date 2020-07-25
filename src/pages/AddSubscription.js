import React from 'react';
import styled from 'styled-components';

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
    const [ subscriptionOptions ] = useSubscriptionGenerator()

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
                                {/* <input type="checkbox" checked={ checked } onChange={ handleCheckChange } /> */ }
                            </Container>
                        </>
                    )
                })
            }
        </>
    )

}

export default AddSubscription;
