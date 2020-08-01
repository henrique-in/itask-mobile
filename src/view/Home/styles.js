import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  
`;

export const Filter = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  height: 70px;
  align-items: center;
 
`;

export const FilterBtn = styled.TouchableOpacity``;

export const FilterTextActive = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${props => props.actived ?'#FF7811' : '#090909  '};
  opacity: ${props => props.actived ? 1 : 0.5};
`;

export const FilterTextInative = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #090909;
  opacity: 0.5;
`;