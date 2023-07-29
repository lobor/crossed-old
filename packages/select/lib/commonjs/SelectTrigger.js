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
var SelectTrigger_exports = {};
__export(SelectTrigger_exports, {
  SelectTrigger: () => SelectTrigger
});
module.exports = __toCommonJS(SelectTrigger_exports);
var import_react = __toESM(require("react"));
var import_SelectContext = require("./SelectContext");
var import_utils = require("@crossed/utils");
var import_react_native = require("react-native");
const SelectTrigger = (StyledSelectTrigger) => (0, import_react.forwardRef)(({ children, accessibilityLabel, ...props }, ref) => {
  const {
    isDisabled,
    hoverRef,
    setIsOpen,
    onOpen,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    isReadOnly
  } = import_react.default.useContext(import_SelectContext.SelectContext);
  return /* @__PURE__ */ import_react.default.createElement(
    StyledSelectTrigger,
    {
      onPress: () => {
        if (!isReadOnly) {
          import_react_native.Keyboard.dismiss();
          setIsOpen(true);
          onOpen && onOpen();
        }
      },
      states: {
        focus: isFocused,
        focusVisible: isFocusVisible,
        hover: isHovered,
        disabled: isDisabled,
        invalid: isInvalid
      },
      disabled: isDisabled,
      accessibilityLabel,
      accessibilityRole: "button",
      ref: (0, import_utils.mergeRefs)([ref, hoverRef]),
      focusable: false,
      ...props
    },
    children
  );
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SelectTrigger
});
//# sourceMappingURL=SelectTrigger.js.map
