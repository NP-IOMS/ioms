import React, {Component} from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './app/components/Login';
import CreateOrderScreen from './app/components/CreateOrder';

const MainNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    CreateOrder: CreateOrderScreen,
  },
  {
    initialRouteName: 'CreateOrder',
  },
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
