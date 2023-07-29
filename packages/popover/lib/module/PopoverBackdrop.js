import React, { forwardRef } from "react";
import { OverlayAnimatePresence } from "./OverlayAnimatePresence";
import { usePopover } from "./PopoverContext";
const PopoverBackdrop = (StyledPopoverBackdrop, AnimatePresence) => forwardRef(({ children, ...props }, ref) => {
  const { value } = usePopover("PopperContext");
  const { handleClose } = value;
  return /* @__PURE__ */ React.createElement(
    OverlayAnimatePresence,
    {
      visible: value == null ? void 0 : value.isOpen,
      AnimatePresence
    },
    /* @__PURE__ */ React.createElement(
      StyledPopoverBackdrop,
      {
        ref,
        ...props,
        onPress: handleClose,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        "aria-hidden": true
      },
      children
    )
  );
});
var PopoverBackdrop_default = PopoverBackdrop;
export {
  PopoverBackdrop_default as default
};
//# sourceMappingURL=PopoverBackdrop.js.map
