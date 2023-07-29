import React, { forwardRef } from "react";
import { AlertDialogContext } from "./Context";
import { Platform, AccessibilityInfo, findNodeHandle } from "react-native";
import { FocusScope } from "@react-native-aria/focus";
import { OverlayAnimatePresence } from "./OverlayAnimatePresence";
import { useDialog } from "@react-native-aria/dialog";
import { mergeRefs } from "@crossed/utils";
const AlertDialogContent = (StyledAlertDialogContent, AnimatePresence) => forwardRef(({ children, focusable = false, ...props }, ref) => {
  const { initialFocusRef, finalFocusRef, handleClose, visible } = React.useContext(AlertDialogContext);
  const contentRef = React.useRef(null);
  const mergedRef = mergeRefs([contentRef, ref]);
  const { dialogProps } = useDialog({ ...props }, mergedRef);
  React.useEffect(() => {
    if (contentRef) {
      const reactTag = findNodeHandle(contentRef.current);
      if (reactTag) {
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  }, [visible, contentRef]);
  React.useEffect(() => {
    var _a, _b;
    if (visible) {
      if (initialFocusRef && (initialFocusRef == null ? void 0 : initialFocusRef.current)) {
        (_a = initialFocusRef == null ? void 0 : initialFocusRef.current) == null ? void 0 : _a.focus();
      }
    } else {
      if (finalFocusRef && (finalFocusRef == null ? void 0 : finalFocusRef.current)) {
        (_b = finalFocusRef == null ? void 0 : finalFocusRef.current) == null ? void 0 : _b.focus();
      }
    }
  }, [initialFocusRef, finalFocusRef, visible]);
  return /* @__PURE__ */ React.createElement(
    FocusScope,
    {
      contain: visible,
      autoFocus: visible && !initialFocusRef,
      restoreFocus: visible && !finalFocusRef
    },
    /* @__PURE__ */ React.createElement(
      OverlayAnimatePresence,
      {
        visible,
        AnimatePresence
      },
      /* @__PURE__ */ React.createElement(
        StyledAlertDialogContent,
        {
          ...props,
          ref: mergedRef,
          onAccessibilityEscape: handleClose,
          exit: true,
          "aria-modal": "true",
          accessibilityRole: Platform.OS === "web" ? "alertdialog" : void 0,
          accessibilityViewIsModal: true,
          focusable: Platform.OS === "web" ? focusable : void 0,
          ...dialogProps
        },
        children
      )
    )
  );
});
var AlertDialogContent_default = AlertDialogContent;
export {
  AlertDialogContent_default as default
};
//# sourceMappingURL=AlertDialogContent.js.map
