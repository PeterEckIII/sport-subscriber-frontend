import React from 'react'
import styled from 'styled-components'
import PulseLoader from 'react-spinners/PulseLoader';

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
`;

const Loader = ({ size, margin, color }) => (
    <LoaderContainer>
        <PulseLoader size={ size } margin={ margin } color={ color } />
    </LoaderContainer>
);

export default Loader;
