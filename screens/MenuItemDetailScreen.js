import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { addToCart } from "../actions";

export class MenuItemDetailScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    // console.log(navigation.state.params);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.detailContainer}>
          <Text style={styles.itemName}>
            {}
            {navigation.getParam("name", "whoops! something went wrong")}
          </Text>
          <Text style={styles.itemPrice}>
            ${}
            {navigation.getParam(
              "price",
              "less than the cost to fix this issue"
            )}
          </Text>
          <Text style={styles.itemPrice}>
            Description: {}
            {navigation.getParam("ingredients", "made with love & care")}
          </Text>
        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              this.props.dispatch(addToCart(navigation.state.params));
            }}
          >
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect()(MenuItemDetailScreen);

const styles = StyleSheet.create({
  detailContainer: {
    padding: 10,
    flex: 1
  },
  itemName: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 5
  },
  itemPrice: {
    fontSize: 20,
    margin: 5
  },
  addButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 30
  },
  addButton: {
    backgroundColor: "rgba(17, 242, 21, .8)",
    padding: 10,
    marginHorizontal: 20,
    alignItems: "center"
  }
});
