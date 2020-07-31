import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 70px;
  background:#000;
  border-top-width: 5px;
  border-top-color: #FF7811;
  align-items: center;
  position: absolute;
  bottom: 0;
  
 
`;

export const Button = styled.TouchableOpacity`
  position: relative;
  top: -40px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Text = styled.Text`
  position: relative;
  top: -40px;
  color: #FFF;
  font-size: 13px;
`;