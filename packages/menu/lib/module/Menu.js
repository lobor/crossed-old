import React, { forwardRef, useRef } from "react";
import { useMenu, useMenuTrigger } from "@react-native-aria/menu";
import { useTreeState, useMenuTriggerState } from "react-stately";
import { Popover } from "./MenuPopover/Popover";
import { MenuItem } from "./MenuItem";
import { OverlayAnimatePresence } from "./MenuPopover/OverlayAnimatePresence";
import { useTypeSelect } from "./useTypeSelect";
import { useControlledState } from "@react-stately/utils";
import { MenuContext } from "./MenuContext";
import { mergeRefs } from "@crossed/utils";
const Menu = ({
  StyledMenu,
  StyledMenuItem,
  StyledBackdrop,
  AnimatePresence
}) => {
  return forwardRef(
    ({
      crossOffset,
      closeOnSelect,
      defaultIsOpen,
      isOpen: isOpenProp,
      onOpen,
      onClose,
      offset,
      placement = "bottom start",
      shouldFlip = true,
      trigger,
      shouldOverlapWithTrigger,
      _experimentalOverlay = true,
      ...props
    }, ref) => {
      const [isOpen, setIsOpen] = useControlledState(
        isOpenProp,
        defaultIsOpen,
        (isOpenValue) => {
          isOpenValue ? onOpen == null ? void 0 : onOpen() : onClose == null ? void 0 : onClose();
        }
      );
      const handleClose = () => {
        setIsOpen(false);
      };
      const showBackdrop = React.useRef(false);
      const state = useMenuTriggerState({
        isOpen: isOpen || false,
        //@ts-ignore
        closeOnSelect,
        onOpenChange: (isOpenValue) => {
          setIsOpen(isOpenValue);
        },
        defaultOpen: defaultIsOpen
      });
      const triggerRef = React.useRef(null);
      const { menuTriggerProps, menuProps } = useMenuTrigger(
        {},
        state,
        triggerRef
      );
      const updatedTrigger = () => {
        return trigger({
          ...menuTriggerProps,
          ref: triggerRef
        });
      };
      if (!_experimentalOverlay) {
        return /* @__PURE__ */ React.createElement(MenuContext.Provider, { value: { onClose: handleClose, showBackdrop } }, updatedTrigger(), /* @__PURE__ */ React.createElement(
          MenuComponent,
          {
            ...menuProps,
            ...props,
            isOpen: state.isOpen,
            AnimatePresence,
            autoFocus: state.focusStrategy || true,
            onClose: () => state.close(),
            StyledMenu,
            StyledMenuItem,
            closeOnSelect,
            ref
          }
        ));
      }
      return /* @__PURE__ */ React.createElement(MenuContext.Provider, { value: { onClose: handleClose, showBackdrop } }, updatedTrigger(), /* @__PURE__ */ React.createElement(
        Popover,
        {
          placement,
          triggerRef,
          state,
          AnimatePresence,
          shouldOverlapWithTrigger,
          crossOffset,
          offset,
          shouldFlip,
          StyledBackdrop
        },
        /* @__PURE__ */ React.createElement(
          MenuComponent,
          {
            ...menuProps,
            ...props,
            isOpen: state.isOpen,
            AnimatePresence,
            autoFocus: state.focusStrategy || true,
            onClose: () => state.close(),
            StyledMenu,
            StyledMenuItem,
            closeOnSelect,
            ref
          }
        )
      ));
    }
  );
};
const MenuComponent = forwardRef(
  ({
    StyledMenu,
    StyledMenuItem,
    AnimatePresence,
    isOpen,
    closeOnSelect,
    ...props
  }, ref) => {
    const state = useTreeState(props);
    const menuRef = useRef(null);
    const mergeRef = mergeRefs([menuRef, ref]);
    const { menuProps } = useMenu(props, state, menuRef);
    const {
      onClose,
      onOpen,
      selectionMode,
      onSelectChange,
      shouldFlip,
      children,
      placement,
      offset,
      crossOffset,
      trigger,
      StyledBackdrop,
      ...restProps
    } = props;
    const typeSelectProps = useTypeSelect(state);
    return /* @__PURE__ */ React.createElement(
      OverlayAnimatePresence,
      {
        visible: isOpen,
        AnimatePresence
      },
      /* @__PURE__ */ React.createElement(
        StyledMenu,
        {
          ...menuProps,
          ...typeSelectProps,
          ref: mergeRef,
          ...restProps
        },
        [...state.collection].map((item) => /* @__PURE__ */ React.createElement(
          MenuItem,
          {
            StyledMenuItem,
            key: item.key,
            item,
            state,
            onAction: props.onAction,
            onClose: props.onClose,
            closeOnSelect
          }
        ))
      )
    );
  }
);
export {
  Menu
};
//# sourceMappingURL=Menu.js.map
