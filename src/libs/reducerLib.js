

export const subscriptionReducer = (subscriptions, action) => {
    switch (action.type) {
        case 'TOGGLE_SUBSCRIPTION':
            return subscriptions.map(subscription => {
                if (subscription.code === action.code) {
                    console.log(`Adding ${ subscription.code } to users subscription list`)
                    return {
                        ...subscription,
                        isSubscribed: !subscription.isSubscribed
                    }
                } else {
                    return subscription;
                }
            });
        case 'ADD_SUBSCRIPTION':
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
        default:
            return new Error('No action given');
    }
}
