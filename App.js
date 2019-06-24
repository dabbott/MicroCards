/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  BackHandler
} from "react-native";
import DeckPreview from "./src/components/DeckPreview";
import DeckList from "./src/components/DeckList";
import Navigator from "./src/Navigator";

import data from "./db.json";

const instructions = Platform.select({
  ios: "Hello! Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const shouldShowBorder = true;

    const color = "pink";

    return <Navigator screenProps={{ data }} />;

    // return (
    //   <SafeAreaView style={styles.container}>
    //     <DeckList />
    //   </SafeAreaView>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // marginTop: 40
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
