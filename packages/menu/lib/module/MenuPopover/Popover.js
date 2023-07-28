import React, { forwardRef } from "react";
import { useControllableState } from "@crossed/hooks";
import { Overlay } from "@crossed/overlay";
import { View } from "react-native";
import { PopoverProvider } from "./PopoverContext";
import { FocusScope as FocusScopeAria } from "@react-native-aria/focus";
import { PopoverContent } from "./PopoverContent";
import { MenuContext } from "../MenuContext";
const Popover = forwardRef(
  ({
    state,
    onOpen,
    trigger,
    children,
    defaultIsOpen = false,
    initialFocusRef,
    finalFocusRef,
    useRNModal,
    trapFocus = true,
    placement = "bottom",
    shouldOverlapWithTrigger = false,
    crossOffset,
    offset,
    triggerRef,
    AnimatePresence,
    shouldFlip,
    focusScope = true,
    StyledBackdrop,
    // @ts-ignore
    _experimentalOverlay = true,
    ...props
  }, ref) => {
    const [isOpen, setIsOpen] = useControllableState({
      value: state == null ? void 0 : state.isOpen,
      defaultValue: defaultIsOpen,
      onChange: (value) => {
        value ? onOpen && onOpen() : state.close && state.close();
      }
    });
    const { onClose } = React.useContext(MenuContext);
    const [bodyMounted, setBodyMounted] = React.useState(false);
    const [headerMounted, setHeaderMounted] = React.useState(false);
    let idCounter = 0;
    function uniqueId(prefix = "") {
      const id2 = ++idCounter;
      return prefix + id2;
    }
    const id = uniqueId();
    const popoverContentId = `${id}-content`;
    const headerId = `${popoverContentId}-header`;
    const bodyId = `${popoverContentId}-body`;
    const handleOpen = React.useCallback(() => {
      setIsOpen(true);
    }, [setIsOpen]);
    const handleClose = React.useCallback(() => {
      setIsOpen(false);
    }, [setIsOpen]);
    const updatedTrigger = (reference) => {
      if (trigger) {
        return trigger(
          {
            "ref": reference,
            "onPress": handleOpen,
            "aria-expanded": isOpen ? true : false,
            "aria-controls": isOpen ? popoverContentId : void 0,
            "aria-haspopup": true
          },
          { open: isOpen }
        );
      }
      return null;
    };
    const targetRefTemp = React.useRef(null);
    const targetRef = triggerRef || targetRefTemp;
    if (!_experimentalOverlay) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, updatedTrigger(targetRef), /* @__PURE__ */ React.createElement(
        PopoverProvider,
        {
          value: {
            onClose: handleClose,
            targetRef,
            strategy: "absolute",
            handleClose,
            initialFocusRef,
            finalFocusRef,
            popoverContentId,
            bodyId,
            headerId,
            headerMounted,
            bodyMounted,
            setBodyMounted,
            setHeaderMounted,
            isOpen,
            placement,
            shouldOverlapWithTrigger,
            crossOffset,
            offset,
            shouldFlip
          }
        },
        /* @__PURE__ */ React.createElement(
          StyledBackdrop,
          {
            onPress: onClose,
            focusable: false,
            accessibilityElementsHidden: true,
            importantForAccessibility: "no-hide-descendants",
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ React.createElement(View, { ref, ...props }, /* @__PURE__ */ React.createElement(
          FocusScopeComponent,
          {
            trapFocus,
            focusScope
          },
          /* @__PURE__ */ React.createElement(PopoverContent, { AnimatePresence }, children)
        ))
      ));
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, updatedTrigger(targetRef), /* @__PURE__ */ React.createElement(
      Overlay,
      {
        isOpen,
        onRequestClose: handleClose,
        isKeyboardDismissable: true,
        useRNModal,
        unmountOnExit: true
      },
      /* @__PURE__ */ React.createElement(
        PopoverProvider,
        {
          value: {
            onClose: handleClose,
            targetRef,
            strategy: "absolute",
            handleClose,
            initialFocusRef,
            finalFocusRef,
            popoverContentId,
            bodyId,
            headerId,
            headerMounted,
            bodyMounted,
            setBodyMounted,
            setHeaderMounted,
            isOpen,
            placement,
            shouldOverlapWithTrigger,
            crossOffset,
            offset,
            shouldFlip
          }
        },
        /* @__PURE__ */ React.createElement(
          StyledBackdrop,
          {
            onPress: onClose,
            focusable: false,
            accessibilityElementsHidden: true,
            importantForAccessibility: "no-hide-descendants",
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ React.createElement(View, { ref, ...props }, /* @__PURE__ */ React.createElement(
          FocusScopeComponent,
          {
            trapFocus,
            focusScope
          },
          /* @__PURE__ */ React.createElement(PopoverContent, { AnimatePresence }, children)
        ))
      )
    ));
  }
);
const FocusScopeComponent = ({ trapFocus, focusScope, children }) => {
  if (focusScope)
    return /* @__PURE__ */ React.createElement(FocusScopeAria, { contain: trapFocus, restoreFocus: true, autoFocus: true }, children);
  return children;
};
export {
  Popover
};
//# sourceMappingURL=Popover.js.map
