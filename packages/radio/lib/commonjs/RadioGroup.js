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
var RadioGroup_exports = {};
__export(RadioGroup_exports, {
  RadioGroup: () => RadioGroup
});
module.exports = __toCommonJS(RadioGroup_exports);
var import_react = __toESM(require("react"));
var import_radio = require("@react-native-aria/radio");
var import_radio2 = require("@react-stately/radio");
var import_RadioGroupContext = require("./RadioGroupContext");
var import_form_control = require("@crossed/form-control");
const RadioGroup = (StyledRadioGroup) => (0, import_react.forwardRef)(({ children, isInvalid, ...props }, ref) => {
  const formControlContext = (0, import_form_control.useFormControlContext)();
  const state = (0, import_radio2.useRadioGroupState)({
    ...props,
    validationState: isInvalid ? "invalid" : "valid"
  });
  const radioGroupState = (0, import_radio.useRadioGroup)(
    {
      ...formControlContext,
      ...props,
      "aria-label": props.accessibilityLabel
    },
    state
  );
  const contextValue = import_react.default.useMemo(() => {
    return {
      ...formControlContext,
      state
    };
  }, [formControlContext, state]);
  const radioGroupProps = import_react.default.useMemo(
    () => radioGroupState.radioGroupProps,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return /* @__PURE__ */ import_react.default.createElement(import_RadioGroupContext.RadioGroupProvider, { state: contextValue }, /* @__PURE__ */ import_react.default.createElement(StyledRadioGroup, { ...radioGroupProps, ...props, ref }, children));
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RadioGroup
});
//# sourceMappingURL=RadioGroup.js.map
