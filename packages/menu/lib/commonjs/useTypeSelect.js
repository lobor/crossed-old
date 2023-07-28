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
var useTypeSelect_exports = {};
__export(useTypeSelect_exports, {
  useTypeSelect: () => useTypeSelect
});
module.exports = __toCommonJS(useTypeSelect_exports);
var import_react_native = require("react-native");
const ITEM_ATTR = "data-key";
const getValue = (element) => element.getAttribute(ITEM_ATTR) ?? "";
const useTypeSelect = (state) => {
  if (import_react_native.Platform.OS !== "web")
    return;
  return {
    onKeyDownCapture(event) {
      if (event.key.length === 1 && !(event.ctrlKey || event.altKey || event.metaKey)) {
        const container = event.currentTarget;
        const values = Array.from(
          container.querySelectorAll(`[${ITEM_ATTR}]`)
        ).map(getValue);
        const searchKey = event.key;
        const foundValue = values.find(
          (value) => value.toLowerCase().startsWith(searchKey)
        );
        if (!state.disabledKeys.has(foundValue)) {
          foundValue && state.selectionManager.setFocusedKey(foundValue);
        }
      }
    }
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useTypeSelect
});
//# sourceMappingURL=useTypeSelect.js.map
