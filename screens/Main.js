import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from '../components/MainScreen';

export default class Main extends React.Component {
  render() {
    return (
      <MainScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
