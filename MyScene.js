import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Navigator } from 'react-native';

export default class MyScene extends Component {
  render() {
   return (
     <View style={styles.screen}>
       <Text>Current Scene: {this.props.title}</Text>

       <TouchableHighlight onPress={this.props.onForward}>
         <Text>Tap me to load the next scene</Text>
       </TouchableHighlight>

       <TouchableHighlight onPress={this.props.onBack}>
         <Text>Tap me to go back</Text>
       </TouchableHighlight>
     </View>
   )
  }
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 30
  }
});

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};
