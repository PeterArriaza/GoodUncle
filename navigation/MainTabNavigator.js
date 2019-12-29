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
    MenuItemDetail: {
      screen: MenuItemDetailScreen
      // ,
      // navigationOptions: {
      //   headerRight: (
      //     <TouchableOpacity
      //       style={{
      //         marginRight: 20,
      //         backgroundColor: "rgba(17, 242, 21, .8)",
      //         padding: 10
      //       }}
      //       onPress={() => this.props.navigation.navigate("Cart")}
      //     >
      //       <Text>Add to Cart</Text>
      //     </TouchableOpacity>
      //   )
      // }
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

const TabBarIconCart = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 5,
        marginLeft: 40,
        marginTop: 7
      }}
    >
      <TabBarIcon
        focused={props.focused}
        name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
      />
      <Text style={{ fontSize: 15, padding: 5, marginLeft: 10 }}>
        ({props.cartItems.length}){" "}
      </Text>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state
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
