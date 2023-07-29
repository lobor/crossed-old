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
var ActionsheetContent_exports = {};
__export(ActionsheetContent_exports, {
  default: () => ActionsheetContent_default
});
module.exports = __toCommonJS(ActionsheetContent_exports);
var import_react = __toESM(require("react"));
var import_react_native = require("react-native");
var import_context = require("./context");
var import_ActionsheetContentContext = require("./ActionsheetContentContext");
var import_OverlayAnimatePresence = require("./OverlayAnimatePresence");
var import_focus = require("@react-native-aria/focus");
var import_utils = require("@crossed/utils");
var import_dialog = require("@react-native-aria/dialog");
var import_overlays = require("@react-native-aria/overlays");
const windowHeight = import_react_native.Dimensions.get("window").height;
function ActionsheetContent(StyledActionsheetContent, AnimatePresence) {
  return (0, import_react.forwardRef)(
    ({ children, focusable = true, ...props }, ref) => {
      const {
        visible,
        handleClose,
        trapFocus,
        initialFocusRef,
        handleCloseBackdrop,
        finalFocusRef,
        snapPoints
      } = import_react.default.useContext(import_context.ActionsheetContext);
      (0, import_overlays.usePreventScroll)();
      const pan = import_react.default.useRef(new import_react_native.Animated.ValueXY()).current;
      const contentSheetHeight = import_react.default.useRef(0);
      const animationDefaultConfig = {
        type: "timing",
        duration: 200
      };
      const handleCloseCallback = import_react.default.useCallback(handleClose, [
        import_context.ActionsheetContext,
        handleClose
      ]);
      const contentSheetAnimatePosition = import_react.default.useMemo(
        () => windowHeight - snapPoints[0] * windowHeight * 0.01,
        [snapPoints]
      );
      const contentRef = import_react.default.useRef(null);
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
        const finalRefVal = finalFocusRef ? finalFocusRef.current : null;
        if (visible) {
          if (initialFocusRef && initialFocusRef.current) {
            initialFocusRef.current.focus();
          }
        } else {
          if (finalRefVal) {
            finalRefVal.focus();
          }
        }
      }, [initialFocusRef, finalFocusRef, visible]);
      const { dialogProps } = (0, import_dialog.useDialog)({ ...props }, contentRef);
      const mergedRef = (0, import_utils.mergeRefs)([ref, contentRef]);
      return /* @__PURE__ */ import_react.default.createElement(
        import_react_native.Animated.View,
        {
          style: {
            transform: [{ translateY: pan.y }],
            width: "100%",
            height: "100%"
          },
          pointerEvents: "box-none"
        },
        /* @__PURE__ */ import_react.default.createElement(
          import_focus.FocusScope,
          {
            contain: trapFocus,
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
              StyledActionsheetContent,
              {
                initial: {
                  y: windowHeight
                },
                animate: {
                  y: contentSheetAnimatePosition
                },
                exit: {
                  y: windowHeight
                },
                transition: animationDefaultConfig,
                ...props,
                ref: mergedRef,
                focusable: import_react_native.Platform.OS === "web" ? focusable : void 0,
                ...dialogProps
              },
              /* @__PURE__ */ import_react.default.createElement(
                import_ActionsheetContentContext.ActionsheetContentProvider,
                {
                  contentSheetHeight,
                  pan,
                  handleClose: handleCloseCallback,
                  handleCloseBackdrop,
                  snapPoints
                },
                children
              )
            )
          )
        )
      );
    }
  );
}
var ActionsheetContent_default = ActionsheetContent;
//# sourceMappingURL=ActionsheetContent.js.map
