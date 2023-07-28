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
  createTooltip: () => createTooltip
});
module.exports = __toCommonJS(src_exports);
var import_TooltipContent = require("./TooltipContent");
var import_TooltipText = require("./TooltipText");
var import_Tooltip = require("./Tooltip");
function createTooltip({
  Text,
  Root,
  Content,
  AnimatePresence
}) {
  const Tooltip = (0, import_Tooltip.Tooltip)(Root);
  Tooltip.Content = (0, import_TooltipContent.TooltipContent)(Content, AnimatePresence);
  Tooltip.Text = (0, import_TooltipText.TooltipText)(Text);
  Tooltip.displayName = "Tooltip";
  Tooltip.Content.displayName = "Tooltip.Content";
  Tooltip.Text.displayName = "Tooltip.Text";
  return Tooltip;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createTooltip
});
//# sourceMappingURL=index.js.map
