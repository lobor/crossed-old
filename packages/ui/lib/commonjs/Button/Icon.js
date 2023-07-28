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
var Icon_exports = {};
__export(Icon_exports, {
  Icon: () => Icon
});
module.exports = __toCommonJS(Icon_exports);
var import_core = require("@crossed/core");
const IconTmp = (0, import_core.styled)(import_core.AsForwarder, {}, {});
const Icon = (0, import_core.styled)(
  IconTmp,
  {},
  {
    ancestorStyle: ["_icon"]
  },
  {
    propertyTokenMap: {
      stroke: "colors"
    }
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Icon
});
//# sourceMappingURL=Icon.js.map
