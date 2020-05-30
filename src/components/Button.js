import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    display: block;
    padding: 8px 8px;
    margin-top: 10px;
    margin-right: 15px;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    width: 97%;
    background-color: #fff;
    color: #20BF6B;
    border: 2px solid #20BF6B;
    font-weight: 600;
    font-size: 1rem;

    &:hover {
        letter-spacing: 1px;
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.4s ease 0s;
        background-color: #20BF6B;
        color: #fff;
        font-weight: 700;
    }
`;

const ButtonContainer = styled.div`
    margin: 0 auto;
    padding: 10px 15px;
    width: 100%;
`;

const Button = ({ children, email, password }) => {
    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    return (
        <ButtonContainer>
            <StyledButton disable={ !validateForm() }>
                { children }
            </StyledButton>
        </ButtonContainer>
    )
};

export default Button;
