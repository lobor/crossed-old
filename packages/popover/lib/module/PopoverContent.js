import React, { forwardRef } from "react";
import { useKeyboardDismissable } from "@crossed/hooks";
import { usePopover } from "./PopoverContext";
import { Platform, findNodeHandle, AccessibilityInfo } from "react-native";
import { mergeRefs } from "@crossed/utils";
import { useOverlayPosition } from "@react-native-aria/overlays";
import { OverlayAnimatePresence } from "./OverlayAnimatePresence";
import { FocusScope } from "@react-native-aria/focus";
import { useDialog } from "@react-native-aria/dialog";
import { PopoverContentProvider } from "./PopoverContext";
const PopoverContent = (StyledPopoverContent, AnimatePresence) => forwardRef(({ children, style, ...props }, ref) => {
  const { value } = usePopover("PopoverContext");
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
  const contentRef = React.useRef(null);
  React.useEffect(() => {
    if (contentRef) {
      const reactTag = findNodeHandle(contentRef.current);
      if (reactTag) {
        AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  }, [isOpen, contentRef]);
  const { dialogProps } = useDialog(
    { initialFocusRef, ...props },
    contentRef
  );
  React.useEffect(() => {
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
  useKeyboardDismissable({
    enabled: true,
    callback: handleClose
  });
  const accessibilityProps = Platform.OS === "web" ? {
    "accessibilityRole": "dialog",
    "aria-labelledby": headerMounted ? headerId : void 0,
    "aria-describedby": bodyMounted ? bodyId : void 0
  } : {};
  const overlayRef = React.useRef(null);
  const { overlayProps } = useOverlayPosition({
    placement,
    targetRef,
    overlayRef,
    crossOffset,
    offset,
    shouldOverlapWithTrigger,
    shouldFlip
  });
  const mergedRef = mergeRefs([ref, overlayRef, contentRef]);
  return /* @__PURE__ */ React.createElement(PopoverContentProvider, { value }, /* @__PURE__ */ React.createElement(
    OverlayAnimatePresence,
    {
      visible: isOpen,
      AnimatePresence
    },
    /* @__PURE__ */ React.createElement(
      StyledPopoverContent,
      {
        nativeID: popoverContentId,
        ...accessibilityProps,
        ...props,
        ref: mergedRef,
        isOpen,
        collapsable: false,
        ...dialogProps,
        focusable: Platform.OS === "web" ? false : void 0,
        style: {
          position: "absolute",
          ...overlayProps == null ? void 0 : overlayProps.style,
          ...style
        }
      },
      /* @__PURE__ */ React.createElement(FocusScope, { contain: trapFocus, restoreFocus: true, autoFocus: true }, children)
    )
  ));
});
var PopoverContent_default = PopoverContent;
export {
  PopoverContent_default as default
};
//# sourceMappingURL=PopoverContent.js.map
