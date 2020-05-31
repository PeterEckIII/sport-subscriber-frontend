import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding-top: 100px;
    text-align: center;
`;

const NotFound = () => (
    <Container>
        <h3>404 - Page not found</h3>
    </Container>
);

export default NotFound;
