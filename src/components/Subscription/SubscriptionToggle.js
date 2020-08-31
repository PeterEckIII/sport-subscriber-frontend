import React from 'react'
import styled from 'styled-components'
import { Toggle } from 'react-toggle-component'

const SubStatus = styled.p`
    display: 'inline-block';
    color: ${props => props.isSubscribed === true ? '#5DF255' : '#ccc' };
    font-weight: 700;
    vertical-align: top;
`;

const Container = styled.div`
    display: flex;
`;

const SubscriptionToggle = ({
    isSubscribed,
    htmlFor,
    name,
    value,
    handleSubscriptionToggle
}) => {

    return (
        <div>
            <label htmlFor={ htmlFor }>
                <Container>
                    <Toggle
                        name={ name }
                        checked={ !isSubscribed }
                        onToggle={ handleSubscriptionToggle }
                        value={ value }
                        rightKnobColor='#68d391'
                        borderColor='gray'
                    />
                    <SubStatus
                        isSubscribed={ isSubscribed }
                    >
                        { isSubscribed ? 'Active' : 'Inactive' }
                    </SubStatus>
                </Container>
            </label>
        </div>
    )
}

export default SubscriptionToggle;
