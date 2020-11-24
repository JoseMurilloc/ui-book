import React from 'react';
import { View, Image } from 'react-native';

import WillSmith from '../../../assets/books/WillSmith.png';
import HeatMarker from '../../../assets/icons/HeatMarker.png';

import { Container, Title, Description } from './styles';

const CardBook: React.FC = () => {
  return (
    <Container>
      <Image source={WillSmith} />
      <View style={{ marginLeft: 5 }}>
        <Title>Titulo: A procura da felicidade</Title>
        <Description>Chris enfrenta sérios problemas financeiros e Linda, sua esposa  decide partir...</Description>
        <View style={{ alignItems: 'flex-end' }}>
          <Image source={HeatMarker} />
        </View>
      </View>
    </Container>
  );
};

export default CardBook;
