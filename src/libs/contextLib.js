import { useContext, createContext } from 'react';

export const AppContext = createContext(null);

export const useAppContext = () => useContext(AppContext);

export const SubscriptionContext = createContext([]);

export const useSubscriptionContext = () => useContext(SubscriptionContext);
