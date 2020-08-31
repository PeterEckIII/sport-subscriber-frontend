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
        case 'TOGGLE_CADENCE':
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
