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
  BackHandler,
  AsyncStorage
} from "react-native";
import DeckPreview from "./src/components/DeckPreview";
import DeckList from "./src/components/DeckList";
import Navigator from "./src/Navigator";

const ASYNC_STORAGE_KEY = "APP_DATA";

export default class App extends Component {
  state = {
    data: {}
  };

  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem(ASYNC_STORAGE_KEY);
      if (value !== null) {
        this.setState({ data: JSON.parse(value) });
        return;
      }
    } catch (error) {
      // Error retrieving data
    }

    const promises = [
      fetch("http://localhost:3000/catalogs").then(result => result.json()),
      fetch("http://localhost:3000/decks").then(result => result.json()),
      fetch("http://localhost:3000/cards").then(result => result.json())
    ];

    const [catalogsJson, decksJson, cardsJson] = await Promise.all(promises);

    const data = {
      catalogs: catalogsJson,
      decks: decksJson,
      cards: cardsJson
    };

    this.setState({
      data: data
    });

    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      // Error saving data
    }
  }

  render() {
    const { data } = this.state;

    return <Navigator screenProps={{ data }} />;
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
