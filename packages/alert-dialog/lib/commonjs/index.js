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
  createAlertDialog: () => createAlertDialog
});
module.exports = __toCommonJS(src_exports);
var import_AlertDialog = require("./AlertDialog");
var import_AlertDialogContent = __toESM(require("./AlertDialogContent"));
var import_AlertDialogBody = __toESM(require("./AlertDialogBody"));
var import_AlertDialogCloseButton = __toESM(require("./AlertDialogCloseButton"));
var import_AlertDialogFooter = __toESM(require("./AlertDialogFooter"));
var import_AlertDialogHeader = __toESM(require("./AlertDialogHeader"));
var import_AlertDialogBackdrop = __toESM(require("./AlertDialogBackdrop"));
function createAlertDialog({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
  AnimatePresence
}) {
  const AlertDialog = (0, import_AlertDialog.AlertDialog)(Root);
  AlertDialog.Content = (0, import_AlertDialogContent.default)(Content, AnimatePresence);
  AlertDialog.CloseButton = (0, import_AlertDialogCloseButton.default)(CloseButton);
  AlertDialog.Header = (0, import_AlertDialogHeader.default)(Header);
  AlertDialog.Footer = (0, import_AlertDialogFooter.default)(Footer);
  AlertDialog.Body = (0, import_AlertDialogBody.default)(Body);
  AlertDialog.Backdrop = (0, import_AlertDialogBackdrop.default)(Backdrop, AnimatePresence);
  AlertDialog.displayName = "AlertDialog";
  AlertDialog.Content.displayName = "AlertDialog.Content";
  AlertDialog.CloseButton.displayName = "AlertDialog.CloseButton";
  AlertDialog.Header.displayName = "AlertDialog.Header";
  AlertDialog.Footer.displayName = "AlertDialog.Footer";
  AlertDialog.Body.displayName = "AlertDialog.Body";
  AlertDialog.Backdrop.displayName = "AlertDialog.Backdrop";
  return AlertDialog;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createAlertDialog
});
//# sourceMappingURL=index.js.map
