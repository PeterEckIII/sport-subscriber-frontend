import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    border: red;
`;

const Checkbox = ({ checked, onChange }) => (
    <Input
        type="checkbox"
        checked={ checked }
        onChange={ onChange }
    />
)

export default Checkbox;
