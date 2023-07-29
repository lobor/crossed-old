import React, { forwardRef } from "react";
import { Animated } from "react-native";
const transformStylesMap = {
  translateY: true,
  translateX: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  rotate: true
};
const defaultStyles = {
  opacity: 1,
  translateY: 0,
  translateX: 0,
  scale: 1,
  scaleX: 1,
  scaleY: 1,
  rotate: "0deg"
};
const getAnimatedStyles = (animateValue) => (initial, to) => {
  var _a;
  const styles = {
    transform: []
  };
  for (let key in initial) {
    if (key === "transition") {
      continue;
    }
    if (key in transformStylesMap) {
      (_a = styles.transform) == null ? void 0 : _a.push({
        [key]: animateValue.interpolate({
          inputRange: [0, 1],
          outputRange: [initial[key], to[key]]
        })
      });
    } else {
      styles[key] = animateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [initial[key], to[key]]
      });
    }
  }
  return styles;
};
const defaultTransitionConfig = {
  type: "timing",
  useNativeDriver: true,
  duration: 250,
  delay: 0
};
const Transition = forwardRef(
  ({
    children,
    onTransitionComplete,
    visible = false,
    initial,
    animate,
    exit,
    style,
    as,
    ...rest
  }, ref) => {
    const animateValue = React.useRef(new Animated.Value(0)).current;
    const Component = React.useMemo(() => {
      if (as) {
        return Animated.createAnimatedComponent(as);
      }
      return Animated.View;
    }, [as]);
    const [animationState, setAnimationState] = React.useState("");
    const prevVisible = React.useRef(visible);
    React.useEffect(() => {
      if (animationState === "entering" || animationState === "exiting") {
        const entryTransition = {
          ...defaultTransitionConfig,
          ...animate == null ? void 0 : animate.transition
        };
        const exitTransition = {
          ...defaultTransitionConfig,
          ...exit == null ? void 0 : exit.transition
        };
        const startAnimation = animationState === "entering" ? 1 : 0;
        const transition = startAnimation ? entryTransition : exitTransition;
        Animated.sequence([
          // @ts-ignore - delay is present in defaultTransitionConfig
          Animated.delay(transition.delay),
          //@ts-ignore
          Animated[transition.type ?? "timing"](animateValue, {
            toValue: startAnimation,
            useNativeDriver: true,
            ...transition
          })
        ]).start(() => {
          if (animationState === "entering") {
            setAnimationState("entered");
          } else if (animationState === "exiting") {
            setAnimationState("exited");
          }
        });
      }
      if (animationState === "exited") {
        onTransitionComplete && onTransitionComplete("exited");
      } else if (animationState === "entered") {
        onTransitionComplete && onTransitionComplete("entered");
      }
    }, [animationState, onTransitionComplete]);
    React.useEffect(() => {
      if (prevVisible.current !== visible && !visible) {
        setAnimationState("exiting");
      }
      if (visible) {
        setAnimationState("entering");
      }
      prevVisible.current = visible;
    }, [visible]);
    const initialState = animationState === "exited" && exit ? { ...defaultStyles, ...exit } : { ...defaultStyles, ...initial };
    const animateState = { ...defaultStyles, ...animate };
    const styles = React.useMemo(() => {
      return [
        getAnimatedStyles(animateValue)(
          initialState,
          animateState
        ),
        style
      ];
    }, [animateValue, initial, animate, style]);
    return /* @__PURE__ */ React.createElement(
      Component,
      {
        pointerEvents: !visible ? "none" : "box-none",
        style: [styles],
        ref,
        ...rest
      },
      children
    );
  }
);
export {
  Transition
};
//# sourceMappingURL=Transition.js.map
