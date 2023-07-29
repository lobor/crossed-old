import React, { forwardRef } from "react";
import {
  Animated,
  Dimensions,
  findNodeHandle,
  AccessibilityInfo,
  Platform
} from "react-native";
import { ActionsheetContext } from "./context";
import { ActionsheetContentProvider } from "./ActionsheetContentContext";
import { OverlayAnimatePresence } from "./OverlayAnimatePresence";
import { FocusScope } from "@react-native-aria/focus";
import { mergeRefs } from "@crossed/utils";
import { useDialog } from "@react-native-aria/dialog";
import { usePreventScroll } from "@react-native-aria/overlays";
const windowHeight = Dimensions.get("window").height;
function ActionsheetContent(StyledActionsheetContent, AnimatePresence) {
  return forwardRef(
    ({ children, focusable = true, ...props }, ref) => {
      const {
        visible,
        handleClose,
        trapFocus,
        initialFocusRef,
        handleCloseBackdrop,
        finalFocusRef,
        snapPoints
      } = React.useContext(ActionsheetContext);
      usePreventScroll();
      const pan = React.useRef(new Animated.ValueXY()).current;
      const contentSheetHeight = React.useRef(0);
      const animationDefaultConfig = {
        type: "timing",
        duration: 200
      };
      const handleCloseCallback = React.useCallback(handleClose, [
        ActionsheetContext,
        handleClose
      ]);
      const contentSheetAnimatePosition = React.useMemo(
        () => windowHeight - snapPoints[0] * windowHeight * 0.01,
        [snapPoints]
      );
      const contentRef = React.useRef(null);
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
      const { dialogProps } = useDialog({ ...props }, contentRef);
      const mergedRef = mergeRefs([ref, contentRef]);
      return /* @__PURE__ */ React.createElement(
        Animated.View,
        {
          style: {
            transform: [{ translateY: pan.y }],
            width: "100%",
            height: "100%"
          },
          pointerEvents: "box-none"
        },
        /* @__PURE__ */ React.createElement(
          FocusScope,
          {
            contain: trapFocus,
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
                focusable: Platform.OS === "web" ? focusable : void 0,
                ...dialogProps
              },
              /* @__PURE__ */ React.createElement(
                ActionsheetContentProvider,
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
export {
  ActionsheetContent_default as default
};
//# sourceMappingURL=ActionsheetContent.js.map
