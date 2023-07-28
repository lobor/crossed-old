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
var Radio_web_exports = {};
__export(Radio_web_exports, {
  Radio: () => Radio
});
module.exports = __toCommonJS(Radio_web_exports);
var import_react = __toESM(require("react"));
var import_RadioProvider = require("./RadioProvider");
var import_visually_hidden = require("@react-aria/visually-hidden");
var import_focus = require("@react-native-aria/focus");
var import_interactions = require("@react-native-aria/interactions");
var import_radio = require("@react-native-aria/radio");
var import_RadioGroupContext = require("./RadioGroupContext");
var import_utils = require("@crossed/utils");
var import_form_control = require("@crossed/form-control");
const RadioComponent = (0, import_react.memo)(
  (0, import_react.forwardRef)(
    ({
      StyledRadio,
      inputProps,
      inputRef,
      combinedProps,
      isChecked: isCheckedProp,
      isDisabled: isDisabledProp,
      isFocusVisible: isFocusVisibleProp,
      isHovered: isHoveredProp,
      isInvalid: isInvalidProp,
      isReadOnly: isReadOnlyProp,
      isIndeterminate: isIndeterminateProp,
      isFocused: isFocusedProp,
      isPressed: isPressedProp,
      children,
      ...props
    }, ref) => {
      const { isInvalid, isReadOnly, isIndeterminate, ...restProps } = combinedProps;
      const { disabled: isDisabled, checked: isChecked } = inputProps;
      const _ref = import_react.default.useRef(null);
      const { isHovered } = (0, import_interactions.useHover)({}, _ref);
      const { focusProps, isFocusVisible } = (0, import_focus.useFocusRing)();
      const [isFocused, setFocused] = import_react.default.useState(isFocusedProp);
      const [isPressed, setPressed] = import_react.default.useState(isPressedProp);
      const handleFocus = () => {
        setFocused(true);
      };
      const handleBlur = () => {
        isFocusedProp ? setFocused(true) : setFocused(false);
      };
      const handlePressIn = () => {
        setPressed(true);
      };
      const handlePressOut = () => {
        isPressedProp ? setPressed(true) : setPressed(false);
      };
      return /* @__PURE__ */ import_react.default.createElement(
        StyledRadio,
        {
          ...props,
          ...restProps,
          accessibilityRole: "label",
          ref: _ref,
          onMouseDown: handlePressIn,
          onMouseUp: handlePressOut,
          states: {
            readonly: isReadOnly,
            intermediate: isIndeterminate,
            checked: isChecked,
            focusVisible: isFocusVisible,
            disabled: isDisabled,
            invalid: isInvalid,
            hover: isHovered
          }
        },
        /* @__PURE__ */ import_react.default.createElement(
          import_RadioProvider.RadioProvider,
          {
            isChecked: isChecked || isCheckedProp,
            isDisabled: isDisabled || isDisabledProp,
            isFocusVisible: isFocusVisible || isFocusVisibleProp,
            isHovered: isHovered || isHoveredProp,
            isInvalid: isInvalid || isInvalidProp,
            isReadOnly: isReadOnly || isReadOnlyProp,
            isIndeterminate: isIndeterminate || isIndeterminateProp,
            isFocused: isFocused || isFocusedProp,
            isPressed: isPressed || isPressedProp
          },
          /* @__PURE__ */ import_react.default.createElement(import_visually_hidden.VisuallyHidden, null, /* @__PURE__ */ import_react.default.createElement(
            "input",
            {
              ...inputProps,
              ...focusProps,
              ref,
              onFocus: ((0, import_utils.composeEventHandlers)(handleFocus), focusProps.onFocus),
              onBlur: ((0, import_utils.composeEventHandlers)(handleBlur), focusProps.onBlur)
            }
          )),
          children
        )
      );
    }
  )
);
const Radio = (StyledRadio) => (0, import_react.forwardRef)(
  ({
    isFocusVisible: isFocusVisibleProp,
    isHovered: isHoveredProp,
    isIndeterminate: isIndeterminateProp,
    isFocused: isFocusedProp,
    isPressed: isPressedProp,
    isInvalid: isInvalidProp,
    children,
    ...props
  }, ref) => {
    var _a;
    const formControlContext = (0, import_form_control.useFormControlContext)();
    const contextState = (0, import_RadioGroupContext.useRadioGroup)("RadioGroupContext");
    const combinedProps = {
      ...formControlContext,
      ...contextState,
      ...props
    };
    const inputRef = import_react.default.useRef(null);
    const radioState = (0, import_radio.useRadio)(
      {
        ...combinedProps,
        "aria-label": props["aria-label"] ?? props.accessibilityLabel,
        children
      },
      contextState.state.state ?? {},
      inputRef
    );
    const inputProps = import_react.default.useMemo(
      () => radioState.inputProps,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [radioState.inputProps.checked, radioState.inputProps.disabled]
    );
    const contextCombinedProps = import_react.default.useMemo(() => {
      return { ...combinedProps };
    }, [(0, import_utils.stableHash)(combinedProps)]);
    if (!contextState) {
      console.error("Error: Radio must be wrapped inside a Radio.Group");
    }
    const isInvalid = ((_a = contextCombinedProps == null ? void 0 : contextCombinedProps.state) == null ? void 0 : _a.validationState) === "invalid" ? true : false;
    return /* @__PURE__ */ import_react.default.createElement(
      RadioComponent,
      {
        StyledRadio,
        inputProps,
        combinedProps: contextCombinedProps,
        children,
        ref,
        isFocusVisible: isFocusVisibleProp,
        isHovered: isHoveredProp,
        isIndeterminate: isIndeterminateProp,
        isFocused: isFocusedProp,
        isPressed: isPressedProp,
        isInvalid: isInvalid || isInvalidProp
      }
    );
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Radio
});
//# sourceMappingURL=Radio.web.js.map
