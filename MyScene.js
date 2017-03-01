import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator } from 'react-native';

export default class MyScene extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text>Hi! My name is {this.props.title}.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 30
  }
});
