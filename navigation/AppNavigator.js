import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainTabNavigator from "./MainTabNavigator";
import SignInScreen from "../screens/SignInScreen";

const AuthStack = createStackNavigator(
  { SignIn: SignInScreen },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const MainStack = createStackNavigator(
  { MainTabNavigator: MainTabNavigator },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Main: MainStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Auth"
    }
  )
);
