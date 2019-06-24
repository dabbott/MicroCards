import React from "react";
import { View, Text, Animated, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default class FlipCard extends React.Component {
  rotation = new Animated.Value(0);

  componentDidUpdate(prevProps) {
    if (this.props.flipped !== prevProps.flipped) {
      Animated.spring(this.rotation, {
        toValue: this.props.flipped ? 180 : 0,
        tension: 7,
        friction: 12
      }).start();
    }
  }

  render() {
    const { style, renderFront, renderBack, onPress } = this.props;

    const frontStyle = {
      transform: [
        {
          rotateY: this.rotation.interpolate({
            inputRange: [0, 180],
            outputRange: ["0deg", "180deg"]
          })
        }
      ]
    };

    const backStyle = {
      transform: [
        {
          rotateY: this.rotation.interpolate({
            inputRange: [0, 180],
            outputRange: ["180deg", "0deg"]
          })
        }
      ]
    };

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={style}>
          <Animated.View style={[styles.front, frontStyle]}>
            {renderFront()}
          </Animated.View>
          <Animated.View style={[styles.back, backStyle]}>
            {renderBack()}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  front: {
    backfaceVisibility: "hidden"
  },
  back: {
    backfaceVisibility: "hidden",
    ...StyleSheet.absoluteFillObject
  }
});
