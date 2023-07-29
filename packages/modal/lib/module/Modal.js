import React, { forwardRef } from "react";
import { View } from "react-native";
import {
  useControllableState,
  useKeyboardBottomInset
} from "@crossed/hooks";
import { ModalContext } from "./Context";
import { Overlay } from "@crossed/overlay";
const Modal = (StyledModal) => forwardRef(
  ({
    children,
    isOpen,
    onClose,
    defaultIsOpen,
    initialFocusRef,
    finalFocusRef,
    avoidKeyboard,
    closeOnOverlayClick = true,
    isKeyboardDismissable = true,
    unmountOnExit = true,
    _experimentalOverlay = true,
    ...props
  }, ref) => {
    const bottomInset = useKeyboardBottomInset();
    const { useRNModal, ...remainingProps } = props;
    const [visible, setVisible] = useControllableState({
      value: defaultIsOpen ?? isOpen,
      onChange: (val) => {
        if (!val)
          onClose && onClose();
      }
    });
    const handleClose = React.useCallback(() => {
      setVisible(false);
    }, [setVisible]);
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
    const contextValue = React.useMemo(() => {
      return {
        handleClose,
        initialFocusRef,
        finalFocusRef,
        closeOnOverlayClick,
        visible,
        avoidKeyboard,
        bottomInset
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
      return /* @__PURE__ */ React.createElement(ModalContext.Provider, { value: contextValue }, /* @__PURE__ */ React.createElement(StyledModal, { ...remainingProps, ref }, children, avoidKeyboard ? avoidKeyboardSpacer : null));
    }
    return /* @__PURE__ */ React.createElement(
      Overlay,
      {
        isOpen: visible,
        onRequestClose: handleClose,
        isKeyboardDismissable,
        useRNModal,
        unmountOnExit
      },
      /* @__PURE__ */ React.createElement(ModalContext.Provider, { value: contextValue }, /* @__PURE__ */ React.createElement(StyledModal, { ...remainingProps, ref }, children, avoidKeyboard ? avoidKeyboardSpacer : null))
    );
  }
);
var Modal_default = Modal;
export {
  Modal_default as default
};
//# sourceMappingURL=Modal.js.map
