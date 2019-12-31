import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";

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
                <Text>{`${item.name}`}</Text>
                <Text>{`Quantity: ${item.quantity}`}</Text>
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
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 20
  }
});
