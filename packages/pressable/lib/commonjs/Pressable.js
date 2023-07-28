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
var Pressable_exports = {};
__export(Pressable_exports, {
  default: () => Pressable_default
});
module.exports = __toCommonJS(Pressable_exports);
var import_focus = require("@react-native-aria/focus");
var import_react = __toESM(require("react"));
var import_interactions = require("@react-native-aria/interactions");
var import_utils = require("@crossed/utils");
function Pressable(StyledPressable) {
  return (0, import_react.forwardRef)(
    ({
      children,
      ...props
    }, ref) => {
      const { focusProps: focusRingProps, isFocusVisible } = (0, import_focus.useFocusRing)();
      const { pressProps, isPressed } = (0, import_interactions.usePress)({
        isDisabled: props.disabled ?? void 0
      });
      const { isFocused, focusProps } = (0, import_focus.useFocus)();
      const { isHovered, hoverProps } = (0, import_interactions.useHover)();
      return /* @__PURE__ */ import_react.default.createElement(
        StyledPressable,
        {
          ref,
          states: {
            hover: isHovered,
            focus: isFocused,
            active: isPressed,
            disabled: props.disabled,
            focusVisible: isFocusVisible
          },
          ...props,
          onPressIn: (0, import_utils.composeEventHandlers)(
            props == null ? void 0 : props.onPressIn,
            pressProps.onPressIn
          ),
          onPressOut: (0, import_utils.composeEventHandlers)(
            props == null ? void 0 : props.onPressOut,
            pressProps.onPressOut
          ),
          onHoverIn: (0, import_utils.composeEventHandlers)(
            props == null ? void 0 : props.onHoverIn,
            hoverProps.onHoverIn
          ),
          onHoverOut: (0, import_utils.composeEventHandlers)(
            props == null ? void 0 : props.onHoverOut,
            hoverProps.onHoverOut
          ),
          onFocus: (0, import_utils.composeEventHandlers)(
            (0, import_utils.composeEventHandlers)(props == null ? void 0 : props.onFocus, focusProps.onFocus),
            focusRingProps.onFocus
          ),
          onBlur: (0, import_utils.composeEventHandlers)(
            (0, import_utils.composeEventHandlers)(props == null ? void 0 : props.onBlur, focusProps.onBlur),
            focusRingProps.onBlur
          )
        },
        typeof children === "function" ? children({
          hovered: isHovered,
          focused: isFocused,
          pressed: isPressed,
          disabled: props.disabled ?? void 0,
          focusVisible: isFocusVisible
        }) : children
      );
    }
  );
}
var Pressable_default = Pressable;
//# sourceMappingURL=Pressable.js.map
