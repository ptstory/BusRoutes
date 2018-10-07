import React from "react";
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image
} from "react-native";
import Header from "../components/Header";
import { ReactiveBase } from '@appbaseio/reactivesearch-native'

class HomeScreen extends React.Component {
  static navigationOptions = { header: null };

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
        // // TODO: is there a specific app name? what is the url? Add components as needed. test connection.
        // <ReactiveBase app="PantherRoutes" url="http://35.231.186.113:9200"></ReactiveBase>
      <View style={styles.container}>
        <Header balance={this.state.balance} navigation={this.props.navigation}/>
        <Button style={styles.button} onPress={this.handleCheckIn}title="+10 for checking in"></Button>
        <Button style={styles.button} title="CHECK IN" onPress={() => navigate("CheckIn")} />
        <Button style={styles.button} title="REWARDS" onPress={() => navigate("Rewards")} />
        {/* <Button title="MAP" onPress={() => navigate("Map")} /> */}
        <Button style={styles.button} title="SURVEY" onPress={() => navigate("Survey")} />

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
  button: {
    backgroundColor: "#859a9b",
    borderRadius: 20,
    padding: 10,
    margin: 100,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35
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
