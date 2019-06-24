import React from "react";
import { View } from "react-native";
import DeckCatalog from "../components/DeckCatalog";
import CustomTouchable from "../components/CustomTouchable";

export default class DeckScreen extends React.Component {
  static navigationOptions = ({
    screenProps,
    navigation,
    navigationOptions
  }) => ({
    title: "Test"
  });

  handlePressDeck = deckId => {
    const {
      navigation,
      screenProps: { data }
    } = this.props;

    const deck = data.decks.find(deck => deck.id === deckId);

    navigation.navigate("FlashcardScreen", {
      color: deck.color,
      title: deck.title
    });
  };

  render() {
    const {
      navigation,
      screenProps: { data }
    } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <DeckCatalog onPress={this.handlePressDeck} data={data} />
        <CustomTouchable
          style={{
            position: "absolute",
            right: 30,
            bottom: 30,
            width: 54,
            height: 54,
            backgroundColor: "steelblue",
            borderRadius: 54 / 2
          }}
          onPress={() => {
            navigation.navigate("FlashcardScreen");
          }}
        />
      </View>
    );
  }
}
