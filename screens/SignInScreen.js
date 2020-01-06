import React from "react";
import { TextInput, Button, StyleSheet, Text, View, Alert } from "react-native";

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
    username === "" || password === ""
      ? Alert.alert(
          "Error",
          "Please fill in all fields before submitting",
          [{ text: "OK" }],
          { cancelable: false }
        )
      : Auth.signIn(username, password)
          .then(user => {
            this.setState({ user });
            console.log("successful sign in!");
            this.props.navigation.navigate("Main");
          })
          .catch(err => {
            console.log("error signing in!: ", err);
            Alert.alert(
              "Error Signing In",
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
          placeholder="phone with country code (+1 for USA)"
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
