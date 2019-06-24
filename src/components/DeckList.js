import React from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import textStyles from "../textStyles";
import DeckPreview from "./DeckPreview";

const keyExtractor = item => item.id;

const ItemSeparatorComponent = () => {
  return <Spacer horizontal size={8} />;
};

export default class DeckList extends React.Component {
  renderItem = ({ item }) => {
    const { onPress } = this.props;
    const { title, color, thumbnail } = item;

    return (
      <DeckPreview
        title={title}
        color={color}
        thumbnail={thumbnail}
        onPress={() => {
          onPress(item.id);
        }}
      />
    );
  };

  render() {
    const { decks } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>POPULAR LANGUAGES</Text>
        <FlatList
          style={styles.list}
          horizontal
          data={decks}
          renderItem={this.renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    paddingHorizontal: 20,
    ...textStyles.title
  },
  list: {
    flex: 1,
    padding: 16
  }
});
