import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Auth } from 'aws-amplify';

import Navbar from './components/Navigation/Navbar';
import Routes from '../src/Routes';
import { AppContext } from './libs/contextLib';
import { onError } from './libs/errorLib';

import Amplify from 'aws-amplify';
import config from './config';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  API: {
    endpoints: [
      {
        name: "users",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      }
    ]
  }
});

const AppContainer = styled.div`
  margin-top: 15px;
`;

const App = () => {
  const [ authenticated, setAuthenticated ] = useState(false);
  const [ authenticating, setAuthenticating ] = useState(true);

  useEffect(() => {
    checkForSession();
  }, [])

  const checkForSession = () => {
    Auth
      .currentSession()
      .then(res => {
        console.log(`Current user ${ res }`);
        setAuthenticated(true);
        return res;
      })
      .catch(e => {
        if (e === 'No current user') {
          console.log(e);
        } else {
          onError(e);
        }
      })
      .finally(_ => {
        setAuthenticating(false);
      })
  };

  return (
    !authenticating && (
      <AppContainer>
        <Navbar authenticated={ authenticated } setAuthenticated={ setAuthenticated } />
        <AppContext.Provider value={ { authenticated, setAuthenticated } }>
          <Routes />
        </AppContext.Provider>
      </AppContainer>
    )
  );
}

export default App;
