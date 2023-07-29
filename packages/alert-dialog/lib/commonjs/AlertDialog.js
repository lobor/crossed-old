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
var AlertDialog_exports = {};
__export(AlertDialog_exports, {
  AlertDialog: () => AlertDialog
});
module.exports = __toCommonJS(AlertDialog_exports);
var import_react = __toESM(require("react"));
var import_react_native = require("react-native");
var import_Context = require("./Context");
var import_overlay = require("@crossed/overlay");
var import_hooks = require("@crossed/hooks");
const AlertDialog = (StyledAlertDialog) => (0, import_react.forwardRef)(
  ({
    children,
    isOpen,
    onClose,
    defaultIsOpen = false,
    initialFocusRef,
    finalFocusRef,
    avoidKeyboard = false,
    closeOnOverlayClick = true,
    isKeyboardDismissable = true,
    animationPreset = "fade",
    unmountOnExit = true,
    // @ts-ignore
    _experimentalOverlay = true,
    ...props
  }, ref) => {
    const bottomInset = (0, import_hooks.useKeyboardBottomInset)();
    const [visible, setVisible] = (0, import_hooks.useControllableState)({
      value: isOpen,
      defaultValue: defaultIsOpen,
      onChange: (val) => {
        if (!val)
          onClose && onClose();
      }
    });
    const avoidKeyboardSpacer = /* @__PURE__ */ import_react.default.createElement(
      import_react_native.View,
      {
        style: {
          // @ts-ignore
          pointerEvents: "box-none",
          width: "100%",
          height: avoidKeyboard ? bottomInset : void 0
        }
      }
    );
    const handleClose = import_react.default.useCallback(
      () => setVisible(false),
      [setVisible]
    );
    const contextValue = import_react.default.useMemo(() => {
      return {
        handleClose,
        initialFocusRef,
        finalFocusRef,
        closeOnOverlayClick,
        avoidKeyboard,
        bottomInset,
        visible
      };
    }, [
      handleClose,
      initialFocusRef,
      closeOnOverlayClick,
      finalFocusRef,
      avoidKeyboard,
      bottomInset,
      visible
    ]);
    if (!_experimentalOverlay) {
      return /* @__PURE__ */ import_react.default.createElement(import_Context.AlertDialogContext.Provider, { value: contextValue }, /* @__PURE__ */ import_react.default.createElement(StyledAlertDialog, { ...props, ref }, children, avoidKeyboard ? avoidKeyboardSpacer : null));
    }
    return /* @__PURE__ */ import_react.default.createElement(
      import_overlay.Overlay,
      {
        isOpen: visible,
        onRequestClose: handleClose,
        isKeyboardDismissable,
        animationPreset,
        unmountOnExit
      },
      /* @__PURE__ */ import_react.default.createElement(import_Context.AlertDialogContext.Provider, { value: contextValue }, /* @__PURE__ */ import_react.default.createElement(StyledAlertDialog, { ...props, ref }, children, avoidKeyboard ? avoidKeyboardSpacer : null))
    );
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AlertDialog
});
//# sourceMappingURL=AlertDialog.js.map
