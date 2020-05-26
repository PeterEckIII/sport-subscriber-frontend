import React from 'react';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Routes from '../src/Routes';

const AppContainer = styled.div`
  margin-top: 15px;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Routes />
    </AppContainer>
  );
}

export default App;
