import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class MenuItemDetailScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.detailContainer}>
        <Text style={styles.itemName}>
          {}
          {JSON.parse(
            JSON.stringify(navigation.getParam("name", "something went wrong!"))
          )}
        </Text>
        <Text style={styles.itemPrice}>
          ${}
          {(
            JSON.parse(
              JSON.stringify(navigation.getParam("price", "$8888.88"))
            ) / 100
          ).toFixed(2)}
        </Text>
        <Text style={styles.itemPrice}>
          Description: {}
          {JSON.parse(
            JSON.stringify(
              navigation.getParam("ingredients", "made with love & care")
            )
          )}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailContainer: {
    padding: 10
  },
  itemName: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 5
  },
  itemPrice: {
    fontSize: 20,
    margin: 5
  }
});
