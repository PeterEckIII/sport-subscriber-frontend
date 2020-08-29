import React from 'react'
import styled from 'styled-components';

const Label = styled.label`
    display: block;
`;

const CadenceDropdown = ({ cadence, handleCadenceChange, code }) => {
    return (
        <>
            <Label htmlFor={ code }>Email Preferences</Label>
            <select value={ cadence } onChange={ handleCadenceChange } name={ code }>
                <option value="all">All</option>
                <option value="weekly">Weekly</option>
                <option value="gameday">Gameday</option>
            </select>
        </>
    )
}

export default CadenceDropdown;
