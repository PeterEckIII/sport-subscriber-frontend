import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    position: relative;
    border: red;
    padding: 8px 8px;
    outline: none;
`;

const StyledLabel = styled.label`
    display: block;
    padding: 7px 0px;
`;

const StyledField = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 10px 15px;
`;

const Checkbox = ({
    htmlFor,
    labelName,
    checked,
    onChange,
    value
}) => (
        <StyledField>
            <div>
                <Input
                    type="checkbox"
                    value={ value }
                    checked={ checked }
                    onChange={ onChange }
                />
            </div>
            &nbsp;
            <div>
                <StyledLabel htmlFor={ htmlFor }>{ labelName }</StyledLabel>
            </div>
        </StyledField>
    )

export default Checkbox;
