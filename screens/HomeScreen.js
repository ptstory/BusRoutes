import React from "react";
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image
} from "react-native";
import Header from "../components/Header";

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          balance: 0,
          checkedIn: false,
          show: true
        };
        // this.handleCheckIn = this.handleCheckIn.bind(this);
      }
    
      handleCheckIn = () => {
        this.setState({ balance: this.state.balance + 10, checkedIn: true });
      };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Header balance={this.state.balance} navigation={this.props.navigation}/>
        <Button style={styles.button} onPress={this.handleCheckIn}title="+10 for checking in"></Button>
        <Button title="CHECK IN" onPress={() => navigate("CheckIn")} />
        <Button title="REWARDS" onPress={() => navigate("Rewards")} />
        <Button title="MAP" onPress={() => navigate("Map")} />

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
  button: {
    backgroundColor: "#859a9b",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35
  },
  icon: {
    width: 150,
    height: 150
  },
  avatar: {
    width: 50,
    height: 50
  }
});

export default HomeScreen;
