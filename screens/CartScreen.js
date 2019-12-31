import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import { incrementItemQuantity } from "../actions";

export class CartScreen extends React.Component {
  render() {
    console.log(this.props.cartItems);

    return (
      <View style={styles.container}>
        {this.props.cartItems.length > 0 ? (
          <FlatList
            data={this.props.cartItems}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.cartItemRow}>
                <View style={styles.cartItemName}>
                  <Text>{`${item.name}`}</Text>
                </View>
                <View style={styles.cartItemQuantity}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() =>
                      this.props.dispatch(incrementItemQuantity(item))
                    }
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>

                  <View style={styles.quantityTextContainer}>
                    <Text
                      style={styles.quantityText}
                    >{`${item.quantity}`}</Text>
                  </View>

                  <TouchableOpacity style={styles.quantityButton}>
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          ></FlatList>
        ) : (
          <View style={styles.cartItemRow}>
            <Text>Your cart is empty :(</Text>
          </View>
        )}
      </View>
    );
  }
}

CartScreen.navigationOptions = {
  title: "Cart"
};

const mapStateToProps = state => {
  return {
    cartItems: state
  };
};

export default connect(mapStateToProps)(CartScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  cartItemRow: {
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 20,
    alignItems: "center"
  },
  cartItemName: {
    flex: 2
  },
  cartItemQuantity: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  quantityTextContainer: {
    height: 35,
    backgroundColor: "rgba(17, 242, 21, .2)"
  },
  quantityText: {
    padding: 10,
    borderColor: "black"
  },
  quantityButton: {
    width: 35,
    height: 35,
    backgroundColor: "rgba(17, 242, 21, .8)",
    alignItems: "center",
    justifyContent: "center"
  },
  quantityButtonText: {
    fontSize: 15,
    fontWeight: "bold"
  }
});
