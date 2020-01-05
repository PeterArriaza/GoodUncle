import React from "react";
import { TextInput, Button, StyleSheet, Alert, View } from "react-native";
import { Auth } from "aws-amplify";

export default class ConfirmSignUpScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    confirmationCode: ""
  };

  onChangeText(key, value) {
    this.setState({
      [key]: value
    });
  }

  confirmSignUp() {
    Auth.confirmSignUp(
      this.props.navigation.getParam("username"),
      this.state.confirmationCode
    )
      .then(() => {
        console.log("successful confirm sign up!");
        this.props.navigation.navigate("Main");
      })
      .catch(err => {
        console.log("error confirming signing up!: ", err);
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
        <Text>Please enter confirmation code from your email</Text>
        <TextInput
          onChangeText={value => this.onChangeText("confirmationCode", value)}
          style={styles.input}
          placeholder="confirmation code"
          keyboardType="number-pad"
        />
        <Button
          title="Confirm Sign Up"
          onPress={this.confirmSignUp.bind(this)}
        />
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
