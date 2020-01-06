import React from "react";
import { TextInput, Button, StyleSheet, Alert, View } from "react-native";
import { Auth } from "aws-amplify";

export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "",
    password: "",
    phone_number: "",
    email: "",
    confirmationCode: ""
  };
  onChangeText(key, value) {
    this.setState({
      [key]: value
    });
  }
  signUp() {
    const { name, password, phone_number, email } = this.state;
    name === "" || password === "" || phone_number === "" || email === ""
      ? Alert.alert(
          "Error",
          "Please fill in all fields before submitting",
          [{ text: "OK" }],
          { cancelable: false }
        )
      : Auth.signUp({
          username: this.state.phone_number,
          password: this.state.password,
          attributes: {
            name: this.state.name,
            email: this.state.email,
            phone_number: this.state.phone_number
          }
        })
          .then(() => {
            console.log("successful sign up!");
            this.props.navigation.navigate("ConfirmSignUpScreen", {
              username: this.state.phone_number
            });
          })
          .catch(err => {
            console.log("error signing up!: ", err);
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
          onChangeText={value => this.onChangeText("phone_number", value)}
          style={styles.input}
          placeholder="phone with country code (+1 for USA)"
          keyboardType="phone-pad"
        />
        <TextInput
          onChangeText={value => this.onChangeText("email", value)}
          style={styles.input}
          placeholder="email"
          keyboardType="email-address"
        />
        <TextInput
          onChangeText={value => this.onChangeText("name", value)}
          style={styles.input}
          placeholder="name"
          autoCapitalize="words"
        />
        <TextInput
          onChangeText={value => this.onChangeText("password", value)}
          style={styles.input}
          secureTextEntry={true}
          placeholder="password (min. 8 characters)"
        />

        <Button title="Sign Up" onPress={this.signUp.bind(this)} />
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
