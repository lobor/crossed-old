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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  CrossedProvider: () => CrossedProvider
});
module.exports = __toCommonJS(src_exports);
var import_core = require("@crossed/core");
var import_provider = require("@crossed/provider");
__reExport(src_exports, require("./Button"), module.exports);
__reExport(src_exports, require("./HStack"), module.exports);
__reExport(src_exports, require("./VStack"), module.exports);
const CrossedProvider = (0, import_provider.createProvider)({ StyledProvider: import_core.StyledProvider });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CrossedProvider,
  ...require("./Button"),
  ...require("./HStack"),
  ...require("./VStack")
});
//# sourceMappingURL=index.js.map
