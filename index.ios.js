import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import MyScene from './MyScene';

class MyApp extends Component {
  render() {
    return (
      <MyScene />
    )
  }
}

AppRegistry.registerComponent('RN_navigator', () => MyApp);
