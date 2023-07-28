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
var wrapStringChild_exports = {};
__export(wrapStringChild_exports, {
  wrapStringChild: () => wrapStringChild
});
module.exports = __toCommonJS(wrapStringChild_exports);
var import_react = __toESM(require("react"));
const wrapStringChild = (children, StyledBoxText) => {
  return import_react.default.Children.map(children, (child) => {
    var _a, _b;
    return typeof child === "string" || typeof child === "number" || (child == null ? void 0 : child.type) === import_react.default.Fragment && (typeof ((_a = child.props) == null ? void 0 : _a.children) === "string" || typeof ((_b = child.props) == null ? void 0 : _b.children) === "number") ? /* @__PURE__ */ import_react.default.createElement(StyledBoxText, null, child) : child;
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  wrapStringChild
});
//# sourceMappingURL=wrapStringChild.js.map
