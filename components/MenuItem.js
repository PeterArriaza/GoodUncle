import React from "react";
import { View, Text } from "react-native";

export default function MenuItem(props) {
  return (
    <View>
      <View>
        <Text>{`${props.item.name}`}</Text>
      </View>
      <View>
        <Text>{`${props.options[0].price}`}</Text>
      </View>
    </View>
  );
}
