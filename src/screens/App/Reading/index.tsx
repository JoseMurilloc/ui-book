import React from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

const Reading: React.FC = () => {
  return (
    <Container>
      <Text style={{ fontSize: 35, fontFamily: 'Roboto_700Bold' }}>Reading</Text>
    </Container>
  );
};

export default Reading;
