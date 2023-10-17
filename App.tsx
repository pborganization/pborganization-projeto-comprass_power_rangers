import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeNavigator } from './src/routes/homeRoutes';
import { MainNavigator } from './src/routes/MainStack';

function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default App;
