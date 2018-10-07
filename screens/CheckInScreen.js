import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { SegmentedControls } from "react-native-radio-buttons";

import Header from "../components/Header";

class CheckInScreen extends React.Component {
  state = {};

  static navigationOptions = { header: null };

  render() {
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
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        {/* <Header balance={this.state.balance} navigation={this.props.navigation}/> */}
        {/* <Image resizeMode="contain" style={styles.banner} source={require("../assets/check-in-banner.png")} /> */}
        <Text>I am at:</Text>
        <SegmentedControls
          direction={"column"}
          options={optionsAt}
          onSelection={setSelectedAt.bind(this)}
          selectedOption={this.state.selectedAt}
        />
        <Text>Going to</Text>
        <SegmentedControls
          direction={"column"}
          options={optionsTo}
          onSelection={setSelectedTo.bind(this)}
          selectedOption={this.state.selectedTo}
        />
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
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 150,
    height: 150,
    alignSelf: "center"
  },
  banner: {
    width: "100%",
    height: "40%"
  }
});

export default CheckInScreen;
