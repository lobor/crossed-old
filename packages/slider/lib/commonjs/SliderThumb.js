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
var SliderThumb_exports = {};
__export(SliderThumb_exports, {
  default: () => SliderThumb_default
});
module.exports = __toCommonJS(SliderThumb_exports);
var import_react = __toESM(require("react"));
var import_react_native = require("react-native");
var import_slider = require("@react-native-aria/slider");
var import_visually_hidden = require("@react-aria/visually-hidden");
var import_Context = require("./Context");
var import_interactions = require("@react-native-aria/interactions");
var import_utils = require("@crossed/utils");
var import_focus = require("@react-native-aria/focus");
var import_utils2 = require("@crossed/utils");
function SliderThumb(StyledSliderThumb, StyledSliderThumbInteraction) {
  return (0, import_react.forwardRef)(
    ({
      children,
      scaleOnPressed = 1,
      style,
      ...props
    }, ref) => {
      var _a;
      const [thumbSize, setThumbSize] = import_react.default.useState({
        height: 0,
        width: 0
      });
      const _ref = import_react.default.useRef(null);
      const { isHovered } = (0, import_interactions.useHover)({}, _ref);
      const {
        state,
        trackLayout,
        orientation,
        isDisabled,
        isReversed,
        isPressed,
        setIsHovered,
        setIsPressed,
        setIsFocused,
        setIsFocusVisible
      } = import_react.default.useContext(import_Context.SliderContext);
      const inputRef = import_react.default.useRef(null);
      const { thumbProps, inputProps } = (0, import_slider.useSliderThumb)(
        {
          index: 0,
          trackLayout,
          inputRef,
          orientation
        },
        state
      );
      const { isFocusVisible, focusProps: focusRingProps } = (0, import_focus.useFocusRing)();
      const { isFocused, focusProps } = (0, import_focus.useFocus)();
      const thumbStyles = {
        bottom: isReversed ? orientation === "vertical" ? `${state.getThumbPercent(0) * 100}%` : void 0 : orientation === "vertical" ? `${state.getThumbPercent(0) * 100}%` : void 0,
        left: isReversed ? orientation !== "vertical" ? `${state.getThumbPercent(0) * 100}%` : void 0 : orientation !== "vertical" ? `${state.getThumbPercent(0) * 100}%` : void 0,
        transform: orientation === "vertical" ? [{ translateY: (thumbSize == null ? void 0 : thumbSize.height) / 2 }] : [{ translateX: -(thumbSize == null ? void 0 : thumbSize.height) / 2 }]
      };
      (_a = thumbStyles == null ? void 0 : thumbStyles.transform) == null ? void 0 : _a.push({
        scale: state.isThumbDragging(0) ? scaleOnPressed : 1
      });
      (0, import_react.useEffect)(() => {
        setIsPressed(state.isThumbDragging(0));
      }, [state, setIsPressed, isPressed]);
      (0, import_react.useEffect)(() => {
        setIsFocused(isFocused);
      }, [isFocused, setIsFocused]);
      (0, import_react.useEffect)(() => {
        setIsFocusVisible(isFocusVisible);
      }, [isFocusVisible, setIsFocusVisible]);
      (0, import_react.useEffect)(() => {
        setIsHovered(isHovered);
      }, [isHovered, setIsHovered]);
      return /* @__PURE__ */ import_react.default.createElement(
        StyledSliderThumb,
        {
          onLayout: (layout) => {
            var _a2, _b, _c, _d;
            setThumbSize({
              height: (_b = (_a2 = layout == null ? void 0 : layout.nativeEvent) == null ? void 0 : _a2.layout) == null ? void 0 : _b.height,
              width: (_d = (_c = layout == null ? void 0 : layout.nativeEvent) == null ? void 0 : _c.layout) == null ? void 0 : _d.width
            });
          },
          states: {
            hover: isHovered,
            focus: isFocused,
            active: isPressed,
            disabled: isDisabled,
            focusVisible: isFocusVisible
          },
          disabled: isDisabled,
          ...thumbProps,
          style: {
            ...style,
            ...thumbStyles
          },
          onFocus: (0, import_utils2.composeEventHandlers)(
            (0, import_utils2.composeEventHandlers)(props == null ? void 0 : props.onFocus, focusProps.onFocus),
            focusRingProps.onFocus
          ),
          onBlur: (0, import_utils2.composeEventHandlers)(
            (0, import_utils2.composeEventHandlers)(props == null ? void 0 : props.onBlur, focusProps.onBlur),
            focusRingProps.onBlur
          ),
          ref: (0, import_utils.mergeRefs)([_ref, ref]),
          ...props
        },
        /* @__PURE__ */ import_react.default.createElement(
          StyledSliderThumbInteraction,
          {
            states: {
              hover: isHovered,
              focus: isFocused,
              focusVisible: isFocusVisible,
              disabled: isDisabled,
              active: isPressed
            }
          },
          children,
          import_react_native.Platform.OS === "web" && /* @__PURE__ */ import_react.default.createElement(import_visually_hidden.VisuallyHidden, null, /* @__PURE__ */ import_react.default.createElement("input", { ref: inputRef, ...inputProps }))
        )
      );
    }
  );
}
var SliderThumb_default = SliderThumb;
//# sourceMappingURL=SliderThumb.js.map
