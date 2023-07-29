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
  createAlert: () => createAlert
});
module.exports = __toCommonJS(src_exports);
var import_Alert = require("./Alert");
var import_AlertText = require("./AlertText");
var import_AlertIcon = require("./AlertIcon");
function createAlert({
  Root,
  Text,
  Icon
}) {
  const Alert = (0, import_Alert.Alert)(Root);
  Alert.Text = (0, import_AlertText.AlertText)(Text);
  Alert.Icon = (0, import_AlertIcon.AlertIcon)(Icon);
  Alert.displayName = "Alert";
  Alert.Text.displayName = "Alert.Text";
  Alert.Icon.displayName = "Alert.Icon";
  return Alert;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createAlert
});
//# sourceMappingURL=index.js.map
