import React from "react";
import { Text } from "react-native";

import { createAppContainer, createStackNavigator } from "react-navigation";
import DeckScreen from "./screens/DeckScreen";
import FlashcardsScreen from "./screens/FlashcardsScreen";

const Flashcards = createStackNavigator({
  FlashcardScreen: FlashcardsScreen
});

const Decks = createStackNavigator(
  {
    DeckScreen,
    Flashcards
  },
  {
    headerMode: "none",
    navigationOptions: {
      title: "Hello"
    }
  }
);

export default createAppContainer(Decks);
