import React from 'react';
import { Component, StyleSheet, Text, View } from 'react-native';

const mainScreen = (props) => ( // parentheses short hand to immediately return without render()
    <View>
        <Text>Test</Text>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default MainScreen;