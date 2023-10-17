import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeNavigator } from './src/routes/homeRoutes';
import { MainNavigator } from './src/routes/MainStack';
import { AuthProvider, useAuth } from './src/contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
