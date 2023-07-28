"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  ariaAttr: () => import_accessibilityUtils.ariaAttr,
  combineContextAndProps: () => import_combineContextAndProps.combineContextAndProps,
  composeEventHandlers: () => import_composeEventHandlers.composeEventHandlers,
  createContext: () => import_createContext.createContext,
  flattenChildren: () => import_getSpacedChild.flattenChildren,
  mergeRefs: () => import_mergeRefs.mergeRefs,
  stableHash: () => import_stableHash.stableHash
});
module.exports = __toCommonJS(src_exports);
var import_composeEventHandlers = require("./composeEventHandlers");
var import_createContext = require("./createContext");
var import_mergeRefs = require("./mergeRefs");
var import_getSpacedChild = require("./getSpacedChild");
var import_accessibilityUtils = require("./accessibilityUtils");
var import_combineContextAndProps = require("./combineContextAndProps");
var import_stableHash = require("./stableHash");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ariaAttr,
  combineContextAndProps,
  composeEventHandlers,
  createContext,
  flattenChildren,
  mergeRefs,
  stableHash
});
//# sourceMappingURL=index.js.map
