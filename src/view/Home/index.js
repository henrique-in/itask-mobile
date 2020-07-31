import React from 'react';
import { View } from 'react-native';
import * as S from './styles';

import Header from '../../components/Header';

const Home = () => {
  return (
    <S.Container >
      <Header showNotification={true}/>
    </S.Container>

  );
}

export default Home;