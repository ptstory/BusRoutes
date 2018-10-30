import React from "react";
import { Button, TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";

import Header from "../components/Header";
import SurveyQuestion from "../components/SurveyQuestion"

class SurveyScreen extends React.Component {
  state = {};

  static navigationOptions = { header: null };

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    const { balance } = this.props.navigation.state.params;
    
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
        <Text h1 style={{color: 'white'}}>Tell us about your ride</Text>

          <SurveyQuestion number={1}/>
        <SurveyQuestion number={2}/>
        <SurveyQuestion number={3}/>
        <Button
            title="Submit"
            onPress={() => {
              params.onSurvey();
            }}
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
    // alignItems: "center",
    // justifyContent: "center"
  },
  icon: {
    width: 150,
    height: 150,
    alignSelf: 'center'
  },
  banner: {
    width: "100%",
    height: "40%"
  },
    question: {
      margin: 20
    }
});

export default SurveyScreen;
