import React from 'react'

import Subscription from './Subscription';

const SubscriptionList = ({ subscriptions, dispatch }) => {

    const handleSubscriptionToggle = e => {
        dispatch({
            type: 'TOGGLE_SUBSCRIPTION',
            code: e.target.value
        });
    }

    const handleCadenceChange = e => {
        dispatch({
            type: 'ADD_SUBSCRIPTION',
            cadence: e.target.value || 'all',
            code: e.target.name
        })
    }

    return (
        <div>
            { subscriptions.map(sub => {
                return (
                    <Subscription
                        key={ sub.code }
                        isSubscribed={ sub.isSubscribed }
                        cadence={ sub.cadence }
                        code={ sub.code }
                        htmlFor
                        labelName
                        name
                        value
                        handleSubscriptionToggle={ handleSubscriptionToggle }
                        handleCadenceChange={ handleCadenceChange }
                    />
                )
            }) }
        </div>
    )
}

export default SubscriptionList;
