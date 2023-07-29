import React, { forwardRef } from "react";
import { ModalContext } from "./Context";
import { useHover, usePress } from "@react-native-aria/interactions";
import { composeEventHandlers } from "@crossed/utils";
import { useFocusRing, useFocus } from "@react-native-aria/focus";
const ModalCloseButton = (StyledModalCloseButton) => forwardRef((props, ref) => {
  const { hoverProps, isHovered } = useHover();
  const { pressProps, isPressed } = usePress({
    isDisabled: props.isDisabled
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
    children,
    ...resolvedProps
  } = props;
  const { handleClose } = React.useContext(ModalContext);
  return /* @__PURE__ */ React.createElement(
    StyledModalCloseButton,
    {
      accessibilityRole: "button",
      ref,
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
      onPress: handleClose,
      states: {
        hover: isHovered,
        focus: isFocused,
        active: isPressed,
        focusVisible: isFocusVisible
      },
      ...resolvedProps
    },
    children
  );
});
var ModalCloseButton_default = ModalCloseButton;
export {
  ModalCloseButton_default as default
};
//# sourceMappingURL=ModalCloseButton.js.map
