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
var Textarea_exports = {};
__export(Textarea_exports, {
  Textarea: () => Textarea
});
module.exports = __toCommonJS(Textarea_exports);
var import_react = __toESM(require("react"));
var import_form_control = require("@crossed/form-control");
var import_TextareaContext = require("./TextareaContext");
const Textarea = (StyledTextarea) => (0, import_react.forwardRef)(
  ({
    children,
    multiline = true,
    onKeyPress,
    accessibilityLabel = "Input Field",
    accessibilityHint,
    accessibilityRole = "text",
    ...props
  }, ref) => {
    const {
      isDisabled,
      isReadOnly,
      isFocused,
      isInvalid,
      isHovered,
      isFocusVisible,
      isRequired,
      handleFocus
    } = (0, import_TextareaContext.useTextarea)("TextareaContext");
    const textareaProps = (0, import_form_control.useFormControl)({
      isDisabled: props.isDisabled,
      isInvalid: props.isInvalid,
      isReadOnly: props.isReadOnly,
      isRequired: props.isRequired,
      nativeID: props.nativeID
    });
    return /* @__PURE__ */ import_react.default.createElement(
      StyledTextarea,
      {
        ref,
        ...props,
        states: {
          focus: isFocused,
          invalid: isInvalid,
          readonly: isReadOnly,
          required: isRequired,
          hover: isHovered,
          focusVisible: isFocusVisible,
          disabled: isDisabled || textareaProps.isDisabled
        },
        accessible: true,
        accessibilityLabel,
        accessibilityHint,
        accessibilityRole,
        accessibilityRequired: isRequired || textareaProps.isRequired,
        accessibilityInvalid: isInvalid || textareaProps.isInvalid,
        accessibilityState: {
          invalid: isInvalid || textareaProps.isInvalid,
          disabled: isDisabled || textareaProps.isDisabled,
          selected: isFocused
        },
        accessibilityElementsHidden: isDisabled,
        editable: isDisabled || isReadOnly ? false : true,
        disabled: isDisabled || textareaProps.isDisabled,
        multiline,
        onKeyPress: (e) => {
          e.persist();
          onKeyPress && onKeyPress(e);
        },
        onFocus: (e) => {
          handleFocus(
            true,
            (props == null ? void 0 : props.onFocus) ? () => props == null ? void 0 : props.onFocus(e) : () => {
            }
          );
        },
        onBlur: (e) => {
          handleFocus(
            false,
            (props == null ? void 0 : props.onBlur) ? () => props == null ? void 0 : props.onBlur(e) : () => {
            }
          );
        }
      },
      children
    );
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Textarea
});
//# sourceMappingURL=Textarea.js.map
