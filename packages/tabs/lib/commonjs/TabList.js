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
var TabList_exports = {};
__export(TabList_exports, {
  TabList: () => TabList
});
module.exports = __toCommonJS(TabList_exports);
var import_react = __toESM(require("react"));
var import_react2 = require("react");
const TabList = (StyledTabList) => (0, import_react.memo)(
  (0, import_react2.forwardRef)(
    ({ children, ...props }, ref) => {
      let tabIndex = 0;
      const modifiedTabList = (0, import_react.useMemo)(
        () => import_react.default.Children.toArray(children).map((tab) => {
          return import_react.default.cloneElement(tab, {
            key: tab.key ?? `tab-${tabIndex}`,
            value: `tab-${tabIndex++}`,
            ...tab == null ? void 0 : tab.props
          });
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [children]
      );
      return /* @__PURE__ */ import_react.default.createElement(
        StyledTabList,
        {
          accessibilityRole: "tablist",
          ...props,
          ref
        },
        modifiedTabList
      );
    }
  )
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TabList
});
//# sourceMappingURL=TabList.js.map
