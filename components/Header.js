import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Button,
  Text
} from "react-native";

class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       balance: 0,
//       checkedIn: false,
//       show: true
//     };
//     this.handleCheckIn = this.handleCheckIn.bind(this);
//   }

//   handleCheckIn = () => {
//     this.setState({ balance: this.state.balance + 10, checkedIn: true });
//   };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TouchableOpacity onPress={() => navigate("Profile")}>
          <Image
            style={styles.avatar}
            source={require("../assets/avatar_icon.png")}
          />
        </TouchableOpacity>
        <Text>Balance: {this.props.balance}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50
  }
});

export default Header;
