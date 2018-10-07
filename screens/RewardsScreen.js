import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableHighlight
} from "react-native";

import Header from "../components/Header";
import sampleRewards from "../rewards";

class RewardsScreen extends React.Component {
  constructor() {
    super();

    // this.loadRewards = this.loadRewards.bind(this);

    this.state = {
      rewards: {},
      modalVisible: false,
      // selectedReward: null
    };
  }

  static navigationOptions = { header: null };


  componentWillMount() {
    this.setState({
      rewards: sampleRewards
    });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  setSelectedReward = selectedReward => {
    this.setState({
      selectedReward
    });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
        <Header navigation={this.props.navigation} />
        {/* <Header balance={this.state.balance} navigation={this.props.navigation}/> */}
        {/* <Image resizeMode="contain" style={styles.banner} source={require("../assets/check-in-banner.png")} /> */}
        {Object.keys(this.state.rewards).map(key => (
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
              // this.setSelectedReward.bind(this);
              this.setSelectedReward(this);
            }}
            key={key}
            addToOrder={this.addToOrder}
          >
            <Text>{this.state.rewards[key].name}</Text>
          </TouchableHighlight>
        ))}
        <TouchableOpacity onPress={() => navigate("Home")}>
          <Image style={styles.icon} source={require("../assets/logo.png")} />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Image</Text>
              <Text>Name</Text>
              <Text>Desc</Text>
              <Text>Price</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
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
