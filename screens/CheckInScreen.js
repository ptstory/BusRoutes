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
      <View>
        <Header navigation={this.props.navigation} />
        {/* <Header balance={this.state.balance} navigation={this.props.navigation}/> */}
        {/* <Image resizeMode="contain" style={styles.banner} source={require("../assets/check-in-banner.png")} /> */}
        <View style={{alignSelf: 'flex-start'}}>
        <Text>I am at:</Text>
        <SegmentedControls
          // style={{width: '50%', height: '50%'}} 
          direction={"column"}
          options={optionsAt}
          onSelection={setSelectedAt.bind(this)}
          selectedOption={this.state.selectedAt}
        />
        </View>
        <View style={{alignSelf: 'flex-end'}}>
        <Text>Going to</Text>
        <SegmentedControls
          direction={"column"}
          options={optionsTo}
          onSelection={setSelectedTo.bind(this)}
          selectedOption={this.state.selectedTo}
        />
        </View>
        <TouchableOpacity onPress={() => navigate("Home")}>
          <Image style={styles.icon} source={require("../assets/logo.png")} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 150,
    height: 150
  },
  banner: {
    width: "100%",
    height: "40%"
  }
});

export default CheckInScreen;
