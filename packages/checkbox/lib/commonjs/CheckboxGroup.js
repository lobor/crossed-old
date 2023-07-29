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
var CheckboxGroup_exports = {};
__export(CheckboxGroup_exports, {
  CheckboxGroup: () => CheckboxGroup,
  CheckboxGroupContext: () => CheckboxGroupContext
});
module.exports = __toCommonJS(CheckboxGroup_exports);
var import_react = __toESM(require("react"));
var import_checkbox = require("@react-native-aria/checkbox");
var import_checkbox2 = require("@react-stately/checkbox");
var import_form_control = require("@crossed/form-control");
const CheckboxGroupContext = (0, import_react.createContext)(null);
const CheckboxGroup = (StyledCheckboxGroup) => (0, import_react.forwardRef)(({ children, ...props }, ref) => {
  const state = (0, import_checkbox2.useCheckboxGroupState)({
    ...props,
    validationState: props.isInvalid ? "invalid" : "valid"
  });
  const { groupProps } = (0, import_checkbox.useCheckboxGroup)(
    {
      ...props,
      "aria-label": props["aria-label"] ? props["aria-label"] : props.accessibilityLabel
    },
    //@ts-ignore
    state
  );
  const formControlContext = (0, import_form_control.useFormControlContext)();
  return /* @__PURE__ */ import_react.default.createElement(
    CheckboxGroupContext.Provider,
    {
      value: { state: { ...formControlContext, ...state } }
    },
    /* @__PURE__ */ import_react.default.createElement(StyledCheckboxGroup, { ...groupProps, ...props, ref }, children)
  );
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CheckboxGroup,
  CheckboxGroupContext
});
//# sourceMappingURL=CheckboxGroup.js.map
