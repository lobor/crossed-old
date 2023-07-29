import React, { forwardRef } from "react";
import { useControllableState } from "@crossed/hooks";
import { Overlay } from "@crossed/overlay";
import { PopoverProvider } from "./PopoverContext";
const Popover = (StyledPopover) => forwardRef(
  ({
    onOpen,
    trigger,
    onClose,
    isOpen: isOpenProp,
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
    isKeyboardDismissable = true,
    shouldFlip,
    // @ts-ignore
    _experimentalOverlay = true,
    ...props
  }, ref) => {
    const [isOpen, setIsOpen] = useControllableState({
      value: isOpenProp,
      defaultValue: defaultIsOpen,
      onChange: (value) => {
        value ? onOpen && onOpen() : onClose && onClose();
      }
    });
    const [bodyMounted, setBodyMounted] = React.useState(false);
    const [headerMounted, setHeaderMounted] = React.useState(false);
    var idCounter = 0;
    function uniqueId(prefix = "") {
      var id2 = ++idCounter;
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
    };
    const targetRef = React.useRef(null);
    const contextValue = React.useMemo(() => {
      return {
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
        trapFocus,
        shouldFlip
      };
    }, [
      targetRef,
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
      trapFocus,
      shouldFlip
    ]);
    if (!_experimentalOverlay) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, updatedTrigger(targetRef), /* @__PURE__ */ React.createElement(PopoverProvider, { value: contextValue }, /* @__PURE__ */ React.createElement(StyledPopover, { ref, ...props }, children)));
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, updatedTrigger(targetRef), /* @__PURE__ */ React.createElement(
      Overlay,
      {
        isOpen,
        onRequestClose: handleClose,
        isKeyboardDismissable,
        useRNModal,
        unmountOnExit: true
      },
      /* @__PURE__ */ React.createElement(PopoverProvider, { value: contextValue }, /* @__PURE__ */ React.createElement(StyledPopover, { ref, ...props }, children))
    ));
  }
);
export {
  Popover
};
//# sourceMappingURL=Popover.js.map
