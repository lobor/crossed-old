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
var RadioProvider_exports = {};
__export(RadioProvider_exports, {
  RadioProvider: () => RadioProvider,
  useRadio: () => useRadio
});
module.exports = __toCommonJS(RadioProvider_exports);
var import_utils = require("@crossed/utils");
const [RadioProvider, useRadio] = (0, import_utils.createContext)("RadioContext");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RadioProvider,
  useRadio
});
//# sourceMappingURL=RadioProvider.js.map
