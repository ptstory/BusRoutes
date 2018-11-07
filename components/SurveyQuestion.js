import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import { SegmentedControls } from "react-native-radio-buttons";

class SurveyQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      checkedIn: false,
      show: true
    };
  }

  handleSuveySubmit = () => {
    this.setState({ balance: this.state.balance + 20 });
  };

  render() {
    const options = ["Yes", "No"];
    return (
      <View>
        <View>
          <Text style={{ color: "white", fontSize: 18 }}>
            {this.props.question}
          </Text>
        </View>
        <View>
          <SegmentedControls
            direction={"row"}
            options={options}
            onSelection={setSelectedAt.bind(this)}
            selectedOption={this.state.selectedAt}
          />
        </View>
      </View>
    );
  }
}

export default SurveyQuestion;
