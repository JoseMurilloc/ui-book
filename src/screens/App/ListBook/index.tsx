import React, { useState } from 'react';
import { Image, View, Text } from 'react-native';

import { 
  Container,
  Header,
  Input,
  ScrollBooks,
  BookNotFoundText,
  DescriptionNotFoundText
} from './styles';

import Books from '../../../../assets/Books.png';

import Search from '../../../../assets/icons/Search.png';
import CardBook from '../../../components/CardBook';

const ListBook: React.FC = () => {
  const [book, setBook] = useState(true);

  return (
    <Container>
      <Header>
        <Image source={Search} style={{ width: 16 }} />
        <Input placeholder="Digite aqui..." />
        <View />
      </Header>
      <View style={{ 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 650
      }}>
        {book ? (
          <ScrollBooks>
            <CardBook /> 
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
            <CardBook />
          </ScrollBooks>
        ) : (
          <>
            <Image source={Books} />
            <BookNotFoundText>Livro não encontrado</BookNotFoundText>
            <DescriptionNotFoundText>Sua busca não obteve resultado, tente novamente.</DescriptionNotFoundText>
          </>
        )}
      </View>
    </Container>
  );
};

export default ListBook;
