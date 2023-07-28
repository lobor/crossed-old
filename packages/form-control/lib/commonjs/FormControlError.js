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
var FormControlError_exports = {};
__export(FormControlError_exports, {
  default: () => FormControlError_default
});
module.exports = __toCommonJS(FormControlError_exports);
var import_react = __toESM(require("react"));
var import_utils = require("@crossed/utils");
var import_useFormControl = require("./useFormControl");
const FormControlError = (StyledFormControlError) => (0, import_react.forwardRef)(({ children, ...props }, ref) => {
  const formControlContext = (0, import_useFormControl.useFormControlContext)();
  const combinedProps = (0, import_utils.combineContextAndProps)(formControlContext, props);
  const { isInvalid, ...remainingProps } = combinedProps;
  import_react.default.useEffect(() => {
    remainingProps == null ? void 0 : remainingProps.setHasFeedbackText(true);
    return () => {
      remainingProps == null ? void 0 : remainingProps.setHasFeedbackText(false);
    };
  });
  return isInvalid && children ? /* @__PURE__ */ import_react.default.createElement(StyledFormControlError, { ref, ...remainingProps }, children) : null;
});
var FormControlError_default = FormControlError;
//# sourceMappingURL=FormControlError.js.map
