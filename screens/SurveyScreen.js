import React from "react";
import { Button, TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";

import Header from "../components/Header";
import SurveyQuestion from "../components/SurveyQuestion"

class SurveyScreen extends React.Component {
  state = {};

  static navigationOptions = {
    title: "Survey"
  };
  render() {
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
        <Text h1>Tell us about your ride</Text>
        <SurveyQuestion number={1}/>
        <SurveyQuestion number={2}/>
        <SurveyQuestion number={3}/>
        <Button onPress={this.handleSuveySubmit} title="+20 for submitting survey"></Button>



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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 150,
    height: 150,
    alignSelf: 'center'
  },
  banner: {
    width: "100%",
    height: "40%"
  }
});

export default SurveyScreen;
