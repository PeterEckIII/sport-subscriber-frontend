import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
    padding: 80px 0;
    text-align: center;
`;

const Heading = styled.h1`
    font-family: sans-serif;
    font-weight: 600;
`;

const TagLine = styled.p`
    color: #999;
`;

const Home = () => (
    <div>
        <HeroContainer>
            <Heading>Titan Sport Subscriber</Heading>
            <TagLine>Follow your favorite D3 Teams</TagLine>
        </HeroContainer>
    </div>
);

export default Home;
