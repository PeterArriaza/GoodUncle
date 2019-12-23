import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

export default function SignInScreen(props) {
  return (
    <View style={styles.navContainer}>
      {/* <View style={styles.landingText}> */}
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Welcome to GoodUncle!
      </Text>
      <Text style={{ fontSize: 15 }}>
        We believe in food that’s good and good for you. We start by sourcing
        high quality, local ingredients, then create well-balanced meals that
        are perfect for everyday eating. Invented in our brains, crafted in our
        kitchens, transported on our vans, consumed by your mouths. No matter
        what you’re craving, Good Uncle delivers.
      </Text>
      {/* </View> */}
      <Button
        title="Preview Menu"
        onPress={() => props.navigation.navigate("Main")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    justifyContent: "space-around",
    padding: 10,
    marginHorizontal: 50
    // justifyItems: "center"
  }
});
