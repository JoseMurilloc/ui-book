import React from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Text style={{ fontSize: 35, fontFamily: 'Roboto_700Bold' }}>Profile</Text>
    </Container>
  );
};

export default Profile;
