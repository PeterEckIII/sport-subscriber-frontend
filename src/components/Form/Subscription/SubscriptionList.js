import React from 'react';

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
            cadence: e.target.value,
            code: e.target.name
        })
    }

    return (
        <div>
            { subscriptions.map(sub => {
                return (
                    <Subscription
                        key={ sub.code }
                        htmlFor={ sub.code }
                        labelName={ sub.name }
                        name={ sub.code }
                        value={ sub.code }
                        cadence={ sub.cadence }
                        handleSubscriptionToggle={ handleSubscriptionToggle }
                        handleCadenceChange={ handleCadenceChange }
                    />
                )
            }) }
        </div>
    )
}

export default SubscriptionList;
