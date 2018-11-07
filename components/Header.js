import React, { Component } from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";

class Header extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.view}>
        <TouchableOpacity 
        onPress={() =>
              this.props.navigation.navigate("Profile", {
                balance: this.props.balance,
              })
            }
        >
          <Image
            style={styles.avatar}
            source={require("../assets/perry_profile.jpeg")}
          />
        </TouchableOpacity>
        <Text style={styles.balance}>Balance: {this.props.balance} </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    padding: 10,
    margin: 30,
    borderRadius: 50 / 2
  },
  balance: {
    padding: 10,
    margin: 30,
    textAlign: "right",
    color: "white",
    fontSize: 18
  },
  view: {
    flexDirection: "row",
    width: "100%"
  }
});

export default Header;
