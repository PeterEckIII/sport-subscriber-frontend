import React from 'react';
import { useSubscriptionGenerator } from '../../../libs/hooksLib';


import Subscription from './Subscription';

const SubscriptionList = ({ subscriptions, handleSubscriptionsChange }) => {
    const [ subscriptionOptions ] = useSubscriptionGenerator();

    return (
        <div>
            { subscriptionOptions.map(sub => {
                return (
                    <Subscription
                        key={ sub.code }
                        htmlFor={ sub.code }
                        labelName={ sub.name }
                        name={ sub.code }
                        value={ sub.code }
                        subscriptions={ subscriptions }
                        handleSubscriptionsChange={ handleSubscriptionsChange }
                    />
                )
            }) }
        </div>
    )
}

export default SubscriptionList;
