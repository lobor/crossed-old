import React, { forwardRef } from "react";
import { useTooltipContext } from "./context";
import { mergeRefs } from "@crossed/utils";
import { useOverlayPosition } from "@react-native-aria/overlays";
import { OverlayAnimatePresence } from "./OverlayAnimatePresence";
import { Platform } from "react-native";
function TooltipContent(StyledTooltipContent, AnimatePresence) {
  return forwardRef(({ children, style, ...props }, ref) => {
    const { value } = useTooltipContext("TooltipContext");
    const {
      isOpen,
      targetRef,
      placement,
      crossOffset,
      offset,
      shouldFlip,
      shouldOverlapWithTrigger
    } = value;
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
    const mergedRef = mergeRefs([ref, overlayRef]);
    return /* @__PURE__ */ React.createElement(
      OverlayAnimatePresence,
      {
        visible: isOpen,
        AnimatePresence
      },
      /* @__PURE__ */ React.createElement(
        StyledTooltipContent,
        {
          ...props,
          ref: mergedRef,
          accessibilityRole: Platform.OS === "web" ? "tooltip" : void 0,
          style: {
            ...overlayProps.style,
            position: "absolute",
            ...style
          }
        },
        children
      )
    );
  });
}
export {
  TooltipContent
};
//# sourceMappingURL=TooltipContent.js.map
