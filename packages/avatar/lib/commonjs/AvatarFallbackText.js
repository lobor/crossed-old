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
var AvatarFallbackText_exports = {};
__export(AvatarFallbackText_exports, {
  AvatarFallbackText: () => AvatarFallbackText
});
module.exports = __toCommonJS(AvatarFallbackText_exports);
var import_react = __toESM(require("react"));
const getFirstCharacters = (str) => {
  const words = str.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      result += words[i].charAt(0);
    }
    if (result.length >= 2) {
      break;
    }
  }
  return result.toUpperCase();
};
const AvatarFallbackText = (StyledAvatarFallbackText) => (0, import_react.forwardRef)(({ children, ...props }, ref) => {
  let fallbackText = "";
  if (typeof children === "string") {
    fallbackText = getFirstCharacters(children);
  }
  return /* @__PURE__ */ import_react.default.createElement(StyledAvatarFallbackText, { ref, ...props }, fallbackText);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AvatarFallbackText
});
//# sourceMappingURL=AvatarFallbackText.js.map
