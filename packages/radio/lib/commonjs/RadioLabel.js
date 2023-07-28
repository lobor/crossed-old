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
var RadioLabel_exports = {};
__export(RadioLabel_exports, {
  RadioLabel: () => RadioLabel
});
module.exports = __toCommonJS(RadioLabel_exports);
var import_react = __toESM(require("react"));
var import_RadioProvider = require("./RadioProvider");
const RadioLabel = (StyledRadioLabel) => (0, import_react.forwardRef)(({ children, ...props }, ref) => {
  const {
    isHovered,
    isChecked,
    isDisabled,
    isFocusVisible,
    isInvalid,
    isReadOnly,
    isIndeterminate,
    isFocused,
    isPressed
  } = (0, import_RadioProvider.useRadio)("RadioContext");
  return /* @__PURE__ */ import_react.default.createElement(
    StyledRadioLabel,
    {
      states: {
        checked: isChecked,
        disabled: isDisabled,
        focusVisible: isFocused || isFocusVisible,
        hover: isHovered,
        invalid: isInvalid,
        readonly: isReadOnly,
        indeterminate: isIndeterminate,
        focus: isFocused,
        active: isPressed
      },
      ...props,
      ref
    },
    children
  );
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RadioLabel
});
//# sourceMappingURL=RadioLabel.js.map
