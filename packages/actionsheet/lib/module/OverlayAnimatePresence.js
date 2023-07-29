import React, { forwardRef } from "react";
import { Animated } from "react-native";
import { ExitAnimationContext } from "@crossed/overlay";
const defaultTransitionConfig = {
  type: "timing",
  useNativeDriver: true,
  duration: 200,
  delay: 0
};
const OverlayAnimatePresence = forwardRef(
  ({ children, visible = false, AnimatePresence }, ref) => {
    const animateValue = React.useRef(new Animated.Value(0)).current;
    const [animationState, setAnimationState] = React.useState("");
    const prevVisible = React.useRef(visible);
    const { setExited } = React.useContext(ExitAnimationContext);
    React.useEffect(() => {
      if (animationState === "entering" || animationState === "exiting") {
        const startAnimation = animationState === "entering" ? 1 : 0;
        const transition = defaultTransitionConfig;
        if (AnimatePresence) {
          Animated.sequence([
            // @ts-ignore - delay is present in defaultTransitionConfig
            //@ts-ignore
            Animated[transition.type ?? "timing"](animateValue, {
              toValue: startAnimation,
              useNativeDriver: true
            })
          ]).start(() => {
            if (animationState === "entering") {
              setAnimationState("entered");
            } else if (animationState === "exiting") {
              setAnimationState("exited");
            }
          });
        }
      }
      if (animationState === "exited") {
        setExited(true);
      } else if (animationState === "entered") {
        setExited(false);
      }
    }, [animationState]);
    React.useEffect(() => {
      if (prevVisible.current !== visible && !visible) {
        setAnimationState("exiting");
      }
      if (visible) {
        setAnimationState("entering");
      }
      prevVisible.current = visible;
    }, [visible]);
    if (!AnimatePresence) {
      return children;
    }
    return /* @__PURE__ */ React.createElement(AnimatePresence, { ref }, prevVisible.current ? children : null);
  }
);
export {
  OverlayAnimatePresence
};
//# sourceMappingURL=OverlayAnimatePresence.js.map
