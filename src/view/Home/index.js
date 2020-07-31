import React from 'react';
import { View } from 'react-native';
import * as S from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <S.Container >
      <Header showNotification={true}/>
      <Footer icon={'add'}/>
    </S.Container>

  );
}

export default Home;