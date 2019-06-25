import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  PanResponder
} from "react-native";
import { Header } from "react-navigation";

export default class AnimationContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      annotations: [],
      layout: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
      }
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd
    });
  }

  render() {
    const { children } = this.props;
    const { annotations } = this.state;

    return (
      <View
        onLayout={e => {
          this.setState({ layout: e.nativeEvent.layout });
        }}
        // Put all panHandlers into the View's props
        {...this.panResponder.panHandlers}
      >
        {children}
        {annotations.map((annotation, index) => {
          const { x, y } = annotation;

          console.log(index, annotation, this.state.layout);

          return (
            <Text
              key={index}
              style={{
                position: "absolute",
                width: 20,
                height: 20,
                fontSize: 16
                // transform: [
                //   { translateX: this.state.layout.width * annotation.x },
                //   {
                //     translateY: this.state.layout.height * annotation.y
                //   }
                // ]
              }}
            >
              ⭐️
            </Text>
          );
        })}
      </View>
    );
  }

  // Should we become active when the user presses down on the square?
  handleStartShouldSetPanResponder = (e, gestureState) => {
    return true;
  };

  // We were granted responder status! Let's update the UI
  handlePanResponderGrant = (e, gestureState) => {
    // this.setState({ dragging: true });
  };

  // Every time the touch/mouse moves
  handlePanResponderMove = (e, gestureState) => {
    // Keep track of how far we've moved in total (dx and dy)
    // this.setState({
    //   offsetTop: gestureState.dy,
    //   offsetLeft: gestureState.dx
    // });
  };

  // When the touch/mouse is lifted
  handlePanResponderEnd = (e, gestureState) => {
    const { x0, y0, dx, dy } = gestureState;
    const {
      nativeEvent: { locationX, locationY }
    } = e;

    const x = locationX / this.state.layout.width;
    const y = locationY / this.state.layout.height;

    this.setState({
      annotations: [...this.state.annotations, { x, y }]
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  square: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 12
  }
});
