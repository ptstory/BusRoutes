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
import Reward from "../components/Reward";
import sampleRewards from "../rewards";

class RewardsScreen extends React.Component {
  constructor() {
    super();

    // this.loadRewards = this.loadRewards.bind(this);

    this.state = {
      rewards: {},
      modalVisible: false
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
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
        <Header navigation={this.props.navigation} />
        <View style={{alignSelf: 'flex-start'}}>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
            this.setSelectedReward(this);
          }}
          addToOrder={this.addToOrder}
        >
          <Image style={styles.tiny} source={require("../assets/saxbys.jpg")} />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
            this.setSelectedReward(this);
          }}
          addToOrder={this.addToOrder}
        >
          <Image
            style={styles.tiny}
            source={require("../assets/bookstore.jpg")}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
            this.setSelectedReward(this);
          }}
          addToOrder={this.addToOrder}
        >
          <Image
            style={styles.tiny}
            source={require("../assets/bookstore.jpg")}
          />
        </TouchableHighlight>
        </View>

        <View style={{alignSelf: 'flex-end'}}>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
            this.setSelectedReward(this);
          }}
          addToOrder={this.addToOrder}
        >
          <Image style={styles.tiny} source={require("../assets/condesa.jpg")} />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
            this.setSelectedReward(this);
          }}
          addToOrder={this.addToOrder}
        >
          <Image
            style={styles.tiny}
            source={require("../assets/ebrik.jpg")}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
            this.setSelectedReward(this);
          }}
          addToOrder={this.addToOrder}
        >
          <Image
            style={styles.tiny}
            source={require("../assets/kungfutea.jpg")}
          />
        </TouchableHighlight>
        </View>

        <TouchableOpacity onPress={() => navigate("Home")}>
            <Image style={styles.icon} source={require("../assets/logo.png")} resizeMode={'contain'} />
        </TouchableOpacity>
        <Modal style={{ backgroundColor: 'white'}}
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onBackButtonPress={() => this.setState({ visibleModal: null })}>
          <View style={{ marginTop: 0, alignContent: 'center' }}>
            <View>
            <Image resizeMode={'contain'} source={require("../assets/saxbys-modal.png")} />
              {/* <Text>Image</Text>
              <Text>Name</Text>
              <Text>Desc</Text>
              <Text>Price</Text> */}

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={{fontSize: 30}}>Dismiss</Text>
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
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 150,
    height: 150,
    alignSelf: 'center'
  },
  banner: {
    width: "100%",
    height: "40%"
  },
  tiny: {
    width: 75,
    height: 75
  }
});

export default RewardsScreen;
