import styled, { css } from 'styled-components/native';

interface IButtonText {
  type: string;
}

interface IButton {
  type: string;
}


export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Form = styled.View`
  /* border: 1px solid #0C0B5B; */
  height: 300px;
  margin-top: 108px;

  justify-content: center;
  align-items: center;
`;

export const TitleForm = styled.Text`
  color: #0C0B5B;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;

  font-family: 'Roboto_700Bold';
`;

export const Label = styled.Text`
  color: #0C0B5B;
  font-size: 16px;
  line-height: 19px;

  font-family: 'Roboto_400Regular';
`;

export const Input = styled.TextInput`
  width: 243px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #DCDBF2;
  border-radius: 2px;

  padding-left: 15px;
  padding-right: 15px;

  font-family: 'Roboto_400Regular';
`;

export const ForgotPasswordText = styled.Text`
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  margin-top: 5px;
  color: #0C0B5B;

  font-family: 'Roboto_400Regular'
`;

export const Button = styled.TouchableOpacity<IButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  

  ${props => props.type === 'login' ? css`
    background: #231FE4;
    margin-top: 50px;
  ` : css`
    background: transparent;
    margin-top: 20px;
  `}

  border: 2px solid #231FE4;
  border-radius: 31px;

  width: 193px;
  height: 44px;
`;


export const ButtonText = styled.Text<IButtonText>`

  ${props => props.type === 'login' ? css`
    color: #FFFFFF;
  ` : css`
    color: #161494;
  `}

  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  font-family: 'Roboto_400Regular';
`;
