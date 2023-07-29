import { useFocusRing, useFocus } from "@react-native-aria/focus";
import React, { createContext, forwardRef } from "react";
import { composeEventHandlers } from "@crossed/utils";
import { useHover, usePress } from "@react-native-aria/interactions";
const ButtonContext = createContext({});
const Button = (StyledButton) => forwardRef(
  ({
    children,
    isDisabled,
    isHovered: isHoveredProp,
    isPressed: isPressedProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    ...props
  }, ref) => {
    const { isFocusVisible, focusProps: focusRingProps } = useFocusRing();
    const { pressProps: pressableProps, isPressed } = usePress({
      isDisabled
    });
    const { isFocused, focusProps } = useFocus();
    const { isHovered, hoverProps } = useHover();
    return /* @__PURE__ */ React.createElement(
      StyledButton,
      {
        ref,
        accessibilityRole: (props == null ? void 0 : props.accessibilityRole) || "button",
        states: {
          hover: isHoveredProp || isHovered,
          focus: isFocusedProp || isFocused,
          active: isPressedProp || isPressed,
          disabled: isDisabled,
          focusVisible: isFocusVisibleProp || isFocusVisible
        },
        disabled: isDisabled,
        ...props,
        onPressIn: composeEventHandlers(
          props == null ? void 0 : props.onPressIn,
          pressableProps.onPressIn
        ),
        onPressOut: composeEventHandlers(
          props == null ? void 0 : props.onPressOut,
          pressableProps.onPressOut
        ),
        onHoverIn: composeEventHandlers(
          props == null ? void 0 : props.onHoverIn,
          hoverProps.onHoverIn
        ),
        onHoverOut: composeEventHandlers(
          props == null ? void 0 : props.onHoverOut,
          hoverProps.onHoverOut
        ),
        onFocus: composeEventHandlers(
          composeEventHandlers(props == null ? void 0 : props.onFocus, focusProps.onFocus),
          focusRingProps.onFocus
        ),
        onBlur: composeEventHandlers(
          composeEventHandlers(props == null ? void 0 : props.onBlur, focusProps.onBlur),
          focusRingProps.onBlur
        )
      },
      children
    );
  }
);
export {
  Button,
  ButtonContext
};
//# sourceMappingURL=Button.js.map
