import React,{useState} from 'react';


import Header from "../../components/Header";
import Footer from "../../components/Footer";

import DateTimeInput from '../../components/DateTimeInput';

import * as S from './styles';
import typeIcons from '../../utils/typeIcons';

const Task = () => {
  const [done, setDone] = useState(false);
  return (
     <S.Container>
      <Header showBack={true}/>
        <S.Form>
            <S.ViewType>
              { 
                typeIcons.map(icon=>(
                  icon != null &&
                  <S.TypeButton>
                    <S.TypeIcon source={icon} />
                  </S.TypeButton>
                ))              
              }
            </S.ViewType>
            <S.Label>Título</S.Label>
              <S.Input maxLength={30} placeholder="Lembre-me de fazer" />
           
            <S.Label>Detalhes</S.Label>
              <S.InputArea style={{textAlignVertical:'top'}} multiline={true} maxLength={200} placeholder="Detalhes da atividade" />
              
              <DateTimeInput type={'date'}/>
              <DateTimeInput type={'time'}/>

            <S.inLine>
              <S.inputLine>
                <S.Switch 
                onValueChange={()=> setDone(!done)}
                 value={done}
                 thumbColor={done ? '#FF7811' : '#707070'}
                 />
                <S.SwitchLabel>Concluído</S.SwitchLabel>
              </S.inputLine>
                <S.RemoveButton>
                  <S.RemoveLabel>EXCLUÍR</S.RemoveLabel>
                </S.RemoveButton>
            </S.inLine>


        </S.Form>     
      <Footer icon={"save"}/>
    </S.Container>
  );
}

export default Task;