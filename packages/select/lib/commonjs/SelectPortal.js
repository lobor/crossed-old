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
var SelectPortal_exports = {};
__export(SelectPortal_exports, {
  SelectPortal: () => SelectPortal
});
module.exports = __toCommonJS(SelectPortal_exports);
var import_react = __toESM(require("react"));
var import_SelectContext = require("./SelectContext");
var import_react_native = require("react-native");
var import_utils = require("@crossed/utils");
const SelectPortal = (StyledSelectPortal) => (0, import_react.forwardRef)(({ children, ...props }, ref) => {
  const {
    isOpen,
    handleClose,
    closeOnOverlayClick,
    isDisabled,
    hoverRef,
    hoverProps,
    focusProps,
    onValueChange,
    value,
    setFocused,
    setValue,
    label,
    setLabel,
    onOpen,
    placeholder,
    isReadOnly,
    ...portalProps
  } = import_react.default.useContext(import_SelectContext.SelectContext);
  const tempFix = "__GluestackPlaceholder__";
  if (import_react_native.Platform.OS !== "web") {
    return /* @__PURE__ */ import_react.default.createElement(
      StyledSelectPortal,
      {
        isOpen,
        onClose: handleClose,
        closeOnOverlayClick,
        ...props,
        ref
      },
      /* @__PURE__ */ import_react.default.createElement(
        import_SelectContext.SelectPortalContext.Provider,
        {
          value: {
            isOpen,
            handleClose,
            closeOnOverlayClick,
            isDisabled,
            hoverRef,
            hoverProps,
            focusProps,
            setValue,
            value: value === null ? tempFix : value,
            setLabel,
            label,
            isReadOnly,
            setFocused,
            onValueChange,
            placeholder,
            ...portalProps
          }
        },
        children
      )
    );
  }
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(
    "select",
    {
      disabled: isDisabled || isReadOnly,
      ...focusProps,
      ...hoverProps,
      onChange: (e) => {
        onValueChange(e.target.value);
        setLabel(e.target.options[e.target.selectedIndex].text);
        handleClose();
      },
      onKeyDown: (e) => {
        if (e.code === "Space") {
          onOpen && onOpen();
        }
      },
      ref: (0, import_utils.mergeRefs)([ref, hoverRef]),
      value: value === void 0 ? tempFix : value,
      "aria-label": placeholder,
      "aria-readonly": isReadOnly,
      style: import_react_native.StyleSheet.flatten([
        {
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0,
          zIndex: 1,
          cursor: isDisabled ? "not-allowed" : "pointer"
        }
      ]),
      onClick: onOpen,
      onFocus: () => {
        setFocused(true);
      },
      onBlur: () => {
        setFocused(false);
      }
    },
    /* @__PURE__ */ import_react.default.createElement("option", { disabled: true, value: tempFix }, placeholder),
    children
  ));
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SelectPortal
});
//# sourceMappingURL=SelectPortal.js.map
