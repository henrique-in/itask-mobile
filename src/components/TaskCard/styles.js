import styled from 'styled-components/native';


export const ContentLeft = styled.View`
 flex-direction: row;
 align-items: center;
`;

export const ContentRight = styled.View`
  align-items: flex-end;
  justify-content: space-between;

`;

export const BtnCard = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: 400px;
  height: 80px;
  border-radius: 10px;
  background: #fff;  
  margin: 10px 0;

  
`;

export const Title = styled.Text`
  font-size: 16px;
  color:#000;
  margin-left: 10px;
  font-weight: bold;
`;

export const Date = styled.Text`
  color: #FF7811;
  font-weight: bold;
`;
export const Time = styled.Text`
  color: #707070;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
`;


