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
var Text_exports = {};
__export(Text_exports, {
  Text: () => Text
});
module.exports = __toCommonJS(Text_exports);
var import_core = require("@crossed/core");
var import_react_native = require("react-native");
const Text = (0, import_core.styled)(
  import_react_native.Text,
  {
    color: "$color",
    fontFamily: "$body",
    //@ts-ignore
    userSelect: "none"
  },
  { ancestorStyle: ["_text"], DEBUG: "STYLEDBUTTONTEXT" }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Text
});
//# sourceMappingURL=Text.js.map
