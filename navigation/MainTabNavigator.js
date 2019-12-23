import React from "react";
import { Platform, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "@expo/vector-icons/Ionicons";
import TabBarIcon from "../components/TabBarIcon";
import MenuScreen from "../screens/MenuScreen";
import CartScreen from "../screens/CartScreen";
import MenuItemDetailScreen from "../screens/MenuItemDetailScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const MenuStack = createStackNavigator(
  {
    Menu: MenuScreen,
    MenuItemDetail: {
      screen: MenuItemDetailScreen,
      navigationOptions: {
        headerRight: (
          <TouchableOpacity
            style={{
              marginRight: 20,
              backgroundColor: "rgba(17, 242, 21, .8)",
              padding: 10
            }}
          >
            <Text>Add to Cart</Text>
          </TouchableOpacity>
          // <Icon
          //   style={{ paddingRight: 20 }}
          //   name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
          //   size={20}
          // ></Icon>
        )
      }
    }
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

CartStack.navigationOptions = {
  tabBarLabel: "Cart",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
    />
  )
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
