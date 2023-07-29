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
var Select_exports = {};
__export(Select_exports, {
  Select: () => Select
});
module.exports = __toCommonJS(Select_exports);
var import_react = __toESM(require("react"));
var import_SelectContext = require("./SelectContext");
var import_interactions = require("@react-native-aria/interactions");
var import_hooks = require("@crossed/hooks");
var import_form_control = require("@crossed/form-control");
var import_focus = require("@react-native-aria/focus");
const Select = (StyledSelect) => (0, import_react.forwardRef)(
  ({
    children,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    isHovered: isHoveredProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    selectedValue: selectedOption,
    selectedLabel,
    onValueChange,
    defaultValue,
    onClose,
    onOpen,
    closeOnOverlayClick,
    ...props
  }, ref) => {
    const [placeholderState, setPlaceholderState] = import_react.default.useState("");
    const [isFocused, setIsFocused] = import_react.default.useState(false);
    const { isFocusVisible, focusProps } = (0, import_focus.useFocusRing)();
    const hoverRef = import_react.default.useRef(null);
    const { hoverProps, isHovered } = (0, import_interactions.useHover)({ isDisabled }, hoverRef);
    const [value, setValue] = (0, import_hooks.useControllableState)({
      value: selectedOption,
      defaultValue,
      onChange: (newValue) => {
        onValueChange && onValueChange(newValue);
      }
    });
    const [label, setLabel] = import_react.default.useState(selectedLabel);
    const [isOpen, setIsOpen] = import_react.default.useState(false);
    const handleClose = import_react.default.useCallback(() => {
      setIsOpen(false);
      onClose && onClose();
    }, [onClose, setIsOpen]);
    const inputProps = (0, import_form_control.useFormControlContext)();
    const contextValue = import_react.default.useMemo(() => {
      return {
        isHovered: isHovered || isHoveredProp,
        isFocused: isFocused || isFocusedProp,
        isDisabled: isDisabled || inputProps.isDisabled,
        isInvalid: isInvalid || inputProps.isInvalid,
        isRequired: isRequired || inputProps.isRequired,
        isReadOnly: isReadOnly || inputProps.isReadOnly,
        hoverRef,
        hoverProps,
        isFocusVisible: isFocusVisibleProp || isFocusVisible,
        setIsOpen,
        onOpen,
        isOpen,
        onValueChange: setValue,
        handleClose,
        closeOnOverlayClick,
        value,
        label,
        setLabel,
        placeholder: placeholderState,
        setPlaceholder: setPlaceholderState,
        setFocused: setIsFocused,
        focusProps
      };
    }, [
      closeOnOverlayClick,
      handleClose,
      hoverProps,
      isDisabled,
      isFocusVisible,
      isFocusVisibleProp,
      isFocused,
      isFocusedProp,
      isHovered,
      isHoveredProp,
      isInvalid,
      isOpen,
      onOpen,
      setValue,
      value,
      setLabel,
      label,
      setIsFocused,
      focusProps,
      isRequired,
      inputProps,
      isReadOnly,
      setPlaceholderState,
      placeholderState
    ]);
    return /* @__PURE__ */ import_react.default.createElement(StyledSelect, { ref, focusable: false, ...props }, /* @__PURE__ */ import_react.default.createElement(import_SelectContext.SelectContext.Provider, { value: contextValue }, children));
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Select
});
//# sourceMappingURL=Select.js.map
