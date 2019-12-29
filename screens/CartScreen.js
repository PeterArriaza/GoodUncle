import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { FlatList } from "react-native-gesture-handler";

export function CartScreen(props) {
  console.log(props);
  return (
    <View style={styles.container}>
      {props.cartItems.length > 0 ? (
        <FlatList
          data={props.cartItems}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.cartItemRow}>
              <Text>{`${item.name}`}</Text>
            </View>
          )}
        ></FlatList>
      ) : (
        <Text>Your cart is empty :(</Text>
      )}
    </View>
  );
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
