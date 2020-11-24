import styled from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';

export const Container = styled.View`
  align-items: flex-start;
  flex: 1;
`;

export const Header = styled.View`

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
  height: 50px;
  margin-top: 40px;

  padding-left: 20px;
  padding-right: 20px;
`;

export const Input = styled.TextInput`
  width: 242px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #DCDBF2;

  padding-left: 10px;
  padding-right: 10px;
`;

export const ScrollBooks = styled(ScrollView)`
  padding: 15px 0px;
`;