import styled from 'styled-components/native';

export const Container = styled.View`
  background: #DFDFDF;
  width: 299px;
  height: 114px;
  border: 1px solid #DCDBF2;

  margin-top: 15px;

  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 0px;

  flex-direction: row;
`;

export const Title = styled.Text`
  color: #0C0B5B;
  font-size: 13px;
  line-height: 15px;
  font-family: 'Roboto_700Bold';
`;

export const Description = styled.Text`
  font-family: 'Roboto_400Regular';
  font-size: 13px;
  line-height: 15px;

  color: #161540;
  width: 178px;
  height: 60px;
  margin-top: 6px;
`;
