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
var TextareaRoot_exports = {};
__export(TextareaRoot_exports, {
  TextareaRoot: () => TextareaRoot
});
module.exports = __toCommonJS(TextareaRoot_exports);
var import_react = __toESM(require("react"));
var import_TextareaContext = require("./TextareaContext");
var import_interactions = require("@react-native-aria/interactions");
var import_form_control = require("@crossed/form-control");
var import_utils = require("@crossed/utils");
var import_focus = require("@react-native-aria/focus");
const TextareaRoot = (StyledTextareaRoot) => (0, import_react.forwardRef)(
  ({
    children,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    isHovered = false,
    isFocused: isFocusedProp = false,
    isFocusVisible: isFocusVisibleProp,
    ...props
  }, ref) => {
    const inputRef = import_react.default.useRef();
    const { isHovered: isHoveredProp } = (0, import_interactions.useHover)({}, inputRef);
    const { isFocusVisible } = (0, import_focus.useFocusRing)();
    const [isFocused, setIsFocused] = import_react.default.useState(false);
    const handleFocus = (focusState, callback) => {
      setIsFocused(focusState);
      callback();
    };
    const inputProps = (0, import_form_control.useFormControlContext)();
    return /* @__PURE__ */ import_react.default.createElement(
      StyledTextareaRoot,
      {
        states: {
          hover: isHovered ? isHovered : isHoveredProp,
          focus: isFocusedProp ? isFocusedProp : isFocused,
          disabled: isDisabled || inputProps.isDisabled,
          invalid: isInvalid || inputProps.isInvalid,
          readonly: isReadOnly || inputProps.isReadOnly,
          required: isRequired || inputProps.isRequired,
          focusVisible: isFocusVisibleProp || isFocusVisible
        },
        ...props,
        ref: (0, import_utils.mergeRefs)([inputRef, ref])
      },
      /* @__PURE__ */ import_react.default.createElement(
        import_TextareaContext.TextareaProvider,
        {
          isDisabled: isDisabled || inputProps.isDisabled,
          isInvalid: isInvalid || inputProps.isInvalid,
          isFocused: isFocusedProp ? isFocusedProp : isFocused,
          isHovered: isHovered ? isHovered : isHoveredProp,
          isReadOnly: isReadOnly || inputProps.isReadOnly,
          isRequired: isRequired || inputProps.isRequired,
          inputRef,
          handleFocus
        },
        children
      )
    );
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TextareaRoot
});
//# sourceMappingURL=TextareaRoot.js.map
