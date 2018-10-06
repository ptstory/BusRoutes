import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { SegmentedControls } from "react-native-radio-buttons";


class SurveyQuestion extends Component {
  constructor(props) {
    super(props);
    number = this.props.number;
    this.state = {
      balance: 0,
      checkedIn: false,
      show: true
    };
  }

  handleSuveySubmit = () => {
    this.setState({ balance: this.state.balance + 20});
  }

  render() {
    const options = [
        "Good",
        "Bad"
      ];
    return (
      <View>
      <Text>Was the bus clean?</Text> 
      <SegmentedControls
          direction={"row"}
          options={options}
          onSelection={setSelectedAt.bind(this)}
          selectedOption={this.state.selectedAt}
        />
        <Button onPress={this.handleSuveySubmit} title="+20 for submitting survey"></Button>
      </View>
    );
  }
}

export default SurveyQuestion;
