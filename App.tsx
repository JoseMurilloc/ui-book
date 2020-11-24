import 'react-native-gesture-handler';

import React from 'react';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import Routes from './src/routes/app';
import AppLoading from './src/screens/AppLoading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Routes />
  );
}