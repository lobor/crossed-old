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
  ModalContext: () => import_Context.ModalContext,
  createModal: () => createModal
});
module.exports = __toCommonJS(src_exports);
var import_Modal = __toESM(require("./Modal"));
var import_ModalContent = __toESM(require("./ModalContent"));
var import_ModalBody = __toESM(require("./ModalBody"));
var import_ModalCloseButton = __toESM(require("./ModalCloseButton"));
var import_ModalFooter = __toESM(require("./ModalFooter"));
var import_ModalHeader = __toESM(require("./ModalHeader"));
var import_ModalBackdrop = __toESM(require("./ModalBackdrop"));
var import_Context = require("./Context");
const createModal = ({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
  AnimatePresence
}) => {
  const Modal = (0, import_Modal.default)(Root);
  Modal.Content = (0, import_ModalContent.default)(Content, AnimatePresence);
  Modal.CloseButton = (0, import_ModalCloseButton.default)(CloseButton);
  Modal.Header = (0, import_ModalHeader.default)(Header);
  Modal.Footer = (0, import_ModalFooter.default)(Footer);
  Modal.Body = (0, import_ModalBody.default)(Body);
  Modal.Backdrop = (0, import_ModalBackdrop.default)(Backdrop, AnimatePresence);
  Modal.displayName = "Modal";
  Modal.Content.displayName = "Modal.Content";
  Modal.CloseButton.displayName = "Modal.CloseButton";
  Modal.Header.displayName = "Modal.Header";
  Modal.Footer.displayName = "Modal.Footer";
  Modal.Body.displayName = "Modal.Body";
  Modal.Backdrop.displayName = "Modal.Backdrop";
  return Modal;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ModalContext,
  createModal
});
//# sourceMappingURL=index.js.map
