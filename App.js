import {createStackNavigator } from "react-navigation";
import React from 'react';

import HomeScreen from "./screens/HomeScreen";
import CheckInScreen from "./screens/CheckInScreen";
import RewardsScreen from "./screens/RewardsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SurveyScreen from "./screens/SurveyScreen";
import Login from "./screens/Login";
import AchievementsScreen  from "./screens/AchievementsScreen";

console.disableYellowBox = true; 



const App = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: HomeScreen },
  CheckIn: { screen: CheckInScreen },
  Rewards: { screen: RewardsScreen },
  Profile: { screen: ProfileScreen },
  Survey: { screen: SurveyScreen },
  Achievements: { screen: AchievementsScreen },
});

// state = {
//   balance: 0,
//   checkedIn: false,
//   show: true
// };

// const NestedNavigator = createStackNavigator({
//   ScreenOne: {
//       screen: CheckInScreen
//   },
//   ScreenTwo: {
//       screen: RewardsScreen
//   }
// });

// class NestedNavigatorWrapper extends React.Component {
//   constructor(props)  {
//       super(props);
//   }
//   render() {
//       return (
//           <DashboardNavigator screenProps={{ rootNavigation: this.props.navigation }} />
//       );
//   }
// }
// const AppNavigator = createStackNavigator({
//   Home: {
//       screen: HomeScreen
//   },
//   Nested: {
//       screen: NestedNavigatorWrapper
//   }
// });

export default App;
