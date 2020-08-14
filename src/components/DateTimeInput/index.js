import React,{useState} from 'react';
import { View } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import {isPast, format} from 'date-fns';

import * as S  from './styles';

import iconCalendar from '../../assets/icons/calendar-alt.png';
import iconClock from '../../assets/icons/clock.png';

const DateTimeInput = ({type}) => {
   const [dateTime, SetDateTime] = useState();
   const [date, setDate] = useState(new Date());
   const [mode, setMode] = useState("date");
   const [show, setShow] = useState(false);
   
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(Platform.OS === "ios");
     
     
       if (event.type === "dismissed") {
          setShow(false);
        } else {
          if (type == "date" && currentDate) {
            setDateTime(format(new Date(currentDate), "dd/MM/yyyy"));
            save(format(new Date(currentDate), "yyyy-MM-dd"));
          }
          if (type == "time" && currentDate) {
            if (currentDate < dateNow) {
              Alert.alert("voce não pode voltar no passado");
            } else {
              setDateTime(format(new Date(currentDate), "HH:mm"));
              save(format(new Date(currentDate), "HH:mm:ss"));
            }
          }
        }


    };

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };

    const showPicker = () => {
      showMode(type);
    };


  return (
    <>
      <S.Container onPress={showPicker}>
        <S.Label
          placeholder={
            type == "date"
              ? "Clique para definir a data"
              : "Clique aqui para definir a hora"
          }
          editable={false}
          value={dateTime}
        />
        <S.Icon source={type == "date" ? iconCalendar : iconClock} />
      </S.Container>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </>
  );
}

export default DateTimeInput;