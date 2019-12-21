import React from 'react'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/home';

const Stack = createStackNavigator({
  Home : {
    navigationOptions : {
      title: 'Home',
    },
    screen: Home
  },
  Cursos : {
    navigationOptions : {
      title: 'Cursos',
    },
    screen: Home
  }
})

export default createAppContainer(Stack);