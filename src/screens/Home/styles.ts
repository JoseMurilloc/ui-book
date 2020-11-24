import styled, { css } from 'styled-components/native';

interface IButtonText {
  type: string;
}

interface IButton {
  type: string;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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

  font-family: 'Roboto_700Bold';
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
`;
