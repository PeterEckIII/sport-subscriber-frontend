export const subscriptionReducer = (subscriptions, action) => {
    switch (action.type) {
        case 'TOGGLE_SUBSCRIPTION':
            return subscriptions.map(subscription => {
                if (subscription.code === action.code) {
                    return {
                        ...subscription,
                        isSubscribed: !subscription.isSubscribed
                    }
                } else {
                    return subscription;
                }
            });
        case 'ADD_SUBSCRIPTION':
            // This needs to be changed to only accept a subscription if
            // there is not already one with the given code
            return subscriptions.map(subscription => {
                if (subscription.code === action.code) {
                    return {
                        ...subscription,
                        cadence: action.cadence
                    }
                } else {
                    return subscription;
                }
            });
        case 'LOAD_SUBSCRIPTIONS':
            return action.subscriptions
        default:
            return new Error('No action given');
    }
}
