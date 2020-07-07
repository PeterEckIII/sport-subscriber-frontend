import { useState } from 'react';

export const useFormFields = initialState => {
    const [ fields, setValues ] = useState(initialState);
    return [
        fields,
        (e) => {
            setValues({
                ...fields,
                [ e.target.name ]: e.target.value
            });
        }
    ];
}

export const useSubscriptionGenerator = () => {
    let subscriptionOptions = [
        {
            name: "Women's Basketball",
            code: "WBB",
            isSubscribed: false,
            cadence: "weekly"
        },
        {
            name: "Men's Football",
            code: "MFB",
            isSubscribed: false,
            cadence: "weekly"
        }
    ];

    return [ subscriptionOptions ];
}


export const useSubscriptionBuilder = (code, cadence) => {
    return {
        code,
        cadence
    }
}
