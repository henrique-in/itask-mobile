import React,{useState} from 'react';
import { View } from 'react-native';
import * as S from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = ({actived}) => {
  const [filter, setFilter] = useState('today');


  return (
    <S.Container >
      <Header showNotification={true}/>
      <S.Filter>
          <S.FilterBtn onPress={()=> setFilter('all')}>
              <S.FilterTextActive actived={filter === 'all'}>Todos</S.FilterTextActive>
          </S.FilterBtn>
          <S.FilterBtn onPress={()=> setFilter('today')}>
              <S.FilterTextActive actived={filter === 'today'}>Hoje</S.FilterTextActive>
          </S.FilterBtn >
          <S.FilterBtn onPress={()=> setFilter('month')}>
              <S.FilterTextActive actived={filter === 'month'}>Mês</S.FilterTextActive>
          </S.FilterBtn>
          <S.FilterBtn onPress={()=> setFilter('week')}>
              <S.FilterTextActive actived={filter === 'week'}>Semana</S.FilterTextActive>
          </S.FilterBtn>
          <S.FilterBtn onPress={()=> setFilter('year')}>
              <S.FilterTextActive actived={filter === 'year'}>Ano</S.FilterTextActive>
          </S.FilterBtn>

        </S.Filter> 
      <Footer icon={'add'}/>  
    </S.Container>

  );
}

export default Home;