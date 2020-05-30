import React, { useState } from 'react';
import styled from 'styled-components';

import Navbar from './components/Navigation/Navbar';
import Routes from '../src/Routes';
import { AppContext } from './libs/contextLib';

const AppContainer = styled.div`
  margin-top: 15px;
`;

const App = () => {
  const [ authenticated, setAuthenticated ] = useState(false);
  // const [ authenticating, setAuthenticating ] = useState(true);
  return (
    // !authenticating && (
    <AppContainer>
      <Navbar authenticated={ authenticated } setAuthenticated={ setAuthenticated } />
      <AppContext.Provider value={ { authenticated, setAuthenticated } }>
        <Routes />
      </AppContext.Provider>
    </AppContainer>
  );
}

export default App;
