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
  createButton: () => createButton
});
module.exports = __toCommonJS(src_exports);
var import_Button = require("./Button");
var import_ButtonGroup = require("./ButtonGroup");
var import_ButtonText = require("./ButtonText");
var import_ButtonSpinner = require("./ButtonSpinner");
var import_ButtonIcon = require("./ButtonIcon");
function createButton({
  Root,
  Text,
  Group,
  GroupHSpacer,
  GroupVSpacer,
  Spinner,
  Icon
}) {
  const Button = (0, import_Button.Button)(Root);
  Button.Text = (0, import_ButtonText.ButtonText)(Text);
  Button.Group = (0, import_ButtonGroup.ButtonGroup)(Group, GroupHSpacer, GroupVSpacer);
  Button.Spinner = (0, import_ButtonSpinner.ButtonSpinner)(Spinner);
  Button.Icon = (0, import_ButtonIcon.ButtonIcon)(Icon);
  Button.displayName = "Button";
  Button.Text.displayName = "Button.Text";
  Button.Group.displayName = "Button.Group";
  Button.Spinner.displayName = "Button.Spinner";
  Button.Icon.displayName = "Button.Icon";
  return Button;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createButton
});
//# sourceMappingURL=index.js.map
