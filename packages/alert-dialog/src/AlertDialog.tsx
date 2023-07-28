import React, { forwardRef } from 'react';
import { View } from 'react-native';
import { AlertDialogContext } from './Context';
import { Overlay } from '@crossed/overlay';
import type { IAlertDialogProps } from './types';
import {
  useControllableState,
  useKeyboardBottomInset,
} from '@crossed/hooks';

export const AlertDialog = <T,>(StyledAlertDialog: React.ComponentType<T>) =>
  forwardRef(
    (
      {
        children,
        isOpen,
        onClose,
        defaultIsOpen = false,
        initialFocusRef,
        finalFocusRef,
        avoidKeyboard = false,
        closeOnOverlayClick = true,
        isKeyboardDismissable = true,
        animationPreset = 'fade',
        unmountOnExit = true,
        // @ts-ignore
        _experimentalOverlay = true,
        ...props
      }: T & IAlertDialogProps,
      ref?: any
    ) => {
      const bottomInset = useKeyboardBottomInset();

      const [visible, setVisible] = useControllableState({
        value: isOpen,
        defaultValue: defaultIsOpen,
        onChange: (val: any) => {
          if (!val) onClose && onClose();
        },
      });
      const avoidKeyboardSpacer = (
        <View
          style={{
            // @ts-ignore
            pointerEvents: 'box-none',
            width: '100%',
            height: avoidKeyboard ? bottomInset : undefined,
          }}
        />
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
          visible,
        };
      }, [
        handleClose,
        initialFocusRef,
        closeOnOverlayClick,
        finalFocusRef,
        avoidKeyboard,
        bottomInset,
        visible,
      ]);

      if (!_experimentalOverlay) {
        return (
          <AlertDialogContext.Provider value={contextValue}>
            <StyledAlertDialog {...(props as T)} ref={ref}>
              {children}
              {avoidKeyboard ? avoidKeyboardSpacer : null}
            </StyledAlertDialog>
          </AlertDialogContext.Provider>
        );
      }

      return (
        <Overlay
          isOpen={visible}
          onRequestClose={handleClose}
          isKeyboardDismissable={isKeyboardDismissable}
          animationPreset={animationPreset}
          unmountOnExit={unmountOnExit}
        >
          <AlertDialogContext.Provider value={contextValue}>
            <StyledAlertDialog {...(props as T)} ref={ref}>
              {children}
              {avoidKeyboard ? avoidKeyboardSpacer : null}
            </StyledAlertDialog>
          </AlertDialogContext.Provider>
        </Overlay>
      );
    }
  );
