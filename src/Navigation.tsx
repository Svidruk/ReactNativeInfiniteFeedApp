import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {RootState} from './redux/store';
import AuthPage from './pages/Auth/AuthPage';
import HomePage from './pages/Home/HomePage';

const Stack = createStackNavigator();

const Navigation = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <Stack.Screen name="Home" component={HomePage} />
        ) : (
          <Stack.Screen name="Auth" component={AuthPage} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
