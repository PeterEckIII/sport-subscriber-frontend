import React, { useReducer } from 'react'

import Subscription from './Subscription';
import { subscriptionReducer } from '../../libs/reducerLib';

const SubscriptionList = ({ subscriptions }) => {
    const [ _, dispatch ] = useReducer(subscriptionReducer, subscriptions)

    const handleSubscriptionToggle = e => {
        dispatch({
            type: 'TOGGLE_SUBSCRIPTION',
            code: e.target.value
        });
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
                        handleSubscriptionToggle={ handleSubscriptionToggle }
                    />
                )
            }) }
        </div>
    )
}

export default SubscriptionList;
