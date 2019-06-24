import React from "react";
import { View } from "react-native";
import DeckCatalog from "../components/DeckCatalog";
import CustomTouchable from "../components/CustomTouchable";
import HeaderButtons, {
  HeaderButton,
  Item
} from "react-navigation-header-buttons";

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

  render() {
    const {
      navigation,
      screenProps: { data }
    } = this.props;

    return <View style={{ flex: 1 }} />;
  }
}
