import React, { forwardRef } from "react";
import { usePress, useHover } from "@react-native-aria/interactions";
import { useFocusRing, useFocus } from "@react-native-aria/focus";
import { composeEventHandlers } from "@crossed/utils";
import { usePopoverContent } from "./PopoverContext";
const PopoverCloseButton = (StyledPopoverCloseButton) => forwardRef(
  ({
    children,
    isDisabled,
    isHovered: isHoveredProp,
    isPressed: isPressedProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    ...props
  }, ref) => {
    const { value } = usePopoverContent("PopoverContext");
    const { handleClose } = value;
    const { hoverProps, isHovered } = useHover();
    const { pressProps, isPressed } = usePress({ isDisabled });
    const { focusProps, isFocused } = useFocus();
    const { isFocusVisible, focusProps: focusRingProps } = useFocusRing();
    const {
      onPressIn,
      onPressOut,
      onHoverIn,
      onHoverOut,
      onFocus,
      onBlur,
      ...resolvedProps
    } = props;
    return /* @__PURE__ */ React.createElement(
      StyledPopoverCloseButton,
      {
        accessibilityRole: "button",
        states: {
          hover: isHoveredProp || isHovered,
          focus: isFocusedProp || isFocused,
          active: isPressedProp || isPressed,
          disabled: isDisabled,
          focusVisible: isFocusVisibleProp || isFocusVisible
        },
        ref,
        disabled: isDisabled,
        onPressIn: composeEventHandlers(onPressIn, pressProps.onPressIn),
        onPressOut: composeEventHandlers(onPressOut, pressProps.onPressOut),
        onHoverIn: composeEventHandlers(onHoverIn, hoverProps.onHoverIn),
        onHoverOut: composeEventHandlers(onHoverOut, hoverProps.onHoverOut),
        onFocus: composeEventHandlers(
          composeEventHandlers(onFocus, focusProps.onFocus),
          focusRingProps.onFocus
        ),
        onBlur: composeEventHandlers(
          composeEventHandlers(onBlur, focusProps.onBlur),
          focusRingProps.onBlur
        ),
        onPress: () => {
          handleClose();
        },
        ...resolvedProps
      },
      children
    );
  }
);
var PopoverCloseButton_default = PopoverCloseButton;
export {
  PopoverCloseButton_default as default
};
//# sourceMappingURL=PopoverCloseButton.js.map
