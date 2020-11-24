import React from 'react';
import { Image, View } from 'react-native';

import { 
  Container,
  Header,
  Input,
  ScrollBooks
} from './styles';

import Search from '../../../../assets/icons/Search.png';
import CardBook from '../../../components/CardBook';

const ListBook: React.FC = () => {
  return (
    <Container>
      <Header>
        <Image source={Search} style={{ width: 16 }} />
        <Input placeholder="Digite aqui..." />
        <View />
      </Header>
      <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <ScrollBooks>
          <CardBook />
          <CardBook />
          <CardBook />
          <CardBook />
          <CardBook />
          <CardBook />
          <CardBook />
        </ScrollBooks>
      </View>
    </Container>
  );
};

export default ListBook;
