import React from "react";
const ModalContext = React.createContext({
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
  ModalContext
};
//# sourceMappingURL=Context.js.map
