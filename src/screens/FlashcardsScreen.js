import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DeckCatalog from "../components/DeckCatalog";
import CustomTouchable from "../components/CustomTouchable";
import HeaderButtons, {
  HeaderButton,
  Item
} from "react-navigation-header-buttons";
import FlipCard from "../components/FlipCard";

export default class FlashcardsScreen extends React.Component {
  static navigationOptions = ({
    screenProps,
    navigation,
    navigationOptions
  }) => ({
    title: navigation.getParam("title"),
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: navigation.getParam("color")
    },
    headerLeft: (
      <HeaderButtons>
        <Item
          title="Back"
          color="white"
          onPress={() => {
            navigation.pop();
          }}
        />
      </HeaderButtons>
    )
  });

  state = {
    flipped: false
  };

  handleCardPress = () => {
    this.setState({ flipped: !this.state.flipped });
  };

  render() {
    const {
      navigation,
      screenProps: { data }
    } = this.props;

    const { flipped } = this.state;

    return (
      <View style={{ flex: 1, padding: 20 }}>
        <FlipCard
          flipped={flipped}
          onPress={this.handleCardPress}
          renderFront={() => (
            <View style={styles.card}>
              <Text style={{ fontSize: 48 }}>Hello</Text>
            </View>
          )}
          renderBack={() => (
            <View style={styles.card}>
              <Text style={{ fontSize: 48 }}>Hola</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});
