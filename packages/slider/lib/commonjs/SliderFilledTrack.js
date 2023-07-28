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
var SliderFilledTrack_exports = {};
__export(SliderFilledTrack_exports, {
  default: () => SliderFilledTrack_default
});
module.exports = __toCommonJS(SliderFilledTrack_exports);
var import_react = __toESM(require("react"));
var import_Context = require("./Context");
var import_react_native = require("react-native");
var import_utils = require("@crossed/utils");
function SliderFilledTrack(StyledSliderFilledTrack) {
  return (0, import_react.forwardRef)(({ style, ...props }, ref) => {
    const _ref = import_react.default.useRef(null);
    const {
      isReversed,
      state,
      trackLayout,
      orientation,
      isDisabled,
      isFocused,
      isHovered,
      isPressed,
      isFocusVisible
    } = import_react.default.useContext(import_Context.SliderContext);
    const getSliderTrackPosition = () => {
      if (orientation === "vertical") {
        return isReversed ? trackLayout.height - trackLayout.height * state.getThumbPercent(0) : trackLayout.height * state.getThumbPercent(0);
      } else {
        return isReversed ? trackLayout.width - trackLayout.width * state.getThumbPercent(0) : trackLayout.width * state.getThumbPercent(0);
      }
    };
    const sliderTrackPosition = getSliderTrackPosition();
    const positionProps = orientation === "vertical" ? { height: sliderTrackPosition } : { width: sliderTrackPosition };
    return /* @__PURE__ */ import_react.default.createElement(
      StyledSliderFilledTrack,
      {
        ...props,
        ref: (0, import_utils.mergeRefs)([_ref, ref]),
        style: { ...style, ...positionProps },
        states: {
          hover: isHovered,
          disabled: isDisabled,
          focus: isFocused,
          focusVisible: isFocusVisible,
          active: isPressed
        },
        disabled: isDisabled,
        focusable: import_react_native.Platform.OS === "web" ? false : void 0
      }
    );
  });
}
var SliderFilledTrack_default = SliderFilledTrack;
//# sourceMappingURL=SliderFilledTrack.js.map
