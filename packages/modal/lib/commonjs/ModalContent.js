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
var ModalContent_exports = {};
__export(ModalContent_exports, {
  default: () => ModalContent_default
});
module.exports = __toCommonJS(ModalContent_exports);
var import_react = __toESM(require("react"));
var import_Context = require("./Context");
var import_react_native = require("react-native");
var import_focus = require("@react-native-aria/focus");
var import_OverlayAnimatePresence = require("./OverlayAnimatePresence");
var import_dialog = require("@react-native-aria/dialog");
var import_utils = require("@crossed/utils");
const ModalContent = (StyledModalContent, AnimatePresence) => (0, import_react.forwardRef)(({ children, focusable = false, ...props }, ref) => {
  const { initialFocusRef, finalFocusRef, handleClose, visible } = import_react.default.useContext(import_Context.ModalContext);
  const contentRef = import_react.default.useRef(null);
  const mergedRef = (0, import_utils.mergeRefs)([contentRef, ref]);
  const { dialogProps } = (0, import_dialog.useDialog)({ ...props }, mergedRef);
  import_react.default.useEffect(() => {
    if (contentRef) {
      const reactTag = (0, import_react_native.findNodeHandle)(contentRef.current);
      if (reactTag) {
        import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
        import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
        import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
        import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
        import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
        import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
        import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
        import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  }, [visible, contentRef]);
  import_react.default.useEffect(() => {
    var _a, _b;
    if (visible) {
      if (initialFocusRef && (initialFocusRef == null ? void 0 : initialFocusRef.current)) {
        if (initialFocusRef.current.hasOwnProperty("focus")) {
          (_a = initialFocusRef == null ? void 0 : initialFocusRef.current) == null ? void 0 : _a.focus();
        }
      }
    } else {
      if (finalFocusRef && (finalFocusRef == null ? void 0 : finalFocusRef.current)) {
        if (finalFocusRef.current.hasOwnProperty("focus")) {
          (_b = finalFocusRef == null ? void 0 : finalFocusRef.current) == null ? void 0 : _b.focus();
        }
      }
    }
  }, [initialFocusRef, finalFocusRef, visible]);
  return /* @__PURE__ */ import_react.default.createElement(
    import_focus.FocusScope,
    {
      contain: visible,
      autoFocus: visible && !initialFocusRef,
      restoreFocus: visible && !finalFocusRef
    },
    /* @__PURE__ */ import_react.default.createElement(
      import_OverlayAnimatePresence.OverlayAnimatePresence,
      {
        visible,
        AnimatePresence
      },
      /* @__PURE__ */ import_react.default.createElement(
        StyledModalContent,
        {
          ...props,
          ref: mergedRef,
          onAccessibilityEscape: handleClose,
          "aria-modal": "true",
          accessibilityRole: import_react_native.Platform.OS === "web" ? "dialog" : void 0,
          accessibilityViewIsModal: true,
          focusable: import_react_native.Platform.OS === "web" ? focusable : void 0,
          ...dialogProps
        },
        children
      )
    )
  );
});
var ModalContent_default = ModalContent;
//# sourceMappingURL=ModalContent.js.map
