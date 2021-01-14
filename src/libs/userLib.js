import React, { useState, useEffect, useContext, createContext } from 'react';
import { API, Auth } from 'aws-amplify';
import { onError } from './errorLib';

const userContext = createContext(null);

export const ProvideUser = ({ children }) => {
  const user = useProvideUser();
  return (
    <userContext.Provider value={user}>
      { children }
    </userContext.Provider>
  );
};

export const useUser = () => {
  return useContext(userContext);
}

const useProvideUser = () => {
  const [ user, setUser ] = useState(null);

  const getUser = async (payload) => {
    try {
      let fetchedUser = await API.get('users', '/users', payload)
      setUser(fetchedUser);
      return fetchedUser;
    } catch (e) {
      console.log(`Couldn't find user with Error: ${e}`);
      onError(e);
    }
  };

  const postUser = async (payload) => {
    try {
      let postedUser = await API.post('users', '/users', payload);
      setUser(postedUser);
    } catch (e) {
      console.log(`Error adding new user with Error: ${e}`);
      onError(e);
    }
  };

  const removeUser = async (payload) => {
    try {
      let removedUser = await API.del('users', '/users', payload);
      setUser(null);
      return removedUser;
    } catch (e) {
      console.log(`Error removing user with Error: ${e}`);
      onError(e);
    }
  };

  useEffect(() => {
    Auth
      .currentAuthenticatedUser()
      .then(user => {
        console.log(`User information from Cognito: ${user}`)
      })
      .catch(e => {
        console.log(`Error: ${e}`);
        onError(e);
      });
  }, []);

  return {
    user,
    getUser,
    postUser,
    removeUser
  };
};
