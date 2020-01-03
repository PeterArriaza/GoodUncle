import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import TabBarIcon from "../components/TabBarIcon";
import {
  incrementItemQuantity,
  decrementItemQuantity,
  removeFromCart
} from "../actions";

export class CartScreen extends React.Component {
  render() {
    console.log(this.props.total);
    return (
      <View style={styles.container}>
        {this.props.cartItems.length > 0 ? (
          <View style={styles.cartListContainer}>
            <FlatList
              data={this.props.cartItems}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={styles.cartItemRow}>
                  <View style={styles.cartItemName}>
                    <Text>{`${item.name}`}</Text>
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => this.props.dispatch(removeFromCart(item))}
                    >
                      <TabBarIcon
                        name={Platform.OS === "ios" ? "ios-trash" : "md-trash"}
                      />
                    </TouchableOpacity>
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

                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() =>
                        this.props.dispatch(decrementItemQuantity(item))
                      }
                    >
                      <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            ></FlatList>
            <View style={styles.totalDisplay}>
              <Text style={styles.totalText}>Total: ${this.props.total}</Text>
            </View>
          </View>
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
    cartItems: state.cartItems,
    total: state.total
  };
};

export default connect(mapStateToProps)(CartScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
    marginBottom: 40,
    justifyContent: "space-between"
  },
  cartItemRow: {
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 0.5
    // borderBottomColor: "black"
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
  },
  deleteButton: {
    marginTop: 5,
    padding: 5,
    width: 35,
    borderWidth: 1,
    borderColor: "#969696",
    alignItems: "center",
    justifyContent: "center"
  },
  totalDisplay: {
    marginHorizontal: 5,
    alignItems: "center"
  },
  totalText: {
    fontSize: 15,
    fontWeight: "bold"
  }
});
