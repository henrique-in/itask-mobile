import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from "../view/Home";
import Task from "../view/Task";

const AppNavigation = createAppContainer(
  createSwitchNavigator({
    Home,
    Task
  })

)

const routes = () => {
  return <AppNavigation/>;
}

export default routes;