import React from 'react'

import Checkbox from '../../Checkbox'
import CadenceDropdown from '../../CadenceDropdown';

const Subscription = ({
    htmlFor,
    labelName,
    name,
    value,
    cadence,
    handleSubscriptionToggle,
    handleCadenceChange
}) => (
        <>
            <Checkbox
                htmlFor={ htmlFor }
                labelName={ labelName }
                name={ name }
                value={ value }
                type="checkbox"
                onChange={ handleSubscriptionToggle }
            />
            <CadenceDropdown
                code={ value }
                cadence={ cadence }
                handleCadenceChange={ handleCadenceChange }
            />
        </>
    )

export default Subscription;
