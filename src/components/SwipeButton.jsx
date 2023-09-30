import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const BUTTON_WIDTH = 300;
const BUTTON_HEIGHT = 70;
const BUTTON_PADDING = 8;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;

const H_WAVE_RANGE = SWIPEABLE_DIMENSIONS + 2 * BUTTON_PADDING;
const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

const SwipeButton = ({onToggle, navigation}) => {
  const [toggled, setToggled] = useState(false);
  const X = useSharedValue(0);
  const animatedGestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.completed = toggled;
    },
    onActive: (e, ctx) => {
      let newValue;

      if (ctx.completed) {
        newValue = H_SWIPE_RANGE + e.translationX;
      } else {
        newValue = e.translationX;
      }
      if (newValue >= 0 && newValue <= H_SWIPE_RANGE) {
        X.value = newValue;
      }
    },

    onEnd: () => {
      if (X.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
        X.value = withSpring(0, {
          damping: 15,
        });
        runOnJS(setToggled)(false);
      } else {
        X.value = withSpring(H_SWIPE_RANGE, {
          damping: 15,
        });
         runOnJS(navigation.navigate)('AuthScreen');
      }
    },
  });

  const InterpolateXInput = [0, H_SWIPE_RANGE];
  const AnimatedStyles = {
    swipeable: useAnimatedStyle(() => {
      return {
        transform: [{translateX: X.value}],
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          InterpolateXInput,
          [0.9, 0],
          Extrapolate.CLAMP,
        ),
        transform: [
          {
            translateX: interpolate(X.value, InterpolateXInput, [
              0,
              BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS,
              Extrapolate.CLAMP,
            ]),
          },
        ],
      };
    }),
    wave: useAnimatedStyle(() => {
      return {
        width: H_WAVE_RANGE + X.value,
        opacity: interpolate(X.value, InterpolateXInput, [0, 1]),
      };
    }),
  };
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.swipeCont}>
        <Animated.View
          style={[styles.wave, AnimatedStyles.wave]}></Animated.View>
        <PanGestureHandler onGestureEvent={animatedGestureHandler}>
          <Animated.View
            style={[
              styles.swipeable,
              AnimatedStyles.swipeable,
            ]}></Animated.View>
        </PanGestureHandler>
        <Animated.Text style={[styles.swipeText, AnimatedStyles.swipeText, styles.fontText]}>
          Get Started
        </Animated.Text>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  swipeCont: {
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    padding: BUTTON_PADDING,
    backgroundColor: '#ede0d4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BUTTON_HEIGHT,
    position: 'relative',

  },
  swipeable: {
    height: SWIPEABLE_DIMENSIONS,
    width: SWIPEABLE_DIMENSIONS,
    borderRadius: SWIPEABLE_DIMENSIONS,
    backgroundColor: '#9c6644',
    position: 'absolute',
    left: BUTTON_PADDING,
    zIndex: 3,
  },
  swipeText: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7f5539',
    zIndex: 2,
  },
  wave: {
    position: 'absolute',
    left: 0,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT,
  },
  fontText: {
    fontFamily: 'Poppins',
    fontSize: 21,
    fontWeight: '600',
  },
});

export default SwipeButton;
