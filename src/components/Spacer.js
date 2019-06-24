import React from "react";
import { View } from "react-native";
import textStyles from "../textStyles";

export default function Spacer({ size, horizontal }) {
  const style = {
    width: horizontal ? size : 0,
    height: horizontal ? 0 : size
  };

  return <View style={style} />;
}
