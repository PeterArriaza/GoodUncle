import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function MenuItem(props) {
  return (
    <TouchableOpacity
      style={styles.menuRow}
      onPress={() =>
        props.navigation.navigate("MenuItemDetail", {
          name: props.item.name,
          price: props.options[0].price,
          ingredients: props.item.ingredients
        })
      }
    >
      <View>
        <Text>{`${props.item.name}`}</Text>
      </View>
      <View>
        <Text>{`${props.options[0].price}`}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 20,
    backgroundColor: "lightgray"
  }
});
