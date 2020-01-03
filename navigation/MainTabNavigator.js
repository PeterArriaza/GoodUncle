import React from "react";
import { Platform, TouchableOpacity, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { withNavigation } from "react-navigation";
// import Icon from "@expo/vector-icons/Ionicons";
import TabBarIcon from "../components/TabBarIcon";
import MenuScreen from "../screens/MenuScreen";
import CartScreen from "../screens/CartScreen";
import MenuItemDetailScreen from "../screens/MenuItemDetailScreen";
import { connect } from "react-redux";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const MenuStack = createStackNavigator(
  {
    Menu: MenuScreen,
    MenuItemDetail: MenuItemDetailScreen
  },
  config
);

MenuStack.navigationOptions = {
  tabBarLabel: "Menu",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-list` : "md-list"}
    />
  )
};

MenuStack.path = "";

const CartStack = createStackNavigator(
  {
    Cart: CartScreen
  },
  config
);

const TabBarIconCart = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 5,
        marginTop: 7
      }}
    >
      <TabBarIcon
        focused={props.focused}
        name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
      />
      <View
        style={{
          position: "absolute",
          top: 2,
          left: 30,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontSize: 15, padding: 5 }}>
          ({props.cartItems.length}){" "}
        </Text>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems
  };
};

const TabBarIconCartStateful = connect(mapStateToProps)(TabBarIconCart);

CartStack.navigationOptions = {
  tabBarLabel: "Cart",
  tabBarIcon: ({ focused }) => <TabBarIconCartStateful focused={focused} />
};

CartStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    MenuStack,
    CartStack
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
