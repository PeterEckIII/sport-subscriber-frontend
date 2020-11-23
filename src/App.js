import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Auth } from 'aws-amplify';

import Navbar from './components/Navigation/Navbar';
import Routes from '../src/Routes';
import { AppContext, UserContext } from './libs/contextLib';
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
        endpoint: config.apiGateway.BASE_URL,
        region: config.apiGateway.REGION
      }
    ]
  }
});

const AppContainer = styled.div`
  margin-top: 15px;
`;

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [authenticating, setAuthenticating] = useState(true);
  const [user, setUser] = useState(null);

  const checkForSession = () => {
    Auth
      .currentSession()
      .then(res => {
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

  const changeUser = user => {
    setUser(user)
  }

  useEffect(() => {
    checkForSession();
  }, [])

  return (
    !authenticating && (
      <AppContainer>
        <UserContext.Provider value={ [ user, changeUser ] }>
          <Navbar authenticated={authenticated} setAuthenticated={setAuthenticated} />
          <AppContext.Provider value={{ authenticated, setAuthenticated }}>
            <Routes />
          </AppContext.Provider>
        </UserContext.Provider>
      </AppContainer>
    )
  );
}

export default App;
