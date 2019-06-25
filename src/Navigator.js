import React from "react";
import { Text } from "react-native";

import { createAppContainer, createStackNavigator } from "react-navigation";
import DeckScreen from "./screens/DeckScreen";
import FlashcardsScreen from "./screens/FlashcardsScreen";
import CreateScreen from "./screens/CreateScreen";

const Flashcards = createStackNavigator({
  FlashcardScreen: FlashcardsScreen
});

const CreateFlow = createStackNavigator({
  CreateScreen: CreateScreen
});

const Decks = createStackNavigator(
  {
    DeckScreen,
    Flashcards,
    CreateFlow
  },
  {
    mode: "modal",
    headerMode: "none",
    navigationOptions: {
      title: "Hello"
    }
  }
);

export default createAppContainer(Decks);
