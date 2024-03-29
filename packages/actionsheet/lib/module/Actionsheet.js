import React, { forwardRef } from "react";
import { Platform } from "react-native";
import { useControllableState } from "@crossed/hooks";
import { Overlay } from "@crossed/overlay";
import { ActionsheetContext } from "./context";
import { StyleSheet } from "react-native";
function Actionsheet(StyledActionsheet) {
  return forwardRef(
    ({
      children,
      isOpen,
      onClose,
      onOpen,
      defaultIsOpen = false,
      trapFocus = true,
      closeOnOverlayClick = true,
      isKeyboardDismissable = true,
      useRNModal,
      initialFocusRef,
      finalFocusRef,
      unmountOnExit = true,
      snapPoints = [50],
      // @ts-ignore
      _experimentalOverlay = true,
      ...props
    }, ref) => {
      const overlayStyle = Platform.OS === "web" ? { position: "fixed" } : {};
      const [visible, setVisible] = useControllableState({
        value: isOpen,
        defaultValue: defaultIsOpen,
        onChange: (val) => {
          if (val === false) {
            onClose && onClose();
          } else {
            onOpen && onOpen();
          }
        }
      });
      const [backdropVisible, setBackdropVisible] = useControllableState({
        value: isOpen,
        defaultValue: defaultIsOpen
      });
      const handleClose = React.useCallback(() => {
        setVisible(false);
      }, [setVisible]);
      const handleCloseBackdrop = React.useCallback(() => {
        setBackdropVisible(false);
      }, [setBackdropVisible]);
      const contextValue = React.useMemo(() => {
        return {
          handleClose,
          closeOnOverlayClick,
          visible,
          backdropVisible,
          handleCloseBackdrop,
          trapFocus,
          initialFocusRef,
          finalFocusRef,
          snapPoints
        };
      }, [
        handleClose,
        handleCloseBackdrop,
        closeOnOverlayClick,
        visible,
        backdropVisible,
        trapFocus,
        initialFocusRef,
        finalFocusRef,
        snapPoints
      ]);
      if (!_experimentalOverlay) {
        return /* @__PURE__ */ React.createElement(ActionsheetContext.Provider, { value: contextValue }, /* @__PURE__ */ React.createElement(
          StyledActionsheet,
          {
            ref,
            style: [StyleSheet.absoluteFill],
            ...props
          },
          children
        ));
      }
      return /* @__PURE__ */ React.createElement(
        Overlay,
        {
          isOpen: visible,
          onRequestClose: handleClose,
          isKeyboardDismissable,
          useRNModal,
          style: overlayStyle,
          unmountOnExit
        },
        /* @__PURE__ */ React.createElement(ActionsheetContext.Provider, { value: contextValue }, /* @__PURE__ */ React.createElement(
          StyledActionsheet,
          {
            ref,
            style: [StyleSheet.absoluteFill],
            ...props
          },
          children
        ))
      );
    }
  );
}
export {
  Actionsheet
};
//# sourceMappingURL=Actionsheet.js.map
