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
var TabPanels_exports = {};
__export(TabPanels_exports, {
  TabPanels: () => TabPanels
});
module.exports = __toCommonJS(TabPanels_exports);
var import_react = __toESM(require("react"));
var import_react2 = require("react");
const TabPanels = (StyledTabPanels) => (0, import_react.memo)(
  (0, import_react2.forwardRef)(
    ({ children, ...props }, ref) => {
      let tabIndex = 0;
      const modiefiedTabPanels = (0, import_react.useMemo)(
        () => import_react.default.Children.toArray(children).map((child) => {
          return import_react.default.cloneElement(child, {
            key: child.key ?? `tabpanel-${tabIndex}`,
            value: `tab-${tabIndex++}`,
            ...child == null ? void 0 : child.props
          });
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [children]
      );
      return /* @__PURE__ */ import_react.default.createElement(StyledTabPanels, { ...props, ref }, modiefiedTabPanels);
    }
  )
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TabPanels
});
//# sourceMappingURL=TabPanels.js.map
