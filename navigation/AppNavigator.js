import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainTabNavigator from "./MainTabNavigator";
import LandingScreen from "../screens/LandingScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import ConfirmSignUpScreen from "../screens/ConfirmSignUpScreen";

const AuthStack = createStackNavigator({
  LandingScreen: {
    screen: LandingScreen,
    navigationOptions: {
      header: null
    }
  },
  SignInScreen: SignInScreen,
  SignUpScreen: SignUpScreen,
  ConfirmSignUpScreen: ConfirmSignUpScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Main: MainTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Auth"
    }
  )
);
