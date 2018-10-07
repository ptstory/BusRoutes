import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Image, Button } from "react-native";

class ProfileScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Image resizeMode="contain" style={styles.profile} source={require("../assets/avatar_icon.png")} />
        <Text>Balance: </Text>
        <Text>Miles: </Text>
        <TouchableOpacity onPress={() => navigate("Achievements")}>
          <Image style={styles.icon} source={require("../assets/trophy.png")} />
        </TouchableOpacity>
        
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

export default ProfileScreen;
