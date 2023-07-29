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
  createPopover: () => createPopover
});
module.exports = __toCommonJS(src_exports);
var import_Popover = require("./Popover");
var import_PopoverArrow = __toESM(require("./PopoverArrow"));
var import_PopoverBody = __toESM(require("./PopoverBody"));
var import_PopoverCloseButton = __toESM(require("./PopoverCloseButton"));
var import_PopoverContent = __toESM(require("./PopoverContent"));
var import_PopoverFooter = __toESM(require("./PopoverFooter"));
var import_PopoverHeader = __toESM(require("./PopoverHeader"));
var import_PopoverBackdrop = __toESM(require("./PopoverBackdrop"));
function createPopover({
  Root,
  Arrow,
  Content,
  Header,
  Footer,
  Body,
  Backdrop,
  CloseButton,
  AnimatePresence
}) {
  const Popover = (0, import_Popover.Popover)(Root);
  Popover.Content = (0, import_PopoverContent.default)(Content, AnimatePresence);
  Popover.CloseButton = (0, import_PopoverCloseButton.default)(CloseButton);
  Popover.Header = (0, import_PopoverHeader.default)(Header);
  Popover.Footer = (0, import_PopoverFooter.default)(Footer);
  Popover.Body = (0, import_PopoverBody.default)(Body);
  Popover.Arrow = (0, import_PopoverArrow.default)(Arrow);
  Popover.Backdrop = (0, import_PopoverBackdrop.default)(Backdrop, AnimatePresence);
  Popover.displayName = "Popover";
  Popover.Content.displayName = "Popover.Content";
  Popover.CloseButton.displayName = "Popover.CloseButton";
  Popover.Header.displayName = "Popover.Header";
  Popover.Footer.displayName = "Popover.Footer";
  Popover.Body.displayName = "Popover.Body";
  Popover.Arrow.displayName = "Popover.Arrow";
  Popover.Backdrop.displayName = "Popover.Backdrop";
  return Popover;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createPopover
});
//# sourceMappingURL=index.js.map
