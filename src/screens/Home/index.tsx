import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image } from 'react-native';

import { Container, Button, ButtonText } from './styles';

import top from '../../../assets/top.png';
import back from '../../../assets/back.png';
import bookLove from '../../../assets/book-love.png';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  
  const navigation = useNavigation();

  return (

    <Container>
      <StatusBar style="auto" />
      <Image source={top} style={{ position: 'absolute', top: 0, left: 0 }} />
      <Image source={bookLove} />

      <Button 
        type="login"
        onPress={() => navigation.navigate('Login')}
      >
        <ButtonText type="login">Entrar</ButtonText>
      </Button>

      <Button 
        type="register"
        onPress={() => navigation.navigate('Register')}
      >
        <ButtonText type="register">Cadastro</ButtonText>
      </Button>

      <Image source={back} style={{ position: 'absolute', bottom: 0, right: 0 }} />
    </Container>
  );
}