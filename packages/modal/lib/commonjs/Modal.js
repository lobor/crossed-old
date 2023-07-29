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
var Modal_exports = {};
__export(Modal_exports, {
  default: () => Modal_default
});
module.exports = __toCommonJS(Modal_exports);
var import_react = __toESM(require("react"));
var import_react_native = require("react-native");
var import_hooks = require("@crossed/hooks");
var import_Context = require("./Context");
var import_overlay = require("@crossed/overlay");
const Modal = (StyledModal) => (0, import_react.forwardRef)(
  ({
    children,
    isOpen,
    onClose,
    defaultIsOpen,
    initialFocusRef,
    finalFocusRef,
    avoidKeyboard,
    closeOnOverlayClick = true,
    isKeyboardDismissable = true,
    unmountOnExit = true,
    _experimentalOverlay = true,
    ...props
  }, ref) => {
    const bottomInset = (0, import_hooks.useKeyboardBottomInset)();
    const { useRNModal, ...remainingProps } = props;
    const [visible, setVisible] = (0, import_hooks.useControllableState)({
      value: defaultIsOpen ?? isOpen,
      onChange: (val) => {
        if (!val)
          onClose && onClose();
      }
    });
    const handleClose = import_react.default.useCallback(() => {
      setVisible(false);
    }, [setVisible]);
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
    const contextValue = import_react.default.useMemo(() => {
      return {
        handleClose,
        initialFocusRef,
        finalFocusRef,
        closeOnOverlayClick,
        visible,
        avoidKeyboard,
        bottomInset
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
      return /* @__PURE__ */ import_react.default.createElement(import_Context.ModalContext.Provider, { value: contextValue }, /* @__PURE__ */ import_react.default.createElement(StyledModal, { ...remainingProps, ref }, children, avoidKeyboard ? avoidKeyboardSpacer : null));
    }
    return /* @__PURE__ */ import_react.default.createElement(
      import_overlay.Overlay,
      {
        isOpen: visible,
        onRequestClose: handleClose,
        isKeyboardDismissable,
        useRNModal,
        unmountOnExit
      },
      /* @__PURE__ */ import_react.default.createElement(import_Context.ModalContext.Provider, { value: contextValue }, /* @__PURE__ */ import_react.default.createElement(StyledModal, { ...remainingProps, ref }, children, avoidKeyboard ? avoidKeyboardSpacer : null))
    );
  }
);
var Modal_default = Modal;
//# sourceMappingURL=Modal.js.map
