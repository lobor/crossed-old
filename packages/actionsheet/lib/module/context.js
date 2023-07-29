import React from "react";
const ActionsheetContext = React.createContext({
  hideDragIndicator: false,
  handleClose: () => {
  },
  initialFocusRef: { current: null },
  finalFocusRef: { current: null },
  visible: false,
  backdropVisible: false,
  closeOnOverlayClick: false,
  handleCloseBackdrop: () => {
  },
  avoidKeyboard: false,
  bottomInset: 0,
  trapFocus: true,
  snapPoints: []
});
export {
  ActionsheetContext
};
//# sourceMappingURL=context.js.map
