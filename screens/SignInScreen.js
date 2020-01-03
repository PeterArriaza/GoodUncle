import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

export default function SignInScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Sign In Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    marginHorizontal: 20
  }
});
