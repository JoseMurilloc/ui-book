import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';


export default function Routes () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Login" component={Login} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Register" component={Register} 
        options={{
          headerShown: false,
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

