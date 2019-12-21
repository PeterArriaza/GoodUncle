import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default class SignInScreen extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <Button
          title="Go to Main"
          onPress={() => this.props.navigation.navigate("Main")}
        ></Button>
      </View>
    );
  }
}
