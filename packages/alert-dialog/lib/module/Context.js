import React from "react";
const AlertDialogContext = React.createContext({
  handleClose: () => {
  },
  initialFocusRef: { current: null },
  finalFocusRef: { current: null },
  visible: false,
  closeOnOverlayClick: false,
  avoidKeyboard: false,
  bottomInset: 0
});
export {
  AlertDialogContext
};
//# sourceMappingURL=Context.js.map
