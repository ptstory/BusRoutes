import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
  Button
} from "react-native";
import * as Progress from "react-native-progress";

import Header from "../components/Header";

class AchievementsScreen extends React.Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      indeterminate: true
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    let progress = 0;
    this.setState({ progress });
    setTimeout(() => {
      this.setState({ indeterminate: false });
      setInterval(() => {
        progress += Math.random() / 5;
        // if (progress > 1) {
        //   progress = 1;
        // }
        this.setState({ progress });
      }, 500);
    }, 1500);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Header navigation={this.props.navigation} />

        <Image style={styles.icon} source={require("../assets/bus.jpg")} />
        <Progress.Bar
          style={styles.progress}
          progress={this.state.progress}
          indeterminate={this.state.indeterminate}
        />
        <Image
          style={styles.icon}
          source={require("../assets/stoplight.jpg")}
        />
        <Progress.Bar
          style={styles.progress}
          progress={this.state.progress}
          indeterminate={this.state.indeterminate}
        />
        <Image style={styles.icon} source={require("../assets/wheel.jpg")} />
        <Progress.Bar
          style={styles.progress}
          progress={this.state.progress}
          indeterminate={this.state.indeterminate}
        />

        <TouchableOpacity onPress={() => navigate("Home")}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
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
  logo: {
    width: 150,
    height: 150
  },
  profile: {
    width: "100%",
    height: "50%"
  },
  progress: {
    margin: 10
  },
  icon: {
    width: 50,
    height: 50
  }
});

export default AchievementsScreen;
