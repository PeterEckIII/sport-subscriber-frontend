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
