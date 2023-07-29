import React, { forwardRef } from "react";
import { AlertDialogContext } from "./Context";
import { OverlayAnimatePresence } from "./OverlayAnimatePresence";
function AlertDialogBackdrop(StyledAlertDialogBackdrop, AnimatePresence) {
  return forwardRef(
    ({ children, ...props }, ref) => {
      const { visible, closeOnOverlayClick, handleClose } = React.useContext(AlertDialogContext);
      return /* @__PURE__ */ React.createElement(
        OverlayAnimatePresence,
        {
          visible,
          AnimatePresence
        },
        /* @__PURE__ */ React.createElement(
          StyledAlertDialogBackdrop,
          {
            ref,
            onPress: () => {
              closeOnOverlayClick && handleClose();
            },
            ...props
          },
          children
        )
      );
    }
  );
}
var AlertDialogBackdrop_default = AlertDialogBackdrop;
export {
  AlertDialogBackdrop_default as default
};
//# sourceMappingURL=AlertDialogBackdrop.js.map
