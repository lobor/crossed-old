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
var Checkbox_web_exports = {};
__export(Checkbox_web_exports, {
  Checkbox: () => Checkbox
});
module.exports = __toCommonJS(Checkbox_web_exports);
var import_react = __toESM(require("react"));
var import_CheckboxProvider = require("./CheckboxProvider");
var import_focus = require("@react-native-aria/focus");
var import_interactions = require("@react-native-aria/interactions");
var import_toggle = require("@react-stately/toggle");
var import_checkbox = require("@react-native-aria/checkbox");
var import_CheckboxGroup = require("./CheckboxGroup");
var import_utils = require("@crossed/utils");
var import_form_control = require("@crossed/form-control");
var import_visually_hidden = require("@react-aria/visually-hidden");
const Checkbox = (StyledCheckbox) => (0, import_react.forwardRef)(({ children, ...props }, ref) => {
  const {
    isHovered: isHoveredProp,
    isFocusVisible: isFocusVisibleProp,
    isChecked: isCheckedProp,
    isDisabled: isDisabledProp,
    isInvalid: isInvalidProp,
    isReadOnly: isReadOnlyProp,
    isIndeterminate: isIndeterminateProp,
    isFocused,
    isPressed
  } = props;
  const formControlContext = (0, import_form_control.useFormControlContext)();
  const { isInvalid, isReadOnly, isIndeterminate, ...combinedProps } = (0, import_utils.combineContextAndProps)(formControlContext, props);
  const checkboxGroupContext = (0, import_react.useContext)(import_CheckboxGroup.CheckboxGroupContext);
  const state = (0, import_toggle.useToggleState)({
    ...combinedProps,
    defaultSelected: props.defaultIsChecked,
    isSelected: isCheckedProp
  });
  const _ref = import_react.default.useRef(null);
  const { isHovered } = (0, import_interactions.useHover)({}, _ref);
  const { focusProps, isFocusVisible } = (0, import_focus.useFocusRing)();
  const mergedRef = (0, import_utils.mergeRefs)([ref, _ref]);
  const { inputProps: groupItemInputProps } = checkboxGroupContext ? (
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, import_checkbox.useCheckboxGroupItem)(
      {
        ...combinedProps,
        "aria-label": combinedProps["aria-label"] ?? combinedProps.accessibilityLabel,
        "value": combinedProps.value
      },
      checkboxGroupContext.state,
      //@ts-ignore
      mergedRef
    )
  ) : (
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, import_checkbox.useCheckbox)(
      {
        ...combinedProps,
        "aria-label": combinedProps["aria-label"] ?? combinedProps.accessibilityLabel
      },
      state,
      //@ts-ignore
      mergedRef
    )
  );
  const inputProps = import_react.default.useMemo(
    () => groupItemInputProps,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      groupItemInputProps.checked,
      groupItemInputProps.disabled,
      groupItemInputProps
    ]
  );
  const contextCombinedProps = import_react.default.useMemo(() => {
    return { ...checkboxGroupContext, ...combinedProps };
  }, [(0, import_utils.stableHash)(combinedProps)]);
  const { checked: isChecked, disabled: isDisabled } = inputProps;
  return /* @__PURE__ */ import_react.default.createElement(
    StyledCheckbox,
    {
      ...contextCombinedProps,
      accessibilityRole: "label",
      ref: mergedRef,
      states: {
        checked: isChecked || isCheckedProp,
        disabled: isDisabled || isDisabledProp,
        hover: isHovered || isHoveredProp,
        invalid: isInvalid || isInvalidProp,
        readonly: isReadOnly || isReadOnlyProp,
        active: isPressed,
        focus: isFocused,
        indeterminate: isIndeterminate || isIndeterminateProp,
        focusVisible: isFocusVisible || isFocusVisibleProp
      }
    },
    /* @__PURE__ */ import_react.default.createElement(
      import_CheckboxProvider.CheckboxProvider,
      {
        isChecked: isChecked || isCheckedProp,
        isDisabled: isDisabled || isDisabledProp,
        isFocusVisible: isFocusVisible || isFocusVisibleProp,
        isHovered: isHovered || isHoveredProp,
        isInvalid: isInvalid || isInvalidProp,
        isReadOnly: isReadOnly || isReadOnlyProp,
        isIndeterminate: isIndeterminate || isIndeterminateProp,
        isPressed
      },
      /* @__PURE__ */ import_react.default.createElement(import_visually_hidden.VisuallyHidden, null, /* @__PURE__ */ import_react.default.createElement("input", { ...inputProps, ...focusProps, ref: mergedRef })),
      children
    )
  );
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Checkbox
});
//# sourceMappingURL=Checkbox.web.js.map
