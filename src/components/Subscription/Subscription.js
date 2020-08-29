import React from 'react'
import styled from 'styled-components'

import SubscriptionToggle from './SubscriptionToggle';
import CadenceDropdown from '../CadenceDropdown';

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
    handleCadenceChange,
    htmlFor,
    labelName,
    name,
    value,

}) => {
    return (
        <SubscriptionContainer>
            <Card>
                <SubscriptionToggle
                    htmlFor={ htmlFor }
                    labelName={ labelName }
                    name={ name }
                    value={ value }
                    isSubscribed={ isSubscribed }
                    handleSubscriptionToggle={ handleSubscriptionToggle }
                />
                <CadenceDropdown
                    code={ code }
                    cadence={ cadence }
                    handleCadenceChange={ handleCadenceChange }
                />
            </Card>

        </SubscriptionContainer>
    )
}

export default Subscription;
