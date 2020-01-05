import React from "react";
import { TextInput, Button, StyleSheet, Text, View } from "react-native";

import { Auth } from "aws-amplify";

export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    username: "",
    password: "",
    user: {}
  };
  onChangeText(key, value) {
    this.setState({
      [key]: value
    });
  }
  signIn() {
    const { username, password } = this.state;
    Auth.signIn(username, password)
      .then(user => {
        this.setState({ user });
        console.log("successful sign in!");
        this.props.navigation.navigate("Main");
      })
      .catch(err => {
        console.log("error signing in!: ", err);
        Alert.alert(
          "Error Signing Up",
          `${err.message}`,
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={value => this.onChangeText("username", value)}
          style={styles.input}
          placeholder="phone number"
          keyboardType="phone-pad"
        />
        <TextInput
          onChangeText={value => this.onChangeText("password", value)}
          style={styles.input}
          secureTextEntry={true}
          placeholder="password"
        />
        <Button title="Sign In" onPress={this.signIn.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: "#2196F3",
    margin: 10
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16
  }
});
