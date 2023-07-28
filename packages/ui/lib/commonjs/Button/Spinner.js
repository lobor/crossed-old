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
var Spinner_exports = {};
__export(Spinner_exports, {
  Spinner: () => Spinner
});
module.exports = __toCommonJS(Spinner_exports);
var import_core = require("@crossed/core");
var import_react_native = require("react-native");
const Spinner = (0, import_core.styled)(
  import_react_native.ActivityIndicator,
  {},
  { ancestorStyle: ["_spinner"], resolveProps: ["color"] }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Spinner
});
//# sourceMappingURL=Spinner.js.map
