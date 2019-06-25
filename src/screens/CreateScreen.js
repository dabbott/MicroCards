import React from "react";
import {
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import DeckCatalog from "../components/DeckCatalog";
import CustomTouchable from "../components/CustomTouchable";
import textStyles from "../textStyles";
import Spacer from "../components/Spacer";
import { Header } from "react-navigation";
import KeyboardAwareView from "../components/KeyboardAwareView";

export default class CreateScreen extends React.Component {
  static navigationOptions = ({
    screenProps,
    navigation,
    navigationOptions
  }) => ({
    title: "Create new flashcard"
  });

  state = {
    frontText: "",
    backText: ""
  };

  render() {
    const {
      navigation,
      screenProps: { data }
    } = this.props;

    const { frontText, backText } = this.state;

    const height = Dimensions.get("window").height;

    return (
      <KeyboardAwareView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: "grey" }}>
          <TextInput
            value={frontText}
            onChangeText={value => {
              this.setState({ frontText: value });
            }}
            placeholder="Front text"
            placeholderTextColor="lightgrey"
            style={{ backgroundColor: "white", fontSize: 24, padding: 24 }}
          />
          <Spacer size={10} />
          <TextInput
            value={backText}
            onChangeText={value => {
              this.setState({ backText: value });
            }}
            placeholder="Back text"
            placeholderTextColor="lightgrey"
            style={{ backgroundColor: "white", fontSize: 24, padding: 24 }}
          />
        </ScrollView>
      </KeyboardAwareView>
    );
  }
}
