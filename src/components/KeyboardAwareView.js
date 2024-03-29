import React from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Keyboard,
  Platform,
  LayoutAnimation,
  UIManager
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const INITIAL_ANIMATION_DURATION = 250;
const INITIAL_EASING = LayoutAnimation.Types.easeInEaseOut;

export default class KeyboardAwareView extends React.Component {
  state = {
    layout: { x: 0, y: 0, width: 0, height: 0 },
    keyboardHeight: 0,
    keyboardVisible: false,
    keyboardWillShow: false,
    keyboardWillHide: false,
    keyboardAnimationDuration: INITIAL_ANIMATION_DURATION,
    keyboardEasing: INITIAL_EASING
  };

  handleLayout = e => {
    this.setState({ layout: e.nativeEvent.layout });
  };

  subscriptions = [];

  componentDidMount() {
    if (Platform.OS === "ios") {
      this.subscriptions = [
        Keyboard.addListener("keyboardDidShow", this.handleDidShow),
        Keyboard.addListener("keyboardDidHide", this.handleDidHide),
        Keyboard.addListener("keyboardWillShow", this.handleWillShow),
        Keyboard.addListener("keyboardWillHide", this.handleWillHide)
      ];
    } else {
      this.subscriptions = [
        Keyboard.addListener("keyboardDidShow", this.handleDidShow),
        Keyboard.addListener("keyboardDidHide", this.handleDidHide)
      ];
    }
  }

  componentDidUpdate() {
    const { keyboardAnimationDuration, keyboardEasing } = this.state;

    const config = LayoutAnimation.create(
      keyboardAnimationDuration,
      keyboardEasing,
      LayoutAnimation.Properties.opacity
    );

    LayoutAnimation.configureNext(config);
  }

  componentWillUnmount() {
    this.subscriptions.forEach(subscription => subscription.remove());
  }

  handleWillShow = event => {
    this.setState({
      keyboardWillShow: true
    });
    this.measure(event);
  };

  handleDidShow = event => {
    this.setState({
      keyboardVisible: true,
      keyboardWillShow: false
    });
    this.measure(event);
  };

  handleWillHide = event => {
    this.setState({
      keyboardWillHide: true
    });
    this.measure(event);
  };

  handleDidHide = event => {
    this.setState({
      keyboardWillHide: false,
      keyboardVisible: false
    });
  };

  measure = event => {
    const {
      endCoordinates: { height },
      duration = INITIAL_ANIMATION_DURATION,
      easing = INITIAL_EASING
    } = event;

    this.setState({
      keyboardHeight: height,
      keyboardAnimationDuration: duration,
      keyboardEasing: easing
    });
  };

  render() {
    const { children, style, contentContainerStyle } = this.props;
    const {
      layout,
      keyboardHeight,
      keyboardVisible,
      keyboardWillShow,
      keyboardWillHide
    } = this.state;

    const contentStyle = {
      height:
        layout.height -
        (keyboardWillShow || (keyboardVisible && !keyboardWillHide)
          ? Platform.OS === "ios"
            ? keyboardHeight
            : 0
          : 0)
    };

    console.log(layout.height, keyboardHeight);

    return (
      <View style={style} onLayout={this.handleLayout}>
        {layout.height > 0 && (
          <View style={[contentContainerStyle, contentStyle]}>{children}</View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
