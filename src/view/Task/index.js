import React,{useState} from 'react';
import {Alert} from 'react-native';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import DateTimeInput from '../../components/DateTimeInput';

import api from '../../service/api'

import * as S from './styles';
import typeIcons from '../../utils/typeIcons';

const Task = ({ navigation}) => {
  const [done, setDone] = useState(false);
  const [type, setType] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [macaddress, setMacaddress] = useState("00:11:22:33:44:55");

  async function New(){

  
    if(!title)
    return Alert.alert('Defina o título da tarefa!');

    if (!description) 
    return Alert.alert('Defina a descrição da tarefa!');

    if (!type) 
    return Alert.alert('Escolha um tipo para a tarefa!');

    if (!date) 
    return Alert.alert("Escolha uma data para a tarefa!");

    if (!hour) 
    return Alert.alert("Escolha um horário para a tarefa!");

    await api.post('/task', {
      macaddress,
      type,
      title,
      description,
      when: `${date}T${hour}.000`
    }).then(()=>{
      navigation.navigate('Home');
    });

  }
 

  return (
     <S.Container>
      <Header showBack={true} navigation={navigation}/>
        <S.Form>
            <S.ViewType>
              { 
                typeIcons.map((icon, index)=>(
                  icon != null &&
                  <S.TypeButton onPress={()=> setType(index)}>
                    <S.TypeIcon source={icon} style={type && type != index && {opacity:0.5}} />
                  </S.TypeButton>
                ))              
              }
            </S.ViewType>
            <S.Label>Título</S.Label>
              <S.Input              
              maxLength={30} 
              placeholder="Lembre-me de fazer" 
              onChangeText={(text) => setTitle(text)}
              value={title}
               
               />
           
            <S.Label>Detalhes</S.Label>
              <S.InputArea 
              style={{textAlignVertical:'top'}} 
              multiline={true} maxLength={200} 
              placeholder="Detalhes da atividade"
              onChangeText={(text) => setDescription(text)}
              value={description}

              />
              
              <DateTimeInput type={'date'} save={setDate} dated={date} />
              <DateTimeInput type={'time'} save={setHour} time={hour}/>

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
      <Footer icon={"save"} onPress={New} />
    </S.Container>
  );
}

export default Task;