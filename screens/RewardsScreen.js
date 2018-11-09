import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Button
} from "react-native";

import Header from "../components/Header";
import Reward from "../components/Reward";
import sampleRewards from "../rewards";

class RewardsScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      rewards: {},
      modalVisible: false,
      // selectedReward: { icon: "../assets/saxbys.jpg", desc: 'description', cost: 100},
      icon: "",
      desc: "",
      cost: 999
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
    this.setState(prevState => ({
      selectedReward: {
        ...prevState.selectedReward,
        desc: this.desc
      }
    }));
  };

  render() {
    let icons = {
      saxbys: require("../assets/saxbys-modal.png"),
      bookstore: require("../assets/bookstore.jpg"),
      reubens: require("../assets/reubens.jpg"),
      condesa: require("../assets/condesa.jpg"),
      ebrik: require("../assets/ebrik.jpg"),
      kungfutea: require("../assets/kungfutea.jpg")
    };
    const { navigate } = this.props.navigation;
    const { balance } = this.props.navigation.state.params;
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
        <Header balance={balance} navigation={this.props.navigation} />
        <View />
        <View style={{ flexDirection: "row" }}>
          <View style={{ alignSelf: "flex-start" }}>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true);
                this.setState({
                  icon: "saxbys",
                  desc: "$2 off any hot beverage",
                  cost: 100
                });
              }}
            >
              <Image
                style={styles.tiny}
                source={require("../assets/saxbys.jpg")}
              />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true);
                this.setState({
                  icon: "bookstore",
                  desc: "something something bookstore",
                  cost: 400
                });
              }}
            >
              <Image
                style={styles.tiny}
                source={require("../assets/bookstore.jpg")}
              />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true);
                this.setState({
                  icon: "reubens",
                  desc: "something something rebuens",
                  cost: 100
                });
              }}
            >
              <Image
                style={styles.tiny}
                source={require("../assets/reubens.jpg")}
              />
            </TouchableHighlight>
          </View>

          <View style={{ alignSelf: "flex-end" }}>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true);
                this.setState({
                  icon: "condesa",
                  desc: "something something condesa",
                  cost: 250
                });
              }}
            >
              <Image
                style={styles.tiny}
                source={require("../assets/condesa.jpg")}
              />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true);
                this.setState({
                  icon: "ebrik",
                  desc: "something someting ebrik",
                  cost: 150
                });
              }}
            >
              <Image
                style={styles.tiny}
                source={require("../assets/ebrik.jpg")}
              />
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true);
                this.setState({
                  icon: "kungfutea",
                  desc: "something something kungfutea",
                  cost: 200
                });
              }}
            >
              <Image
                style={styles.tiny}
                source={require("../assets/kungfutea.jpg")}
              />
            </TouchableHighlight>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigate("Home")}>
          <Image
            style={styles.icon}
            source={require("../assets/logo.png")}
            resizeMode={"contain"}
          />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onBackButtonPress={() => this.setState({ visibleModal: null })}
          onRequestClose={() => {
            this.visibleModal(false);
          }}
        >
          <View style={{ marginTop: 0, alignContent: "center" }}>
            <View>
              <View>
                <Text>{this.state.desc}</Text>
                <Image style={styles.tiny} source={icons[this.state.icon]} />
                <Text>{this.state.cost}</Text>
              </View>

              <View>
                <Button
                  title="Purchase"
                  onPress={() => {
                    params.onPurchase();
                    if (balance >= this.state.cost) {
                      this.props.navigation.setParams({
                        balance: balance - this.state.cost
                      }); // this is hacky but what can ya do
                    }
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                />
              </View>
              <View>
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <Text style={{ fontSize: 30, flex: 1 }}>Dismiss</Text>
                </TouchableHighlight>
              </View>
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
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 150,
    height: 150,
    alignSelf: "center"
  },
  banner: {
    width: "100%",
    height: "40%"
  },
  tiny: {
    width: 75,
    height: 75
  },
  modal: {
    justifyContent: "center",
    alignSelf: "center"
  }
});

export default RewardsScreen;
