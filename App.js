import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import Home from './src/view/Home';

export default function App() {

useEffect(() => {
      setTimeout(() => {
        SplashScreen.hide();
      }, 1000);
    }, []);

  return (
      <Home/>
  );
}
