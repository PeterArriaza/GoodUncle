import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { addToCart } from "../actions";

export function MenuItem(props) {
  const name = props.item.name;
  const price = (JSON.parse(props.options[0].price) / 100).toFixed(2);
  // console.log(props.total);
  return (
    <TouchableOpacity
      style={styles.menuRow}
      onPress={() =>
        props.navigation.navigate("MenuItemDetail", {
          name: name,
          price: price,
          ingredients: props.item.ingredients
        })
      }
    >
      <View>
        <Text>{`${name}`}</Text>
      </View>
      <View>
        <Text>{`$${price}`}</Text>
      </View>
    </TouchableOpacity>
  );
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addItemToCart: item => dispatch({ type: "ADD_TO_CART", payload: item })
//   };
// };

// export default connect(mapStateToProps)(MenuItem);
export default MenuItem;

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
