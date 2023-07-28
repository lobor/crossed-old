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
  PopoverContent: () => PopoverContent
});
module.exports = __toCommonJS(PopoverContent_exports);
var import_react = __toESM(require("react"));
var import_hooks = require("@crossed/hooks");
var import_PopoverContext = require("./PopoverContext");
var import_react_native = require("react-native");
var import_utils = require("@crossed/utils");
var import_overlays = require("@react-native-aria/overlays");
const PopoverContent = (0, import_react.forwardRef)(
  ({ children, style, ...props }, ref) => {
    const { value } = (0, import_PopoverContext.usePopover)("PopoverContext");
    const {
      targetRef,
      onClose,
      initialFocusRef,
      finalFocusRef,
      popoverContentId,
      placement,
      shouldOverlapWithTrigger,
      crossOffset,
      offset,
      shouldFlip,
      isOpen
    } = value;
    const contentRef = import_react.default.useRef(null);
    import_react.default.useEffect(() => {
      if (contentRef) {
        const reactTag = (0, import_react_native.findNodeHandle)(contentRef.current);
        if (reactTag) {
          import_react_native.AccessibilityInfo.isScreenReaderEnabled().then((enabled) => {
            if (enabled) {
              import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
              import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
              import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
              import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
              import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
              import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
              import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
              import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
              import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
              import_react_native.AccessibilityInfo.setAccessibilityFocus(reactTag);
            }
          });
        }
      }
    }, [isOpen, contentRef]);
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
      callback: onClose
    });
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
    return /* @__PURE__ */ import_react.default.createElement(
      import_react_native.View,
      {
        nativeID: popoverContentId,
        ...props,
        ref: mergedRef,
        collapsable: false,
        style: {
          position: "absolute",
          ...overlayProps == null ? void 0 : overlayProps.style,
          ...style
        },
        accessible: true
      },
      children
    );
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PopoverContent
});
//# sourceMappingURL=PopoverContent.js.map
