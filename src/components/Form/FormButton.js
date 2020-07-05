import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 8px;
    margin-top: 10px;
    margin-right: 15px;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    width: 97%;
    background-color: ${props => props.loading ? '#20BF6B' : '#fff' };
    color: ${props => props.loading ? '#fff' : '#20BF6B' };
    border: 2px solid #20BF6B;
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: ${ props => props.loading && '0.5px' };
    transition: ${props => props.loading && 'all 0.4s ease 0s' };

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

const ButtonText = styled.span`
    display: inline;
`;

const ButtonContainer = styled.div`
    margin: 0 auto;
    padding: 10px 15px;
    width: 100%;
`;

// Look at breaking this up -- too many props for one component
const FormButton = ({ children, loading, disabled = false, validate, ...props }) => {
    const isDisabled = !validate || disabled;

    return (
        <ButtonContainer>
            <StyledButton type="submit" focus disabled={ isDisabled || loading } { ...props }>
                <ButtonText>{ children } &nbsp;</ButtonText>
            </StyledButton>
        </ButtonContainer>
    )
};

export default FormButton;
