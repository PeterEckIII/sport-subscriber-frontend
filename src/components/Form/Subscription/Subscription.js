import React, { useState } from 'react'

import Checkbox from '../../Checkbox'

const Subscription = ({
    htmlFor,
    labelName,
    name,
    value,
    subscriptions,
    handleSubscriptionsChange
}) => {
    const [ checked, setChecked ] = useState(false);
    const [ cadence, setCadence ] = useState('');
    const [ code, setCode ] = useState('');
    const [ newSubscription, setNewSubscription ] = useState({
        code: '',
        cadence: ''
    });

    const handleCheckChange = e => {
        setChecked(!checked);
        checked && handleCodeChange(e);
    }

    const handleCadenceChange = e => {
        setCadence(e.target.value);
    }

    const handleCodeChange = e => {
        setCode(e.target.value)
    };

    return (
        <>
            <Checkbox
                htmlFor={ htmlFor }
                labelName={ labelName }
                name={ name }
                value={ value }
                type="checkbox"
                checked={ checked }
                onChange={ handleCheckChange }
            />
            { checked && (
                <>
                    <label htmlFor="cadence">Email Preferences</label>
                    <select value={ cadence } onChange={ handleCadenceChange } name="cadence">
                        <option value="all">All</option>
                        <option value="weekly">Weekly</option>
                        <option value="gameday">Gameday</option>
                    </select>
                </>
            ) }
        </>
    )
}

export default Subscription;
