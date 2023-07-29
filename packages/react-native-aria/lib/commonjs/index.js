"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  keyboardDismissHandlerManager: () => import_useKeyboardDismisssable.keyboardDismissHandlerManager,
  useBackHandler: () => import_useKeyboardDismisssable.useBackHandler,
  useFocus: () => useFocus,
  useHover: () => useHover,
  useIsPressed: () => useIsPressed,
  useKeyboardDismissable: () => import_useKeyboardDismisssable.useKeyboardDismissable,
  usePressed: () => usePressed
});
module.exports = __toCommonJS(src_exports);
var import_react = require("react");
var import_react_native = require("react-native");
var import_useKeyboardDismisssable = require("./useKeyboardDismisssable");
const useHover = () => {
  const [isHovered, setHovered] = (0, import_react.useState)(false);
  return {
    hoverProps: {
      onHoverIn: () => setHovered(true),
      onHoverOut: () => setHovered(false)
    },
    isHovered
  };
};
const useFocus = () => {
  const [isFocused, setFocused] = (0, import_react.useState)(false);
  return {
    focusProps: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false)
    },
    isFocused
  };
};
const useIsPressed = () => {
  const [isPressed, setIsPressed] = (0, import_react.useState)(false);
  return {
    pressableProps: {
      onPressIn: () => setIsPressed(true),
      onPressOut: () => setIsPressed(false)
    },
    isPressed
  };
};
const usePressed = (onPressIn, onPressOut) => {
  if (import_react_native.Platform.OS === "web") {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  keyboardDismissHandlerManager,
  useBackHandler,
  useFocus,
  useHover,
  useIsPressed,
  useKeyboardDismissable,
  usePressed
});
//# sourceMappingURL=index.js.map
