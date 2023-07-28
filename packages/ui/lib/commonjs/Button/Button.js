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
var Button_exports = {};
__export(Button_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(Button_exports);
var import_button = require("@crossed/button");
var import_Root = require("./Root");
var import_Text = require("./Text");
var import_Group = require("./Group");
var import_GroupHSpacer = require("./GroupHSpacer");
var import_GroupVSpacer = require("./GroupVSpacer");
var import_Spinner = require("./Spinner");
var import_Icon = require("./Icon");
const Button = (0, import_button.createButton)({
  Root: import_Root.Root,
  Text: import_Text.Text,
  Group: import_Group.Group,
  GroupHSpacer: import_GroupHSpacer.GroupHSpacer,
  GroupVSpacer: import_GroupVSpacer.GroupVSpacer,
  Spinner: import_Spinner.Spinner,
  Icon: import_Icon.Icon
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
//# sourceMappingURL=Button.js.map
