import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

class Balance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      checkedIn: false,
      show: true
    };
  }

  handleCheckIn = () => {
    this.setState({ balance: this.state.balance + 10, checkedIn: true });
  }

  render() {
    return (
      <View>
      <Text>Balance: {this.state.balance}</Text> 
        <Button onPress={this.handleCheckIn} title="+10 for checking in"></Button>
      </View>
    );
  }
}

export default Balance;
