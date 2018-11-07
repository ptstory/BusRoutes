import React from "react";
import { Button, TouchableOpacity, Text, StyleSheet, View, Image, FlatList } from "react-native";

import Header from "../components/Header";
import SurveyQuestion from "../components/SurveyQuestion"

class SurveyScreen extends React.Component {
  state = {};

  static navigationOptions = { header: null };

  render() {
    
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    const { balance } = this.props.navigation.state.params;

    setSelectedAt = selectedAt => { 
      this.setState({
        selectedAt
      });
    };
    setSelectedTo = selectedTo => {
      this.setState({
        selectedTo
      });
    };
    return (
      <View style={styles.container}>
        <Header balance={balance} navigation={this.props.navigation} />
        <View>
        <Text style={{color: 'white', fontSize: 30}}>Tell us about your ride</Text>
        </View>

         <FlatList
          data={[
            {key: 'Was the bus clean?'},
            {key: 'Was your driver friendly?'},
            {key: 'Are you a fan of coffee?'}
          ]}
          renderItem={({item}) => <SurveyQuestion question={item.key} style={{color: 'white'}}></SurveyQuestion>}
        />
        <Button
            title="Submit"
            onPress={() => {
              params.onSurvey();
              this.props.navigation.setParams({ balance: balance +20 }) // this is hacky but what can ya do
            }}
          />

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
    // alignItems: "center",
    // justifyContent: "center"
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
    question: {
      margin: 20
    }
});

export default SurveyScreen;
