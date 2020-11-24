import React from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

const Favorites: React.FC = () => {
  return (
    <Container>
      <Text style={{ fontSize: 35, fontFamily: 'Roboto_700Bold' }}>Favorites</Text>
    </Container>
  );
};

export default Favorites;
