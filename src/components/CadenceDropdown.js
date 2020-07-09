import React from 'react'

const CadenceDropdown = ({ cadence, handleCadenceChange, code }) => {
    return (
        <>
            <label htmlFor={ code }>Email Preferences</label>
            <select value={ cadence } onChange={ handleCadenceChange } name={ code }>
                <option value="all">All</option>
                <option value="weekly">Weekly</option>
                <option value="gameday">Gameday</option>
            </select>
        </>
    )
}

export default CadenceDropdown;
