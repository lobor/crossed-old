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
var Checkbox_exports = {};
__export(Checkbox_exports, {
  Checkbox: () => Checkbox
});
module.exports = __toCommonJS(Checkbox_exports);
var import_react = __toESM(require("react"));
var import_CheckboxProvider = require("./CheckboxProvider");
var import_interactions = require("@react-native-aria/interactions");
var import_focus = require("@react-native-aria/focus");
var import_toggle = require("@react-stately/toggle");
var import_checkbox = require("@react-native-aria/checkbox");
var import_CheckboxGroup = require("./CheckboxGroup");
var import_utils = require("@crossed/utils");
var import_form_control = require("@crossed/form-control");
const Checkbox = (StyledCheckbox) => (0, import_react.forwardRef)(
  ({
    _onPress,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    children,
    ...props
  }, ref) => {
    const {
      isHovered: isHoveredProp,
      isChecked: isCheckedProp,
      isDisabled: isDisabledProp,
      isInvalid: isInvalidProp,
      isReadOnly: isReadOnlyProp,
      isPressed: isPressedProp,
      isFocused: isFocusedProp,
      isIndeterminate: isIndeterminateProp,
      isFocusVisible
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
    const { hoverProps, isHovered } = (0, import_interactions.useHover)(isHoveredProp, _ref);
    const { focusProps, isFocused } = (0, import_focus.useFocus)();
    const { checked: isChecked, disabled: isDisabled } = inputProps;
    const { pressProps, isPressed } = (0, import_interactions.usePress)({
      isDisabled: isDisabled || isDisabledProp
    });
    return /* @__PURE__ */ import_react.default.createElement(
      StyledCheckbox,
      {
        disabled: isDisabled || isDisabledProp,
        ...pressProps,
        ...contextCombinedProps,
        ...inputProps,
        ref: mergedRef,
        accessibilityRole: "checkbox",
        onPressIn: (0, import_utils.composeEventHandlers)(onPressIn, pressProps.onPressIn),
        onPressOut: (0, import_utils.composeEventHandlers)(onPressOut, pressProps.onPressOut),
        onHoverIn: (0, import_utils.composeEventHandlers)(onHoverIn, hoverProps.onHoverIn),
        onHoverOut: (0, import_utils.composeEventHandlers)(onHoverOut, hoverProps.onHoverOut),
        onFocus: (0, import_utils.composeEventHandlers)(
          (0, import_utils.composeEventHandlers)(onFocus, focusProps.onFocus)
          // focusRingProps.onFocu
        ),
        onBlur: (0, import_utils.composeEventHandlers)(
          (0, import_utils.composeEventHandlers)(onBlur, focusProps.onBlur)
          // focusRingProps.onBlur
        ),
        states: {
          checked: isChecked || isCheckedProp,
          disabled: isDisabled || isDisabledProp,
          hover: isHovered || isHoveredProp,
          invalid: isInvalid || isInvalidProp,
          readonly: isReadOnly || isReadOnlyProp,
          active: isPressed,
          focus: isFocused,
          indeterminate: isIndeterminate || isIndeterminateProp,
          focusVisible: isFocusVisible
        }
      },
      /* @__PURE__ */ import_react.default.createElement(
        import_CheckboxProvider.CheckboxProvider,
        {
          isChecked: isChecked || isCheckedProp,
          isDisabled: isDisabled || isDisabledProp,
          isHovered: isHovered || isHoveredProp,
          isInvalid: isInvalid || isInvalidProp,
          isReadOnly: isReadOnly || isReadOnlyProp,
          isPressed: isPressed || isPressedProp,
          isFocused: isFocused || isFocusedProp,
          isIndeterminate: isIndeterminate || isIndeterminateProp,
          isFocusVisible
        },
        children
      )
    );
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Checkbox
});
//# sourceMappingURL=Checkbox.js.map
