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
var PopoverBackdrop_exports = {};
__export(PopoverBackdrop_exports, {
  default: () => PopoverBackdrop_default
});
module.exports = __toCommonJS(PopoverBackdrop_exports);
var import_react = __toESM(require("react"));
var import_OverlayAnimatePresence = require("./OverlayAnimatePresence");
var import_PopoverContext = require("./PopoverContext");
const PopoverBackdrop = (StyledPopoverBackdrop, AnimatePresence) => (0, import_react.forwardRef)(({ children, ...props }, ref) => {
  const { value } = (0, import_PopoverContext.usePopover)("PopperContext");
  const { handleClose } = value;
  return /* @__PURE__ */ import_react.default.createElement(
    import_OverlayAnimatePresence.OverlayAnimatePresence,
    {
      visible: value == null ? void 0 : value.isOpen,
      AnimatePresence
    },
    /* @__PURE__ */ import_react.default.createElement(
      StyledPopoverBackdrop,
      {
        ref,
        ...props,
        onPress: handleClose,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        "aria-hidden": true
      },
      children
    )
  );
});
var PopoverBackdrop_default = PopoverBackdrop;
//# sourceMappingURL=PopoverBackdrop.js.map
