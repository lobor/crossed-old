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
var GroupVSpacer_exports = {};
__export(GroupVSpacer_exports, {
  GroupVSpacer: () => GroupVSpacer
});
module.exports = __toCommonJS(GroupVSpacer_exports);
var import_core = require("@crossed/core");
var import_react_native = require("react-native");
const GroupVSpacer = (0, import_core.styled)(
  import_react_native.View,
  {
    variants: {
      space: {
        xs: {
          height: "$1"
        },
        sm: {
          height: "$1.5"
        },
        md: {
          height: "$2"
        },
        lg: {
          height: "$3"
        },
        xl: {
          height: "$4"
        }
      }
    }
  },
  { ancestorStyle: ["_groupVSpacer"] }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GroupVSpacer
});
//# sourceMappingURL=GroupVSpacer.js.map
