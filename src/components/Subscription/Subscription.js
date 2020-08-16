import React from 'react'
import styled from 'styled-components'

import Toggle from './Toggle';

const SubscriptionContainer = styled.div`
    display: flex;
    height: auto;
    width: 400px;
`;

const Card = styled.div`
    margin: 2%;
    padding: 8%;
    height: 175px;
    width: 400px;
    border: 1px solid black;
`;

const Subscription = ({
    isSubscribed,
    handleSubscriptionToggle,
    cadence,
    code,
}) => {
    return (
        <SubscriptionContainer>
            <Card>
                <Toggle
                    isSubscribed={ isSubscribed }
                    handleSubscriptionToggle={ handleSubscriptionToggle }
                />
                <p>{ cadence }</p>
                <p>{ code }</p>
            </Card>

        </SubscriptionContainer>
    )
}

export default Subscription;
