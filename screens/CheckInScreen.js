import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image, Button } from "react-native";
import { SegmentedControls } from "react-native-radio-buttons";

import Header from "../components/Header";

class CheckInScreen extends React.Component {
  state = {};

  static navigationOptions = { header: null };

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    const { balance } = this.props.navigation.state.params;
    const optionsAt = [
      "Langdale",
      "Blue Lot",
      "Commons",
      "Sparks Hall",
      "Student Center"
    ];
    const optionsTo = [
      "Langdale",
      "Blue Lot",
      "Commons",
      "Sparks Hall",
      "Student Center"
    ];
    setSelectedAt = selectedAt => { 
      this.setState({
        selectedAt
      });
    };
    setSelectedTo = selectedTo => {
      this.setState({
        selectedTo
      });
    };
    return (
      <View style={styles.container}>
        <Header balance={balance} navigation={this.props.navigation} />
        <View style={styles.overallcontrol}>
            <View style={styles.controlstart}>
            <Text style={{color: 'white'}}>I am at:</Text>
            <SegmentedControls
              // style={{width: '50%', height: '50%'}}
              direction={"column"}
              options={optionsAt}
              onSelection={setSelectedAt.bind(this)}
              selectedOption={this.state.selectedAt}
            />
            </View>
            <View style={styles.controlstart}>
            <Text style={{color: 'white'}}>Going to</Text>
            <SegmentedControls
              direction={"column"}
              options={optionsTo}
              onSelection={setSelectedTo.bind(this)}
              selectedOption={this.state.selectedTo}
            />
            </View>
        </View>
        <View style={styles.button}>
        <Button
            title="Submit"
            onPress={() => {
              params.onCheckIn();
            }}
          />
        </View>
        <TouchableOpacity onPress={() => navigate("Home")}>
          <Image style={styles.icon} source={require("../assets/logo.png")} resizeMode={'contain'} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    // alignItems: "center",
    // justifyContent: "center"
  },
  icon: {
    width: 150,
    height: 150,
    alignSelf: "center"
  },
  banner: {
    width: "100%",
    height: "40%"
  },
    controlstart: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        margin: 20
    },
    controlend: {
        flexDirection: 'column',
        alignSelf: 'flex-end'
    },
    overallcontrol: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    }
});

export default CheckInScreen;
