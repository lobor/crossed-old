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
var Actionsheet_exports = {};
__export(Actionsheet_exports, {
  Actionsheet: () => Actionsheet
});
module.exports = __toCommonJS(Actionsheet_exports);
var import_react = __toESM(require("react"));
var import_react_native = require("react-native");
var import_hooks = require("@crossed/hooks");
var import_overlay = require("@crossed/overlay");
var import_context = require("./context");
var import_react_native2 = require("react-native");
function Actionsheet(StyledActionsheet) {
  return (0, import_react.forwardRef)(
    ({
      children,
      isOpen,
      onClose,
      onOpen,
      defaultIsOpen = false,
      trapFocus = true,
      closeOnOverlayClick = true,
      isKeyboardDismissable = true,
      useRNModal,
      initialFocusRef,
      finalFocusRef,
      unmountOnExit = true,
      snapPoints = [50],
      // @ts-ignore
      _experimentalOverlay = true,
      ...props
    }, ref) => {
      const overlayStyle = import_react_native.Platform.OS === "web" ? { position: "fixed" } : {};
      const [visible, setVisible] = (0, import_hooks.useControllableState)({
        value: isOpen,
        defaultValue: defaultIsOpen,
        onChange: (val) => {
          if (val === false) {
            onClose && onClose();
          } else {
            onOpen && onOpen();
          }
        }
      });
      const [backdropVisible, setBackdropVisible] = (0, import_hooks.useControllableState)({
        value: isOpen,
        defaultValue: defaultIsOpen
      });
      const handleClose = import_react.default.useCallback(() => {
        setVisible(false);
      }, [setVisible]);
      const handleCloseBackdrop = import_react.default.useCallback(() => {
        setBackdropVisible(false);
      }, [setBackdropVisible]);
      const contextValue = import_react.default.useMemo(() => {
        return {
          handleClose,
          closeOnOverlayClick,
          visible,
          backdropVisible,
          handleCloseBackdrop,
          trapFocus,
          initialFocusRef,
          finalFocusRef,
          snapPoints
        };
      }, [
        handleClose,
        handleCloseBackdrop,
        closeOnOverlayClick,
        visible,
        backdropVisible,
        trapFocus,
        initialFocusRef,
        finalFocusRef,
        snapPoints
      ]);
      if (!_experimentalOverlay) {
        return /* @__PURE__ */ import_react.default.createElement(import_context.ActionsheetContext.Provider, { value: contextValue }, /* @__PURE__ */ import_react.default.createElement(
          StyledActionsheet,
          {
            ref,
            style: [import_react_native2.StyleSheet.absoluteFill],
            ...props
          },
          children
        ));
      }
      return /* @__PURE__ */ import_react.default.createElement(
        import_overlay.Overlay,
        {
          isOpen: visible,
          onRequestClose: handleClose,
          isKeyboardDismissable,
          useRNModal,
          style: overlayStyle,
          unmountOnExit
        },
        /* @__PURE__ */ import_react.default.createElement(import_context.ActionsheetContext.Provider, { value: contextValue }, /* @__PURE__ */ import_react.default.createElement(
          StyledActionsheet,
          {
            ref,
            style: [import_react_native2.StyleSheet.absoluteFill],
            ...props
          },
          children
        ))
      );
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Actionsheet
});
//# sourceMappingURL=Actionsheet.js.map
