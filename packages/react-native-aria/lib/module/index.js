import { useState } from "react";
import { Platform } from "react-native";
const useHover = () => {
  const [isHovered, setHovered] = useState(false);
  return {
    hoverProps: {
      onHoverIn: () => setHovered(true),
      onHoverOut: () => setHovered(false)
    },
    isHovered
  };
};
const useFocus = () => {
  const [isFocused, setFocused] = useState(false);
  return {
    focusProps: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false)
    },
    isFocused
  };
};
const useIsPressed = () => {
  const [isPressed, setIsPressed] = useState(false);
  return {
    pressableProps: {
      onPressIn: () => setIsPressed(true),
      onPressOut: () => setIsPressed(false)
    },
    isPressed
  };
};
const usePressed = (onPressIn, onPressOut) => {
  if (Platform.OS === "web") {
    return {
      pressEvents: {
        onMouseDown: onPressIn,
        onMouseUp: onPressOut,
        onTouchStart: onPressIn,
        onTouchEnd: onPressOut
      }
    };
  }
  return {
    pressEvents: {
      onPressIn,
      onPressOut
    }
  };
};
import {
  keyboardDismissHandlerManager,
  useKeyboardDismissable,
  useBackHandler
} from "./useKeyboardDismisssable";
export {
  keyboardDismissHandlerManager,
  useBackHandler,
  useFocus,
  useHover,
  useIsPressed,
  useKeyboardDismissable,
  usePressed
};
//# sourceMappingURL=index.js.map
