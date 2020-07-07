import React, { useState } from 'react';
import { useFormFields } from '../libs/hooksLib';

import SignupForm from '../components/Form/Signup/SignupForm';
import ConfirmationForm from '../components/Form/Signup/ConfirmationForm';

const Signup = () => {
    const [ newUser, setNewUser ] = useState(null);
    const [ fields, setFields ] = useFormFields({
        email: "",
        password: "",
        confirmPassword: "",
        confirmationCode: "",
    });

    const validateConfirmationForm = () => {
        return fields.confirmationCode.length > 0;
    }

    return (
        <>
            {
                newUser === null ? (
                    <SignupForm
                        user={ newUser }
                        setUser={ setNewUser }
                        fields={ fields }
                        setFields={ setFields }
                        validateConfirmationForm={ validateConfirmationForm }
                    />
                ) :
                    (
                        <ConfirmationForm
                            fields={ fields }
                            setFields={ setFields }
                            validateConfirmationForm={ validateConfirmationForm }
                        />
                    )
            }
        </>
    )
}

export default Signup;
