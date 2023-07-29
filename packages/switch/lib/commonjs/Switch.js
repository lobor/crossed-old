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
var Switch_exports = {};
__export(Switch_exports, {
  Switch: () => Switch
});
module.exports = __toCommonJS(Switch_exports);
var import_react = __toESM(require("react"));
var import_interactions = require("@react-native-aria/interactions");
var import_toggle = require("@react-stately/toggle");
var import_form_control = require("@crossed/form-control");
var import_utils = require("@crossed/utils");
function Switch(StyledSwitch) {
  return (0, import_react.forwardRef)(
    ({
      disabled,
      isDisabled,
      isInvalid,
      defaultValue,
      accessibilityLabel,
      accessibilityHint,
      onToggle,
      value,
      onValueChange,
      ...props
    }, ref) => {
      const formControlContext = (0, import_form_control.useFormControlContext)();
      const combinedProps = { ...formControlContext, ...props };
      const state = (0, import_toggle.useToggleState)({
        defaultSelected: !(defaultValue === null || defaultValue === void 0) ? defaultValue : !(value === null || value === void 0) ? value : false
      });
      const checked = !(value === null || value === void 0) ? value : state.isSelected;
      const _ref = import_react.default.useRef(null);
      const { isHovered } = (0, import_interactions.useHover)({}, _ref);
      const mergedRef = (0, import_utils.mergeRefs)([ref, _ref]);
      return /* @__PURE__ */ import_react.default.createElement(
        StyledSwitch,
        {
          states: {
            hover: isHovered,
            disabled: disabled || isDisabled || combinedProps.isDisabled,
            invalid: isInvalid || combinedProps.isInvalid,
            checked: value || checked
          },
          accessibilityLabel,
          accessibilityHint,
          disabled: disabled || isDisabled || combinedProps.isDisabled,
          onValueChange: (val) => {
            onValueChange && onValueChange(val);
            onToggle ? onToggle(val) : state.toggle();
          },
          value: value || checked,
          ...combinedProps,
          ref: mergedRef
        }
      );
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Switch
});
//# sourceMappingURL=Switch.js.map
