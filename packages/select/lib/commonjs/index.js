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
  createSelect: () => createSelect
});
module.exports = __toCommonJS(src_exports);
var import_Select = require("./Select");
var import_SelectTrigger = require("./SelectTrigger");
var import_SelectPortal = require("./SelectPortal");
var import_SelectBackdrop = require("./SelectBackdrop");
var import_SelectDragIndicator = require("./SelectDragIndicator");
var import_SelectDragIndicatorWrapper = require("./SelectDragIndicatorWrapper");
var import_SelectContent = require("./SelectContent");
var import_SelectItem = require("./SelectItem");
var import_SelectInput = require("./SelectInput");
var import_SelectIcon = require("./SelectIcon");
var import_SelectScrollView = require("./SelectScrollView");
var import_SelectVirtualizedList = require("./SelectVirtualizedList");
var import_SelectFlatList = require("./SelectFlatList");
var import_SelectSectionList = require("./SelectSectionList");
var import_SelectSectionHeaderText = require("./SelectSectionHeaderText");
function createSelect({
  Root,
  Trigger,
  Input,
  Icon
}, {
  Portal,
  Backdrop,
  Content,
  DragIndicator,
  DragIndicatorWrapper,
  Item,
  ItemText,
  ScrollView,
  VirtualizedList,
  FlatList,
  SectionList,
  SectionHeaderText
}) {
  const Select = (0, import_Select.Select)(Root);
  Select.Trigger = (0, import_SelectTrigger.SelectTrigger)(Trigger);
  Select.Input = (0, import_SelectInput.SelectInput)(Input);
  Select.Icon = (0, import_SelectIcon.SelectIcon)(Icon);
  Select.Portal = (0, import_SelectPortal.SelectPortal)(Portal);
  Select.Backdrop = (0, import_SelectBackdrop.SelectBackdrop)(Backdrop);
  Select.Content = (0, import_SelectContent.SelectContent)(Content);
  Select.DragIndicator = (0, import_SelectDragIndicator.SelectDragIndicator)(DragIndicator);
  Select.DragIndicatorWrapper = (0, import_SelectDragIndicatorWrapper.SelectDragIndicatorWrapper)(DragIndicatorWrapper);
  Select.Item = (0, import_SelectItem.SelectItem)(Item, ItemText);
  Select.ScrollView = (0, import_SelectScrollView.SelectScrollView)(ScrollView);
  Select.VirtualizedList = (0, import_SelectVirtualizedList.SelectVirtualizedList)(VirtualizedList);
  Select.FlatList = (0, import_SelectFlatList.SelectFlatList)(FlatList);
  Select.SectionList = (0, import_SelectSectionList.SelectSectionList)(SectionList);
  Select.SectionHeaderText = (0, import_SelectSectionHeaderText.SelectSectionHeaderText)(SectionHeaderText);
  Select.displayName = "Select";
  Select.Trigger.displayName = "Select.Trigger";
  Select.Input.displayName = "Select.Input";
  Select.Icon.displayName = "Select.Icon";
  Select.Portal.displayName = "Select.Portal";
  Select.Backdrop.displayName = "Select.Backdrop";
  Select.Content.displayName = "Select.Content";
  Select.DragIndicator.displayName = "Select.DragIndicator";
  Select.DragIndicatorWrapper.displayName = "Select.DragIndicatorWrapper";
  Select.Item.displayName = "Select.Item";
  return Select;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createSelect
});
//# sourceMappingURL=index.js.map
