import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  FlatList,
  SafeAreaView
} from "react-native";
import MenuItem from "../components/MenuItem";
import MenuItemDetailScreen from "../screens/MenuItemDetailScreen";
import { render } from "react-dom";

export default class MenuScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getMenu = async () => {
    const response = await fetch(
      "https://s3.amazonaws.com/staginggooduncledigests/products_istcki0x000h28d97a9rv9jp.json"
    );
    const json = await response.json();
    this.setState({ data: json.digestData.mains });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.navContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate("Auth")}
            >
              <Text>Sign Out</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.navContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.getMenu()}
            >
              <Text>Get Menu</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <MenuItem
                item={item}
                options={item.productOptions}
                navigation={this.props.navigation}
              />
            )}
          ></FlatList>
        </View>
      </SafeAreaView>
    );
  }
}

MenuScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30
  },

  contentContainer: {},

  navContainer: {
    alignItems: "center"
  },

  button: {
    backgroundColor: "rgba(17, 242, 21, .8)",
    padding: 10,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  }
});
