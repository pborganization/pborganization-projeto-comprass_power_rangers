import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${({disabled}) => disabled ? '#565656' : '#FF0024'};
  border-radius: 25px;
  height: 48px;
  margin: 64px 16px 0 16px;
  align-items: center;
  justify-content: center;
`;
