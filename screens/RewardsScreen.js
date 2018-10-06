import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Button
} from "react-native";

import Header from "../components/Header";
import sampleRewards from "../rewards";

class RewardsScreen extends React.Component {
  constructor(){
    super();

    // this.loadRewards = this.loadRewards.bind(this);
  
  this.state = {
    rewards: {}
  };
}

  static navigationOptions = {
    title: "Rewards"
  };

  componentWillMount(){
    this.setState({
      rewards: sampleRewards
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Header navigation={this.props.navigation} />
        {/* <Header balance={this.state.balance} navigation={this.props.navigation}/> */}
        {/* <Image resizeMode="contain" style={styles.banner} source={require("../assets/check-in-banner.png")} /> */}
        <Text>I am at:</Text>
        {Object.keys(this.state.rewards) 
            .map(key => <Text key={key} addToOrder={this.addToOrder}>{this.state.rewards[key].price}</Text>)}
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
  banner: {
    width: "100%",
    height: "40%"
  }
});

export default RewardsScreen;
