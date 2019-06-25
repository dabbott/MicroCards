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
  const { onPress, hitSlop, ...rest } = props;

  return Platform.select({
    android: (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        hitSlop={hitSlop}
        onPress={onPress}
      >
        <View {...rest} />
      </TouchableNativeFeedback>
    ),
    default: <TouchableOpacity hitSlop={hitSlop} onPress={onPress} {...rest} />
  });
}
