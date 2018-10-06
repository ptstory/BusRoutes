import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Image, Button } from "react-native";

import Header from "../components/Header";

class AchievementsScreen extends React.Component {
  static navigationOptions = {
    title: "Achievements"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Header navigation={this.props.navigation} />
        <Text>Progress Bar </Text>
        <Text>Progress Bar </Text>
        <Text>Progress Bar </Text>
        
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
  profile: {
    width: "100%",
    height: "50%"
  }
});

export default AchievementsScreen;
