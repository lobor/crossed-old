import React, { forwardRef } from "react";
import { ModalContext } from "./Context";
import { OverlayAnimatePresence } from "./OverlayAnimatePresence";
const ModalBackdrop = (StyledModalBackdrop, AnimatePresence) => forwardRef(({ children, ...props }, ref) => {
  const { closeOnOverlayClick, handleClose, visible } = React.useContext(ModalContext);
  return /* @__PURE__ */ React.createElement(
    OverlayAnimatePresence,
    {
      visible,
      AnimatePresence
    },
    /* @__PURE__ */ React.createElement(
      StyledModalBackdrop,
      {
        ref,
        exit: true,
        onPress: () => {
          closeOnOverlayClick && handleClose();
        },
        ...props
      },
      children
    )
  );
});
var ModalBackdrop_default = ModalBackdrop;
export {
  ModalBackdrop_default as default
};
//# sourceMappingURL=ModalBackdrop.js.map
