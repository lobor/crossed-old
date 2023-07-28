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
  createTextArea: () => createTextArea,
  createTextarea: () => createTextarea
});
module.exports = __toCommonJS(src_exports);
var import_Textarea = require("./Textarea");
var import_TextareaRoot = require("./TextareaRoot");
function createTextArea({
  Root,
  Input
}) {
  const TextareaTemp = (0, import_TextareaRoot.TextareaRoot)(Root);
  TextareaTemp.Input = (0, import_Textarea.Textarea)(Input);
  TextareaTemp.displayName = "Textarea";
  TextareaTemp.Input.displayName = "Textarea.Input";
  return TextareaTemp;
}
function createTextarea({
  Root,
  Input
}) {
  const TextareaTemp = (0, import_TextareaRoot.TextareaRoot)(Root);
  TextareaTemp.Input = (0, import_Textarea.Textarea)(Input);
  TextareaTemp.displayName = "Textarea";
  TextareaTemp.Input.displayName = "Textarea.Input";
  return TextareaTemp;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createTextArea,
  createTextarea
});
//# sourceMappingURL=index.js.map
