import React, { forwardRef } from "react";
import { AlertDialogContext } from "./Context";
import { useHover, usePress } from "@react-native-aria/interactions";
import { composeEventHandlers } from "@crossed/utils";
import { useFocusRing, useFocus } from "@react-native-aria/focus";
const AlertDialogCloseButton = (StyledAlertDialogCloseButton) => forwardRef(
  ({
    children,
    isDisabled,
    isHovered: isHoveredProp,
    isPressed: isPressedProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    ...props
  }, ref) => {
    const { hoverProps, isHovered } = useHover();
    const { pressProps: pressableProps, isPressed } = usePress({
      isDisabled
    });
    const { focusProps, isFocused } = useFocus();
    const { isFocusVisible, focusProps: focusRingProps } = useFocusRing();
    const {
      // _icon,
      onPressIn,
      onPressOut,
      onHoverIn,
      onHoverOut,
      onFocus,
      onBlur,
      ...resolvedProps
    } = props;
    const { handleClose } = React.useContext(AlertDialogContext);
    return /* @__PURE__ */ React.createElement(
      StyledAlertDialogCloseButton,
      {
        accessibilityRole: "button",
        ref,
        onPressIn: composeEventHandlers(onPressIn, pressableProps.onPressIn),
        onPressOut: composeEventHandlers(
          onPressOut,
          pressableProps.onPressOut
        ),
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
        onPress: handleClose,
        states: {
          hover: isHoveredProp || isHovered,
          focus: isFocusedProp || isFocused,
          active: isPressedProp || isPressed,
          disabled: isDisabled,
          focusVisible: isFocusVisibleProp || isFocusVisible
        },
        disabled: isDisabled,
        ...resolvedProps
      },
      children
    );
  }
);
var AlertDialogCloseButton_default = AlertDialogCloseButton;
export {
  AlertDialogCloseButton_default as default
};
//# sourceMappingURL=AlertDialogCloseButton.js.map
