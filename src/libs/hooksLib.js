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
            cadence: ""
        },
        {
            name: "Men's Football",
            code: "MFB",
            isSubscribed: false,
            cadence: ""
        }
    ];

    return [ subscriptionOptions ];
}


