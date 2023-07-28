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
var InputGroup_exports = {};
__export(InputGroup_exports, {
  InputGroup: () => InputGroup
});
module.exports = __toCommonJS(InputGroup_exports);
var import_react = __toESM(require("react"));
var import_InputContext = require("./InputContext");
var import_interactions = require("@react-native-aria/interactions");
var import_form_control = require("@crossed/form-control");
var import_utils = require("@crossed/utils");
var import_focus = require("@react-native-aria/focus");
const InputGroup = (StyledInputRoot) => (0, import_react.forwardRef)(
  ({
    children,
    isReadOnly,
    isDisabled,
    isInvalid,
    isRequired,
    isHovered: isHoveredProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    ...props
  }, ref) => {
    const inputRef = import_react.default.useRef();
    const inputFieldRef = import_react.default.useRef(null);
    const [isFocused, setIsFocused] = import_react.default.useState(false);
    const handleFocus = (focusState, callback) => {
      setIsFocused(focusState);
      callback();
    };
    const inputProps = (0, import_form_control.useFormControlContext)();
    const { isHovered } = (0, import_interactions.useHover)({}, inputRef);
    const { isFocusVisible } = (0, import_focus.useFocusRing)();
    const style = {};
    return /* @__PURE__ */ import_react.default.createElement(
      StyledInputRoot,
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
        ...style,
        ref: (0, import_utils.mergeRefs)([inputRef, ref])
      },
      /* @__PURE__ */ import_react.default.createElement(
        import_InputContext.InputProvider,
        {
          isDisabled: isDisabled || inputProps.isDisabled,
          isInvalid: isInvalid || inputProps.isInvalid,
          isHovered: isHovered ? isHovered : isHoveredProp,
          isFocused: isFocusedProp ? isFocusedProp : isFocused,
          isFocusVisible: isFocusVisibleProp || isFocusVisible,
          isReadOnly: isReadOnly || inputProps.isReadOnly,
          isRequired: isRequired || inputProps.isRequired,
          inputRef,
          handleFocus,
          setIsFocused,
          inputFieldRef
        },
        children
      )
    );
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InputGroup
});
//# sourceMappingURL=InputGroup.js.map
