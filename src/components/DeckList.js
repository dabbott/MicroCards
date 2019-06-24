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
    return <DeckPreview title={item.id} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>POPULAR LANGUAGES</Text>
        <FlatList
          style={styles.list}
          horizontal
          data={[{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }]}
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
