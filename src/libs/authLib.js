import React, { useState, useEffect, useContext, createContext } from 'react';
import { Auth, API } from 'aws-amplify';
import { onError } from './errorLib';

const authContext = createContext();

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      { children }
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => { 
  const [ user, setUser ] = useState(null);

  const signin = async (email, password) => {
    try {
      let cognitorUser = await Auth.signIn(email, password);
      setUser(cognitorUser);
      return cognitorUser;
    } catch (e) {
      console.log(`Error signing in ${email} with error: ${e}`);
      onError(e)
    }
  }

  const signup = async (email, password) => {
    try {
      let signedUpUser = await Auth.signUp({
        username: email,
        password
      });
      setUser(signedUpUser);
      return signedUpUser;
    } catch (e) {
      console.log(`Error creating new user with Error: ${e}`);
      onError(e);
    }
  };

  const addUserToDb = async (email, password, basePayload) => {
    const payload = {
      ...basePayload,
      body: {
        email: email,
        password: password
      }
    }

    try {
      let postedUser = await API.post('users', '/users', payload)
      console.log(postedUser);
      return postedUser;
    } catch (e) {
      console.log(`Error posting to DB with Error: ${e}`);
      onError(e);
    }
  };

  const confirmSignup = async (email, password, confirmationCode) => {
    try {
      await Auth.confirmSignUp(email, confirmationCode);
      let registeredUser = await Auth.signIn(email, password);
      setUser(registeredUser);
      return registeredUser;
    } catch (e) {
      console.log(`Error confirming the sign up for user ${email} with Error: ${e}`);
      onError(e);
    }
  }

  const checkForSession = async () => {
    try {
      let session = await Auth.currentSession();
      return session;
    } catch (e) {
      console.log(`Error checking the session with Error: ${e}`);
      onError(e);
    }
  }

  const signout = async () => {
    try {
      let signOutResult = await Auth.signOut();
      setUser(null);
      return signOutResult;
    } catch (e) {
      console.log(`Error signing out user with Error: ${e}`);
      onError(e);
    }
  }

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => setUser(user))
      .catch(() => setUser(null));
  }, []);

  return {
    user,
    signin,
    signup,
    signout,
    checkForSession,
    confirmSignup,
    addUserToDb
  }
};

