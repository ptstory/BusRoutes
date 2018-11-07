import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Image, Button } from "react-native";

class ProfileScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    const { navigate } = this.props.navigation;
    const { balance } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Image resizeMode="contain" style={styles.profile} source={require("../assets/avatar_icon.png")} />
        <Text style={{color: 'white', fontSize: 32}}>Balance: {balance}</Text> 
        <Text>Miles: </Text>
        <TouchableOpacity onPress={() => navigate("Achievements")}>
          <Image style={styles.icon} source={require("../assets/trophy.png")} />
        </TouchableOpacity>
        
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
    width: 70,
    height: 70,
    alignSelf: 'center'
  },
  profile: {
    width: "75%",
    height: "50%"
  }
});

export default ProfileScreen;
