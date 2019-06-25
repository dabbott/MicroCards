import React from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import textStyles from "../textStyles";
import DeckPreview from "./DeckPreview";
import DeckList from "./DeckList";
// import PieChart from "./PieChart";

const keyExtractor = item => item.id;

const ItemSeparatorComponent = () => {
  return (
    <View>
      <Spacer size={10} />
      <View style={{ height: 1, backgroundColor: "lightgrey" }} />
      <Spacer size={10} />
    </View>
  );
};

const ListHeaderComponent = () => {
  return (
    <View
      style={{
        height: 300,
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {/* <PieChart /> */}
    </View>
  );
};

export default class DeckCatalog extends React.Component {
  renderItem = ({ item }) => {
    const { data, onPress } = this.props;

    const { deckIds } = item;

    const decks = data.decks.filter(deck => deckIds.includes(deck.id));

    return <DeckList onPress={onPress} decks={decks} />;
  };

  render() {
    const { data } = this.props;

    return (
      <FlatList
        style={styles.list}
        data={data.catalogs}
        renderItem={this.renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListHeaderComponent={ListHeaderComponent}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "white"
  }
});
