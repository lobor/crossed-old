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
var InputIcon_exports = {};
__export(InputIcon_exports, {
  InputIcon: () => InputIcon
});
module.exports = __toCommonJS(InputIcon_exports);
var import_react = __toESM(require("react"));
var import_InputContext = require("./InputContext");
var import_form_control = require("@crossed/form-control");
const InputIcon = (StyledInputIcon) => (0, import_react.forwardRef)(({ children, onPress, ...props }, ref) => {
  const { inputFieldRef, isDisabled } = (0, import_InputContext.useInput)("InputContext");
  const handleFocus = () => {
    var _a;
    (_a = inputFieldRef == null ? void 0 : inputFieldRef.current) == null ? void 0 : _a.focus();
  };
  const inputProps = (0, import_form_control.useFormControl)({
    isDisabled: props.isDisabled
  });
  return /* @__PURE__ */ import_react.default.createElement(
    StyledInputIcon,
    {
      states: {
        disabled: isDisabled || inputProps.isDisabled
      },
      onPress: () => {
        handleFocus();
        if (onPress)
          onPress();
      },
      accessibilityElementsHidden: true,
      focusable: false,
      ref,
      ...props
    },
    children
  );
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InputIcon
});
//# sourceMappingURL=InputIcon.js.map
