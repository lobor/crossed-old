"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ModalCloseButton_exports = {};
__export(ModalCloseButton_exports, {
  default: () => ModalCloseButton_default
});
module.exports = __toCommonJS(ModalCloseButton_exports);
var import_react = __toESM(require("react"));
var import_Context = require("./Context");
var import_interactions = require("@react-native-aria/interactions");
var import_utils = require("@crossed/utils");
var import_focus = require("@react-native-aria/focus");
const ModalCloseButton = (StyledModalCloseButton) => (0, import_react.forwardRef)((props, ref) => {
  const { hoverProps, isHovered } = (0, import_interactions.useHover)();
  const { pressProps, isPressed } = (0, import_interactions.usePress)({
    isDisabled: props.isDisabled
  });
  const { focusProps, isFocused } = (0, import_focus.useFocus)();
  const { isFocusVisible, focusProps: focusRingProps } = (0, import_focus.useFocusRing)();
  const {
    // _icon,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    children,
    ...resolvedProps
  } = props;
  const { handleClose } = import_react.default.useContext(import_Context.ModalContext);
  return /* @__PURE__ */ import_react.default.createElement(
    StyledModalCloseButton,
    {
      accessibilityRole: "button",
      ref,
      onPressIn: (0, import_utils.composeEventHandlers)(onPressIn, pressProps.onPressIn),
      onPressOut: (0, import_utils.composeEventHandlers)(onPressOut, pressProps.onPressOut),
      onHoverIn: (0, import_utils.composeEventHandlers)(onHoverIn, hoverProps.onHoverIn),
      onHoverOut: (0, import_utils.composeEventHandlers)(onHoverOut, hoverProps.onHoverOut),
      onFocus: (0, import_utils.composeEventHandlers)(
        (0, import_utils.composeEventHandlers)(onFocus, focusProps.onFocus),
        focusRingProps.onFocus
      ),
      onBlur: (0, import_utils.composeEventHandlers)(
        (0, import_utils.composeEventHandlers)(onBlur, focusProps.onBlur),
        focusRingProps.onBlur
      ),
      onPress: handleClose,
      states: {
        hover: isHovered,
        focus: isFocused,
        active: isPressed,
        focusVisible: isFocusVisible
      },
      ...resolvedProps
    },
    children
  );
});
var ModalCloseButton_default = ModalCloseButton;
//# sourceMappingURL=ModalCloseButton.js.map
