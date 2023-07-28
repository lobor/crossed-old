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
var GroupHSpacer_exports = {};
__export(GroupHSpacer_exports, {
  GroupHSpacer: () => GroupHSpacer
});
module.exports = __toCommonJS(GroupHSpacer_exports);
var import_core = require("@crossed/core");
var import_react_native = require("react-native");
const GroupHSpacer = (0, import_core.styled)(
  import_react_native.View,
  {
    variants: {
      space: {
        xs: {
          width: "$1"
        },
        sm: {
          width: "$1.5"
        },
        md: {
          width: "$2"
        },
        lg: {
          width: "$3"
        },
        xl: {
          width: "$4"
        }
      }
    }
  },
  { ancestorStyle: ["_groupHSpacer"] }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GroupHSpacer
});
//# sourceMappingURL=GroupHSpacer.js.map
