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
var CheckboxLabel_exports = {};
__export(CheckboxLabel_exports, {
  default: () => CheckboxLabel_default
});
module.exports = __toCommonJS(CheckboxLabel_exports);
var import_react = __toESM(require("react"));
var import_CheckboxProvider = require("./CheckboxProvider");
const CheckboxLabel = (StyledCheckboxLabel) => (0, import_react.forwardRef)(({ children, ...props }, ref) => {
  const {
    isChecked,
    isDisabled,
    isHovered,
    isInvalid,
    isReadOnly,
    isPressed,
    isFocused,
    isIndeterminate,
    isFocusVisible
  } = (0, import_CheckboxProvider.useCheckbox)("CheckboxContext");
  return /* @__PURE__ */ import_react.default.createElement(
    StyledCheckboxLabel,
    {
      states: {
        hover: isHovered,
        checked: isChecked,
        disabled: isDisabled,
        focusVisible: isFocusVisible,
        invalid: isInvalid,
        readOnly: isReadOnly,
        pressed: isPressed,
        focused: isFocused,
        indeterminate: isIndeterminate
      },
      ...props,
      ref
    },
    children
  );
});
var CheckboxLabel_default = CheckboxLabel;
//# sourceMappingURL=CheckboxLabel.js.map
