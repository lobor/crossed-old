import React from "react";
import { useEffect } from "react";
import { BackHandler } from "react-native";
let keyboardDismissHandlers = [];
const keyboardDismissHandlerManager = {
  push: (handler) => {
    keyboardDismissHandlers.push(handler);
    return () => {
      keyboardDismissHandlers = keyboardDismissHandlers.filter(
        (h) => h !== handler
      );
    };
  },
  length: () => keyboardDismissHandlers.length,
  pop: () => {
    return keyboardDismissHandlers.pop();
  }
};
const useKeyboardDismissable = ({ enabled, callback }) => {
  React.useEffect(() => {
    let cleanupFn = () => {
    };
    if (enabled) {
      cleanupFn = keyboardDismissHandlerManager.push(callback);
    } else {
      cleanupFn();
    }
    return () => {
      cleanupFn();
    };
  }, [enabled, callback]);
  useBackHandler({ enabled, callback });
};
function useBackHandler({ enabled, callback }) {
  useEffect(() => {
    let backHandler = () => {
      callback();
      return true;
    };
    if (enabled) {
      BackHandler.addEventListener("hardwareBackPress", backHandler);
    } else {
      BackHandler.removeEventListener("hardwareBackPress", backHandler);
    }
    return () => BackHandler.removeEventListener("hardwareBackPress", backHandler);
  }, [enabled, callback]);
}
export {
  keyboardDismissHandlerManager,
  useBackHandler,
  useKeyboardDismissable
};
//# sourceMappingURL=useKeyboardDismisssable.js.map
