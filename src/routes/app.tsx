import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListBook from '../screens/App/ListBook';
import Favorites from '../screens/App/Favorites';
import Reading from '../screens/App/Reading';
import Profile from '../screens/App/Profile';

import House from '../../assets/icons/House.png';
import Heat from '../../assets/icons/Heat.png';
import Book from '../../assets/icons/Book.png';
import ProfileAvatar from '../../assets/icons/Profile.png';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#0C0B5B',
            height: 65,
          }
        }}
      >
        <Tab.Screen 
          name="ListBook"
          component={ListBook}
          options={{
            title: 'Inicio',
            tabBarIcon: () => <Image source={House} />,
            tabBarBadgeStyle: {
              color: '#FFF',
              fontWeight: 'bold',
              fontSize: 13,
              fontFamily: 'Roboto_700Bold'
            },
          }}
        />
        <Tab.Screen 
          name="Favorites"
          component={Favorites}
          options={{
            title: 'Favoritos',
            tabBarIcon: () => <Image source={Heat} />,
            tabBarBadgeStyle: {
              color: '#FFF',
              fontWeight: 'bold',
              fontSize: 13,
              fontFamily: 'Roboto_700Bold'
            }
          }}
        />
        <Tab.Screen 
          name="Reading"
          component={Reading}
          options={{
            title: 'Lendo',
            tabBarIcon: () => <Image source={Book} />,
            tabBarBadgeStyle: {
              color: '#FFF',
              fontWeight: 'bold',
              fontSize: 13,
              fontFamily: 'Roboto_700Bold'
            }
          }}
        />
        <Tab.Screen 
          name="Profile"
          component={Profile}
          options={{
            title: 'Perfil',
            tabBarIcon: () => <Image source={ProfileAvatar} />,
            tabBarBadgeStyle: {
              color: '#FFF',
              fontWeight: 'bold',
              fontSize: 13,
              fontFamily: 'Roboto_700Bold'
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}