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
  createLink: () => createLink,
  useLink: () => import_useLink.useLink
});
module.exports = __toCommonJS(src_exports);
var import_Link = require("./Link");
var import_LinkText = require("./LinkText");
var import_useLink = require("./useLink");
const createLink = ({
  Root,
  Text
}) => {
  const Link = (0, import_Link.Link)(Root);
  Link.Text = (0, import_LinkText.LinkText)(Text);
  Link.Text.displayName = "Link.Text";
  return Link;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createLink,
  useLink
});
//# sourceMappingURL=index.js.map
