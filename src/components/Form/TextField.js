import React from 'react';
import styled from 'styled-components'

const StyledField = styled.div`
    margin: 0 auto;
    padding: 10px 15px;
`;

const StyledLabel = styled.label`
    display: block;
    padding: 7px 0px;
`;

const StyledInput = styled.input`
    padding: 8px 8px;
    width: 100%;
    border-radius: 4px;
    outline: none;
    border-style: solid;
    border: 1px solid black;
`;

const TextField = ({
    htmlFor,
    labelName,
    type,
    value,
    name,
    placeholder,
    onChange,
    autoFocus
}) => (
        <StyledField>
            <StyledLabel htmlFor={ htmlFor }>{ labelName }: </StyledLabel>
            <StyledInput
                autoFocus={ autoFocus }
                type={ type }
                value={ value }
                name={ name }
                placeholder={ placeholder }
                onChange={ onChange }
            />
        </StyledField>
    );

export default TextField;
