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
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      checkedIn: false,
      show: true
    };
  }

  handleCheckIn = () => {
    this.setState({ balance: this.state.balance + 10, checkedIn: true });
  };

  handleSurvey = () => {
    this.setState({ balance: this.state.balance + 20 });
  };
  
  handlePurchase = () => {
    this.setState({ balance: this.state.balance - 30 });
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header
          balance={this.state.balance}
          navigation={this.props.navigation}
        />
        <View style={styles.button}>
          <Button
            style={styles.button}
            title="CHECK IN"
            onPress={() =>
              this.props.navigation.navigate("CheckIn", {
                balance: this.state.balance,
                onCheckIn: this.handleCheckIn.bind(this)
              })
            }
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.button}
            title="REWARDS"
            onPress={() =>
              this.props.navigation.navigate("Rewards", {
                balance: this.state.balance,
                onPurchase: this.handlePurchase.bind(this),
              })
            }
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.button}
            title="SURVEY"
            onPress={() =>
              this.props.navigation.navigate("Survey", {
                balance: this.state.balance,
                onSurvey: this.handleSurvey.bind(this)
              })
            }
          />
        </View>

        <TouchableOpacity onPress={() => navigate("Home")}>
          <Image
            style={styles.icon}
            source={require("../assets/logo.png")}
            resizeMode={"contain"}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
    // alignItems: "center",
    // justifyContent: "center",
  },
  button: {
    backgroundColor: "#859a9b",
    borderRadius: 20,
    padding: 10,
    margin: 10
    // shadowColor: "#303838",
    // shadowOffset: { width: 0, height: 5 },
    // shadowRadius: 10,
    // shadowOpacity: 0.35
  },
  icon: {
    width: 150,
    height: 150,
    alignSelf: "center"
  },
  avatar: {
    width: 50,
    height: 50
  }
});

export default HomeScreen;
