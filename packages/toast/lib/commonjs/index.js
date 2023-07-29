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
  ToastProvider: () => import_Toast2.ToastProvider,
  createToast: () => createToast,
  createToastHook: () => createToastHook
});
module.exports = __toCommonJS(src_exports);
var import_Toast = require("./Toast");
var import_ToastComponent = require("./ToastComponent");
var import_ToastTitle = require("./ToastTitle");
var import_ToastDescription = require("./ToastDescription");
var import_Toast2 = require("./Toast");
const createToastHook = () => {
  return import_Toast.useToast;
};
function createToast({
  Root,
  Title,
  Description
}) {
  const Toast = (0, import_ToastComponent.ToastComponent)(Root);
  Toast.Title = (0, import_ToastTitle.ToastTitle)(Title);
  Toast.Description = (0, import_ToastDescription.ToastDescription)(Description);
  Toast.displayName = "Toast";
  Toast.Title.displayName = "Toast.Title";
  Toast.Description.displayName = "Toast.Description";
  return Toast;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ToastProvider,
  createToast,
  createToastHook
});
//# sourceMappingURL=index.js.map
