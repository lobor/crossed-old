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
var Fab_exports = {};
__export(Fab_exports, {
  default: () => Fab_default
});
module.exports = __toCommonJS(Fab_exports);
var import_react = __toESM(require("react"));
var import_interactions = require("@react-native-aria/interactions");
var import_focus = require("@react-native-aria/focus");
var import_utils = require("@crossed/utils");
function Fab(StyledFab) {
  return (0, import_react.forwardRef)(
    ({
      children,
      isDisabled,
      isHovered: isHoveredProp,
      isPressed: isPressedProp,
      isFocused: isFocusedProp,
      isFocusVisible: isFocusVisibleProp,
      ...props
    }, ref) => {
      const { isFocusVisible, focusProps: focusRingProps } = (0, import_focus.useFocusRing)();
      const { pressProps, isPressed } = (0, import_interactions.usePress)({ isDisabled });
      const { isFocused, focusProps } = (0, import_focus.useFocus)();
      const { isHovered, hoverProps } = (0, import_interactions.useHover)();
      return /* @__PURE__ */ import_react.default.createElement(
        StyledFab,
        {
          ref,
          accessibilityRole: (props == null ? void 0 : props.accessibilityRole) || "button",
          states: {
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            active: isPressedProp || isPressed,
            disabled: isDisabled,
            focusVisible: isFocusVisibleProp || isFocusVisible
          },
          disabled: isDisabled,
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
        children
      );
    }
  );
}
var Fab_default = Fab;
//# sourceMappingURL=Fab.js.map
