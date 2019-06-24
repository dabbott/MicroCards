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
  const { title } = props;

  return (
    <CustomTouchable onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/spain.png")}
          />
        </View>
        <Spacer size={10} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </CustomTouchable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 88,
    height: 140,
    padding: 4
  },
  imageContainer: {
    flex: 1,
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
