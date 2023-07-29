import React, { forwardRef } from "react";
import { ModalContext } from "./Context";
import { Platform, findNodeHandle, AccessibilityInfo } from "react-native";
import { FocusScope } from "@react-native-aria/focus";
import { OverlayAnimatePresence } from "./OverlayAnimatePresence";
import { useDialog } from "@react-native-aria/dialog";
import { mergeRefs } from "@crossed/utils";
const ModalContent = (StyledModalContent, AnimatePresence) => forwardRef(({ children, focusable = false, ...props }, ref) => {
  const { initialFocusRef, finalFocusRef, handleClose, visible } = React.useContext(ModalContext);
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
        StyledModalContent,
        {
          ...props,
          ref: mergedRef,
          onAccessibilityEscape: handleClose,
          "aria-modal": "true",
          accessibilityRole: Platform.OS === "web" ? "dialog" : void 0,
          accessibilityViewIsModal: true,
          focusable: Platform.OS === "web" ? focusable : void 0,
          ...dialogProps
        },
        children
      )
    )
  );
});
var ModalContent_default = ModalContent;
export {
  ModalContent_default as default
};
//# sourceMappingURL=ModalContent.js.map
