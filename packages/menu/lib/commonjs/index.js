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
  createMenu: () => createMenu
});
module.exports = __toCommonJS(src_exports);
var import_Menu = require("./Menu");
var import_MenuItemStately = require("./MenuItemStately");
var import_MenuItemLabel = require("./MenuItemLabel");
const createMenu = ({
  Root: StyledMenu,
  Item: StyledMenuItem,
  Label: StyledItemLabel,
  Backdrop: StyledBackdrop,
  AnimatePresence
}) => {
  const MenuTemp = (0, import_Menu.Menu)({
    StyledMenu,
    StyledMenuItem,
    StyledBackdrop,
    AnimatePresence
  });
  MenuTemp.Item = import_MenuItemStately.MenuItem;
  MenuTemp.ItemLabel = (0, import_MenuItemLabel.MenuItemLabel)(StyledItemLabel);
  const Menu = MenuTemp;
  return Menu;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createMenu
});
//# sourceMappingURL=index.js.map
