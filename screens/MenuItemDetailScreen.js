import React from "react";
import { View, Text } from "react-native";
import { render } from "react-dom";

export default class MenuItemDetailScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>
          The name is{}
          {JSON.stringify(navigation.getParam("name", "something went wrong!"))}
          .
        </Text>
      </View>
    );
  }
}
