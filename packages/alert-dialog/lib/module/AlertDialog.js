import React, { forwardRef } from "react";
import { View } from "react-native";
import { AlertDialogContext } from "./Context";
import { Overlay } from "@crossed/overlay";
import {
  useControllableState,
  useKeyboardBottomInset
} from "@crossed/hooks";
const AlertDialog = (StyledAlertDialog) => forwardRef(
  ({
    children,
    isOpen,
    onClose,
    defaultIsOpen = false,
    initialFocusRef,
    finalFocusRef,
    avoidKeyboard = false,
    closeOnOverlayClick = true,
    isKeyboardDismissable = true,
    animationPreset = "fade",
    unmountOnExit = true,
    // @ts-ignore
    _experimentalOverlay = true,
    ...props
  }, ref) => {
    const bottomInset = useKeyboardBottomInset();
    const [visible, setVisible] = useControllableState({
      value: isOpen,
      defaultValue: defaultIsOpen,
      onChange: (val) => {
        if (!val)
          onClose && onClose();
      }
    });
    const avoidKeyboardSpacer = /* @__PURE__ */ React.createElement(
      View,
      {
        style: {
          // @ts-ignore
          pointerEvents: "box-none",
          width: "100%",
          height: avoidKeyboard ? bottomInset : void 0
        }
      }
    );
    const handleClose = React.useCallback(
      () => setVisible(false),
      [setVisible]
    );
    const contextValue = React.useMemo(() => {
      return {
        handleClose,
        initialFocusRef,
        finalFocusRef,
        closeOnOverlayClick,
        avoidKeyboard,
        bottomInset,
        visible
      };
    }, [
      handleClose,
      initialFocusRef,
      closeOnOverlayClick,
      finalFocusRef,
      avoidKeyboard,
      bottomInset,
      visible
    ]);
    if (!_experimentalOverlay) {
      return /* @__PURE__ */ React.createElement(AlertDialogContext.Provider, { value: contextValue }, /* @__PURE__ */ React.createElement(StyledAlertDialog, { ...props, ref }, children, avoidKeyboard ? avoidKeyboardSpacer : null));
    }
    return /* @__PURE__ */ React.createElement(
      Overlay,
      {
        isOpen: visible,
        onRequestClose: handleClose,
        isKeyboardDismissable,
        animationPreset,
        unmountOnExit
      },
      /* @__PURE__ */ React.createElement(AlertDialogContext.Provider, { value: contextValue }, /* @__PURE__ */ React.createElement(StyledAlertDialog, { ...props, ref }, children, avoidKeyboard ? avoidKeyboardSpacer : null))
    );
  }
);
export {
  AlertDialog
};
//# sourceMappingURL=AlertDialog.js.map
