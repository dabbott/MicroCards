import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableNativeFeedback
} from "react-native";
import Spacer from "./Spacer";
import textStyles from "../textStyles";
import shadows from "../shadows";
import CustomTouchable from "./CustomTouchable";

export default function DeckPreview(props) {
  const { title, color, thumbnail, onPress } = props;

  const imageBackgroundStyle = {
    backgroundColor: color
  };

  return (
    <CustomTouchable onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.imageContainer, imageBackgroundStyle]}>
          <Image style={styles.image} source={{ uri: thumbnail }} />
        </View>
        <Spacer size={10} />
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
      </View>
    </CustomTouchable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 88,
    padding: 4
  },
  imageContainer: {
    height: 120,
    ...shadows.medium,
    overflow: "visible",
    borderRadius: 10,
    backgroundColor: "whitesmoke"
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    width: null
  },
  title: {
    ...textStyles.label
  }
});
