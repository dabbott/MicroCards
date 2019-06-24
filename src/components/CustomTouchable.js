import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

export default function CustomTouchable(props) {
  const { onPress, ...rest } = props;

  return Platform.select({
    android: (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={onPress}
      >
        <View {...rest} />
      </TouchableNativeFeedback>
    ),
    default: <TouchableOpacity onPress={onPress} {...rest} />
  });
}
