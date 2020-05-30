import React from 'react'
import styled from 'styled-components';

const Group = styled.div`
    display: flex;
    align-self: ${props => props.rigt ? 'flex-end' : 'flex-start' };
`;

const NavGroup = ({ children }) => (
    <Group>
        { children }
    </Group>
);

export default NavGroup;
