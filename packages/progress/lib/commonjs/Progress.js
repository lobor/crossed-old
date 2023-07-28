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
var Progress_exports = {};
__export(Progress_exports, {
  Progress: () => Progress
});
module.exports = __toCommonJS(Progress_exports);
var import_react = __toESM(require("react"));
var import_ProgressContext = require("./ProgressContext");
const useProgress = ({
  min,
  max,
  value
}) => {
  const valueWidth = value < max && value > min ? (value - min) / (max - min) * 100 : value > min ? 100 : 0;
  return {
    "accessible": true,
    "focusable": true,
    "role": "progressbar",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": valueWidth,
    "aria-valuetext": `${valueWidth}%`,
    valueWidth,
    "accessibilityRole": "progressbar",
    "accessibilityValueNow": valueWidth,
    "accessibilityValueMin": min,
    "accessibilityValueMax": max,
    "accessibilityValueText": `${valueWidth}%`
  };
};
function Progress(StyledProgress) {
  return (0, import_react.forwardRef)(
    ({ children, min = 0, max = 100, value = 0, ...props }, ref) => {
      const progressProps = useProgress({ min, max, value });
      return /* @__PURE__ */ import_react.default.createElement(
        StyledProgress,
        {
          ref,
          ...progressProps,
          ...props
        },
        /* @__PURE__ */ import_react.default.createElement(
          import_ProgressContext.ProgressProvider,
          {
            min,
            max,
            valueWidth: progressProps.valueWidth
          },
          children
        )
      );
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Progress
});
//# sourceMappingURL=Progress.js.map
