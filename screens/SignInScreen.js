import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function SignInScreen(props) {
  return (
    <View style={styles.navContainer}>
      <Button
        title="Preview Menu"
        onPress={() => props.navigation.navigate("Main")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    alignItems: "center",
    marginHorizontal: 50
  }
});
