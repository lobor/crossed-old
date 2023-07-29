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
  createActionsheet: () => createActionsheet
});
module.exports = __toCommonJS(src_exports);
var import_Actionsheet = require("./Actionsheet");
var import_ActionsheetContent = __toESM(require("./ActionsheetContent"));
var import_ActionsheetItem = require("./ActionsheetItem");
var import_ActionsheetItemText = require("./ActionsheetItemText");
var import_ActionsheetBackdrop = __toESM(require("./ActionsheetBackdrop"));
var import_ActionsheetDragIndicator = __toESM(require("./ActionsheetDragIndicator"));
var import_ActionsheetDragIndicatorWrapper = require("./ActionsheetDragIndicatorWrapper");
var import_ActionsheetScrollView = require("./ActionsheetScrollView");
var import_ActionsheetVirtualizedList = require("./ActionsheetVirtualizedList");
var import_ActionsheetFlatList = require("./ActionsheetFlatList");
var import_ActionsheetSectionList = require("./ActionsheetSectionList");
var import_ActionsheetSectionHeaderText = require("./ActionsheetSectionHeaderText");
var import_ActionsheetIcon = require("./ActionsheetIcon");
function createActionsheet({
  Root,
  Backdrop,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Content,
  ScrollView,
  VirtualizedList,
  FlatList,
  SectionList,
  SectionHeaderText,
  Icon,
  AnimatePresence
}) {
  const Actionsheet = (0, import_Actionsheet.Actionsheet)(Root);
  Actionsheet.Backdrop = (0, import_ActionsheetBackdrop.default)(Backdrop, AnimatePresence);
  Actionsheet.Content = (0, import_ActionsheetContent.default)(Content, AnimatePresence);
  Actionsheet.DragIndicator = (0, import_ActionsheetDragIndicator.default)(DragIndicator);
  Actionsheet.DragIndicatorWrapper = (0, import_ActionsheetDragIndicatorWrapper.ActionsheetDragIndicatorWrapper)(IndicatorWrapper);
  Actionsheet.Item = (0, import_ActionsheetItem.ActionsheetItem)(Item);
  Actionsheet.ItemText = (0, import_ActionsheetItemText.ActionsheetItemText)(ItemText);
  Actionsheet.Icon = (0, import_ActionsheetIcon.ActionsheetIcon)(Icon);
  Actionsheet.ScrollView = (0, import_ActionsheetScrollView.ActionsheetScrollView)(ScrollView);
  Actionsheet.VirtualizedList = (0, import_ActionsheetVirtualizedList.ActionsheetVirtualizedList)(VirtualizedList);
  Actionsheet.FlatList = (0, import_ActionsheetFlatList.ActionsheetFlatList)(FlatList);
  Actionsheet.SectionList = (0, import_ActionsheetSectionList.ActionsheetSectionList)(SectionList);
  Actionsheet.SectionHeaderText = (0, import_ActionsheetSectionHeaderText.ActionsheetSectionHeaderText)(SectionHeaderText);
  return Actionsheet;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createActionsheet
});
//# sourceMappingURL=index.js.map
