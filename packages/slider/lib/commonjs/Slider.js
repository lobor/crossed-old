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
var Slider_exports = {};
__export(Slider_exports, {
  default: () => Slider_default
});
module.exports = __toCommonJS(Slider_exports);
var import_react = __toESM(require("react"));
var import_slider = require("@react-stately/slider");
var import_hooks = require("@crossed/hooks");
var import_Context = require("./Context");
var import_slider2 = require("@react-native-aria/slider");
var import_form_control = require("@crossed/form-control");
function Slider(StyledSlider) {
  return (0, import_react.forwardRef)(
    ({
      orientation = "horizontal",
      isReversed = false,
      children,
      ...props
    }, ref) => {
      const formControlContext = (0, import_form_control.useFormControlContext)();
      const [isFocused, setIsFocused] = import_react.default.useState(false);
      const [isFocusVisible, setIsFocusVisible] = import_react.default.useState(false);
      const [isHovered, setIsHovered] = import_react.default.useState(false);
      const [isPressed, setIsPressed] = import_react.default.useState(false);
      const { isDisabled, isReadOnly, ...newProps } = {
        ...formControlContext,
        ...props,
        "aria-label": props.accessibilityLabel ?? "Slider"
      };
      if (typeof props.value === "number") {
        newProps.value = [props.value];
      }
      if (typeof props.defaultValue === "number") {
        newProps.defaultValue = [props.defaultValue];
      }
      props = newProps;
      const { onLayout, layout: trackLayout } = (0, import_hooks.useLayout)();
      const updatedProps = Object.assign({}, props);
      if (isReadOnly || isDisabled) {
        updatedProps.isDisabled = true;
      }
      const state = (0, import_slider.useSliderState)({
        ...updatedProps,
        //@ts-ignore
        numberFormatter: { format: (e) => e },
        minValue: props.minValue,
        maxValue: props.maxValue,
        onChange: (val) => {
          props.onChange && props.onChange(val[0]);
        },
        onChangeEnd: (val) => {
          props.onChangeEnd && props.onChangeEnd(val[0]);
        }
      });
      const { trackProps } = (0, import_slider2.useSlider)(
        props,
        state,
        trackLayout
      );
      const contextValue = import_react.default.useMemo(() => {
        return {
          trackLayout,
          state,
          orientation,
          isDisabled,
          isFocused,
          setIsFocused,
          isFocusVisible,
          setIsFocusVisible,
          isPressed,
          setIsPressed,
          isHovered,
          setIsHovered,
          isReversed,
          trackProps,
          isReadOnly,
          onTrackLayout: onLayout
        };
      }, [
        trackLayout,
        state,
        orientation,
        isDisabled,
        isReversed,
        isReadOnly,
        onLayout,
        isFocused,
        setIsFocused,
        isFocusVisible,
        setIsFocusVisible,
        isPressed,
        setIsPressed
      ]);
      return /* @__PURE__ */ import_react.default.createElement(import_Context.SliderContext.Provider, { value: contextValue }, /* @__PURE__ */ import_react.default.createElement(
        StyledSlider,
        {
          ...props,
          ref,
          states: {
            hover: isHovered,
            disabled: isDisabled,
            focus: isFocused,
            focusVisible: isFocusVisible,
            active: isPressed
          },
          orientation: orientation ?? "horizontal",
          isReversed: isReversed ?? false
        },
        children
      ));
    }
  );
}
var Slider_default = Slider;
//# sourceMappingURL=Slider.js.map
