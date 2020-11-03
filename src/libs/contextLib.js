import { useContext, createContext } from 'react';

// App Context
export const AppContext = createContext(null);

export const useAppContext = () => useContext(AppContext);

// Subscription Context
export const SubscriptionContext = createContext([]);

export const useSubscriptionContext = () => useContext(SubscriptionContext);

// User Context
export const UserContext = createContext(null);

export const useUserContext = () => useContext(UserContext)
