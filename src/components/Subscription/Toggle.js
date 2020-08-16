import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
`;

const Button = styled.span`
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 30px;
    height: 32px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10,10,10,0.29);
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 70px;
    height: 37px;
    background: grey;
    border-radius: 100px;
    position: relative;
    transition: background-color 0.2s;

    & ${Button } {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 30px;
        border-radius: 30px;
        transition: 0.2s;
        background: #fff;
        box-shadow: 0 0 2px rgba(10,10,10,0.25);
    }

    &:active ${Button } {
        width: 40px;
    }
`;

const Checkbox = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;

    &:checked + ${Label } + ${ Button } {
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }
`;

const Toggle = ({
    handleSubscriptionToggle,
    isSubscribed,
}) => (
        <Container>
            <Checkbox
                type="checkbox"
                name="toggle"
                checked={ isSubscribed }
                onChange={ handleSubscriptionToggle }
            />
            <Label
                htmlFor="toggle" id="toggle"
            >
                <Button></Button>
            </Label>
        </Container>
    )

export default Toggle;
