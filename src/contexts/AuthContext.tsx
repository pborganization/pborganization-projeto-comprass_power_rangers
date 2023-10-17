import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  user: string | null;
  signIn: (accessToken: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  ('');
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    // Check if the user is authenticated on app startup
    AsyncStorage.getItem('accessToken').then((accessToken) => {
      if (accessToken) {
        setUser(accessToken);
      }
    });
  }, []);

  const signIn = async (accessToken: string) => {
    try {
      await AsyncStorage.setItem('accessToken', accessToken);
      setUser(accessToken);
    } catch (e) {
      console.error('Error saving access token to AsyncStorage', e);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('accessToken');
      setUser(null);
    } catch (e) {
      console.error('Error removing access token from AsyncStorage', e);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
