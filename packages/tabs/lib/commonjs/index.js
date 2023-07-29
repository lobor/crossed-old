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
  createTabs: () => createTabs
});
module.exports = __toCommonJS(src_exports);
var import_Tab = require("./Tab");
var import_TabList = require("./TabList");
var import_TabPanel = require("./TabPanel");
var import_TabPanels = require("./TabPanels");
var import_Tabs = require("./Tabs");
var import_TabTitle = require("./TabTitle");
var import_TabIcon = require("./TabIcon");
const createTabs = ({
  Root,
  Tab,
  TabPanels,
  TabList,
  TabPanel,
  TabTitle,
  TabIcon
}) => {
  const TabsMain = (0, import_Tabs.Tabs)(Root);
  TabsMain.Tab = (0, import_Tab.Tab)(Tab);
  TabsMain.TabPanels = (0, import_TabPanels.TabPanels)(TabPanels);
  TabsMain.TabList = (0, import_TabList.TabList)(TabList);
  TabsMain.TabPanel = (0, import_TabPanel.TabPanel)(TabPanel);
  TabsMain.TabTitle = (0, import_TabTitle.TabTitle)(TabTitle);
  TabsMain.TabIcon = (0, import_TabIcon.TabIcon)(TabIcon);
  TabsMain.displayName = "Tabs";
  TabsMain.Tab.displayName = "Tab";
  TabsMain.TabPanels.displayName = "Panels";
  TabsMain.TabList.displayName = "List";
  TabsMain.TabPanel.displayName = "Panel";
  TabsMain.TabTitle.displayName = "Title";
  TabsMain.TabIcon.displayName = "Icon";
  return TabsMain;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createTabs
});
//# sourceMappingURL=index.js.map
