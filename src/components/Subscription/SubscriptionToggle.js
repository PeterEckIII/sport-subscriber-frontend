import React from 'react'
import styled from 'styled-components'
import { Toggle } from 'react-toggle-component'

const SubStatus = styled.p`
    color: ${props => props.isSubscribed === true ? '#68d391' : '#ccc' };
`;

const SubscriptionToggle = ({
    toggle,
    isSubscribed,
}) => {

    return (
        <div>
            <label htmlFor='isSubscribed'>
                <Toggle
                    name="isSubscribed"
                    checked={ isSubscribed }
                    onChange={ toggle }
                />
                { isSubscribed
                    ? <SubStatus isSubscribed={ isSubscribed }>Active</SubStatus>
                    : <SubStatus isSubscribed={ isSubscribed }>Inactive</SubStatus>
                }
            </label>
        </div>
    )
}

export default SubscriptionToggle;
