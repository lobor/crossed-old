import React, { forwardRef } from "react";
import { ActionsheetContext } from "./context";
import { OverlayAnimatePresence } from "./OverlayAnimatePresence";
function ActionsheetBackdrop(StyledActionsheetBackdrop, AnimatePresence) {
  return forwardRef(
    ({ children, ...props }, ref) => {
      const { closeOnOverlayClick, handleClose, backdropVisible } = React.useContext(ActionsheetContext);
      return /* @__PURE__ */ React.createElement(
        OverlayAnimatePresence,
        {
          visible: backdropVisible,
          AnimatePresence
        },
        /* @__PURE__ */ React.createElement(
          StyledActionsheetBackdrop,
          {
            ref,
            onPress: () => {
              closeOnOverlayClick && handleClose();
            },
            accessibilityElementsHidden: true,
            importantForAccessibility: "no-hide-descendants",
            "aria-hidden": true,
            ...props
          },
          children
        )
      );
    }
  );
}
var ActionsheetBackdrop_default = ActionsheetBackdrop;
export {
  ActionsheetBackdrop_default as default
};
//# sourceMappingURL=ActionsheetBackdrop.js.map
