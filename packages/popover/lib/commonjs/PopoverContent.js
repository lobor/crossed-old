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
var PopoverContent_exports = {};
__export(PopoverContent_exports, {
  default: () => PopoverContent_default
});
module.exports = __toCommonJS(PopoverContent_exports);
var import_react = __toESM(require("react"));
var import_hooks = require("@crossed/hooks");
var import_PopoverContext = require("./PopoverContext");
var import_react_native = require("react-native");
var import_utils = require("@crossed/utils");
var import_overlays = require("@react-native-aria/overlays");
var import_OverlayAnimatePresence = require("./OverlayAnimatePresence");
var import_focus = require("@react-native-aria/focus");
var import_dialog = require("@react-native-aria/dialog");
var import_PopoverContext2 = require("./PopoverContext");
const PopoverContent = (StyledPopoverContent, AnimatePresence) => (0, import_react.forwardRef)(({ children, style, ...props }, ref) => {
  const { value } = (0, import_PopoverContext.usePopover)("PopoverContext");
  const {
    targetRef,
    initialFocusRef,
    finalFocusRef,
    popoverContentId,
    headerMounted,
    bodyMounted,
    bodyId,
    headerId,
    isOpen,
    placement,
    shouldOverlapWithTrigger,
    crossOffset,
    offset,
    trapFocus,
    handleClose,
    shouldFlip
  } = value;
  const contentRef = import_react.default.useRef(null);
  import_react.default.useEffect(() => {
    if (contentRef) {
      const reactTag = (0, import_react_native.findNodeHandle)(contentRef.current);
      if (reactTag) {
        import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  }, [isOpen, contentRef]);
  const { dialogProps } = (0, import_dialog.useDialog)(
    { initialFocusRef, ...props },
    contentRef
  );
  import_react.default.useEffect(() => {
    const finalFocusRefCurrentVal = finalFocusRef == null ? void 0 : finalFocusRef.current;
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
    return () => {
      if (finalFocusRefCurrentVal) {
        finalFocusRefCurrentVal.focus();
      }
    };
  }, [finalFocusRef, initialFocusRef]);
  (0, import_hooks.useKeyboardDismissable)({
    enabled: true,
    callback: handleClose
  });
  const accessibilityProps = import_react_native.Platform.OS === "web" ? {
    "accessibilityRole": "dialog",
    "aria-labelledby": headerMounted ? headerId : void 0,
    "aria-describedby": bodyMounted ? bodyId : void 0
  } : {};
  const overlayRef = import_react.default.useRef(null);
  const { overlayProps } = (0, import_overlays.useOverlayPosition)({
    placement,
    targetRef,
    overlayRef,
    crossOffset,
    offset,
    shouldOverlapWithTrigger,
    shouldFlip
  });
  const mergedRef = (0, import_utils.mergeRefs)([ref, overlayRef, contentRef]);
  return /* @__PURE__ */ import_react.default.createElement(import_PopoverContext2.PopoverContentProvider, { value }, /* @__PURE__ */ import_react.default.createElement(
    import_OverlayAnimatePresence.OverlayAnimatePresence,
    {
      visible: isOpen,
      AnimatePresence
    },
    /* @__PURE__ */ import_react.default.createElement(
      StyledPopoverContent,
      {
        nativeID: popoverContentId,
        ...accessibilityProps,
        ...props,
        ref: mergedRef,
        isOpen,
        collapsable: false,
        ...dialogProps,
        focusable: import_react_native.Platform.OS === "web" ? false : void 0,
        style: {
          position: "absolute",
          ...overlayProps == null ? void 0 : overlayProps.style,
          ...style
        }
      },
      /* @__PURE__ */ import_react.default.createElement(import_focus.FocusScope, { contain: trapFocus, restoreFocus: true, autoFocus: true }, children)
    )
  ));
});
var PopoverContent_default = PopoverContent;
//# sourceMappingURL=PopoverContent.js.map
