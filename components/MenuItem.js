import React, { isValidElement } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function MenuItem(props) {
  const name = props.item.name;
  const price = (JSON.parse(props.options[0].price) / 100).toFixed(2);

  function isEven(n) {
    return n % 2 === 0;
  }

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
        <Text>{`${name}`}</Text>
      </View>
      <View>
        <Text>{`$ ${price}`}</Text>
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
    backgroundColor: "rgb(222,222,222)"
  }
});
