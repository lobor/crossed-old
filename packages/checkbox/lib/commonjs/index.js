"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  createCheckbox: () => createCheckbox
});
module.exports = __toCommonJS(src_exports);
var import_Checkbox = require("./Checkbox");
var import_CheckboxIcon = __toESM(require("./CheckboxIcon"));
var import_CheckboxIndicator = __toESM(require("./CheckboxIndicator"));
var import_CheckboxLabel = __toESM(require("./CheckboxLabel"));
var import_CheckboxGroup = require("./CheckboxGroup");
const createCheckbox = ({
  Root,
  Indicator,
  Icon,
  Label,
  Group
}) => {
  const Checkbox = (0, import_Checkbox.Checkbox)(Root);
  Checkbox.Indicator = (0, import_CheckboxIndicator.default)(Indicator);
  Checkbox.Icon = (0, import_CheckboxIcon.default)(Icon);
  Checkbox.Label = (0, import_CheckboxLabel.default)(Label);
  Checkbox.Group = (0, import_CheckboxGroup.CheckboxGroup)(Group);
  Checkbox.displayName = "Checkbox";
  Checkbox.Indicator.displayName = "Checkbox.Indicator";
  Checkbox.Icon.displayName = "Checkbox.Icon";
  Checkbox.Label.displayName = "Checkbox.Label";
  Checkbox.Group.displayName = "Checkbox.Group";
  return Checkbox;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createCheckbox
});
//# sourceMappingURL=index.js.map
