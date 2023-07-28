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
  createInput: () => createInput
});
module.exports = __toCommonJS(src_exports);
var import_InputIcon = require("./InputIcon");
var import_InputGroup = require("./InputGroup");
var import_Input = require("./Input");
const createInput = ({
  Root,
  Icon,
  Input
}) => {
  const InputField = (0, import_InputGroup.InputGroup)(Root);
  InputField.Icon = (0, import_InputIcon.InputIcon)(Icon);
  InputField.Input = (0, import_Input.Input)(Input);
  InputField.displayName = "InputField";
  InputField.Icon.displayName = "InputField.Icon";
  InputField.Input.displayName = "InputField.Input";
  return InputField;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createInput
});
//# sourceMappingURL=index.js.map
