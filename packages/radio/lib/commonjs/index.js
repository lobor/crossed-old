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
  createRadio: () => createRadio
});
module.exports = __toCommonJS(src_exports);
var import_Radio = require("./Radio");
var import_RadioIcon = require("./RadioIcon");
var import_RadioIndicator = require("./RadioIndicator");
var import_RadioLabel = require("./RadioLabel");
var import_RadioGroup = require("./RadioGroup");
const createRadio = ({
  Root,
  Group,
  Icon,
  Indicator,
  Label
}) => {
  const Radio = (0, import_Radio.Radio)(Root);
  Radio.Group = (0, import_RadioGroup.RadioGroup)(Group);
  Radio.Label = (0, import_RadioLabel.RadioLabel)(Label);
  Radio.Icon = (0, import_RadioIcon.RadioIcon)(Icon);
  Radio.Indicator = (0, import_RadioIndicator.RadioIndicator)(Indicator);
  Radio.displayName = "Radio";
  Radio.Group.displayName = "Radio.Group";
  Radio.Label.displayName = "Radio.Label";
  Radio.Icon.displayName = "Radio.Icon";
  Radio.Indicator.displayName = "Radio.Indicator";
  return Radio;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createRadio
});
//# sourceMappingURL=index.js.map
