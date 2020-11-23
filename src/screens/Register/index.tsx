import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, View } from 'react-native';

import { 
  Container,
  Form,
  TitleForm,
  Label,
  Input,
  Button,
  ButtonText
} from './styles';

import top from '../../../assets/top.png';
import back from '../../../assets/back.png';

export default function Register () {
  return (
    <Container>
      <StatusBar style="auto" />
       <Image source={top} style={{ position: 'absolute', top: 0, left: 0 }} />

        <Form>
         <View>
          <TitleForm>CADASTRO</TitleForm>
            
            <Label style={{ marginTop: 30, marginBottom: 5 }}>Nome</Label>
            <Input 
              placeholder="Geissy Maysla"
              placeholderTextColor= "rgba(12, 11, 91, 0.3)"
            /> 

            <Label style={{ marginTop: 15, marginBottom: 5 }}>E-mail</Label>
            <Input 
              placeholder="Ex: geissy177@hotmail.com"
              placeholderTextColor= "rgba(12, 11, 91, 0.3)"
            /> 

            <Label style={{ marginTop: 15, marginBottom: 5 }}>Senha</Label>
            <Input 
              placeholder="**********"
              placeholderTextColor= "rgba(12, 11, 91, 0.3)"
            /> 

            <Label style={{ marginTop: 15, marginBottom: 5 }}>Confirmar Senha</Label>
            <Input 
              placeholder="**********"
              placeholderTextColor= "rgba(12, 11, 91, 0.3)"
            /> 
         </View>

          <Button type="login">
            <ButtonText type="login">
              Entrar
            </ButtonText>
          </Button>
        </Form>

       <Image source={back} style={{ position: 'absolute', bottom: 0, right: 0 }} />
    </Container>
  );
};
