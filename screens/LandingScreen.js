import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

export default function LandingScreen(props) {
  return (
    <View style={styles.navContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>Welcome to GoodUncle!</Text>
        <Text style={styles.body}>
          We believe in food that’s good and good for you. We start by sourcing
          high quality, local ingredients, then create well-balanced meals that
          are perfect for everyday eating. Invented in our brains, crafted in
          our kitchens, transported on our vans, consumed by your mouths. No
          matter what you’re craving, Good Uncle delivers.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Sign In"
          onPress={() => props.navigation.navigate("SignInScreen")}
          style={styles.button}
        ></Button>
        <Button
          title="Sign Up"
          onPress={() => props.navigation.navigate("SignUpScreen")}
          style={styles.button}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    justifyContent: "space-around",
    padding: 10,
    marginHorizontal: 20
    // lineHeight: 200
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30
  },
  body: {
    fontSize: 15,
    lineHeight: 20
  },
  textContainer: {
    flex: 2,
    marginTop: 80
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "space-around"
  },
  button: {
    marginTop: 10
  }
});
