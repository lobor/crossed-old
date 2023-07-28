import { useFocusRing, useFocus } from "@react-native-aria/focus";
import React, { forwardRef } from "react";
import { useHover, usePress } from "@react-native-aria/interactions";
import { composeEventHandlers } from "@crossed/utils";
function Pressable(StyledPressable) {
  return forwardRef(
    ({
      children,
      ...props
    }, ref) => {
      const { focusProps: focusRingProps, isFocusVisible } = useFocusRing();
      const { pressProps, isPressed } = usePress({
        isDisabled: props.disabled ?? void 0
      });
      const { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps } = useHover();
      return /* @__PURE__ */ React.createElement(
        StyledPressable,
        {
          ref,
          states: {
            hover: isHovered,
            focus: isFocused,
            active: isPressed,
            disabled: props.disabled,
            focusVisible: isFocusVisible
          },
          ...props,
          onPressIn: composeEventHandlers(
            props == null ? void 0 : props.onPressIn,
            pressProps.onPressIn
          ),
          onPressOut: composeEventHandlers(
            props == null ? void 0 : props.onPressOut,
            pressProps.onPressOut
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
        typeof children === "function" ? children({
          hovered: isHovered,
          focused: isFocused,
          pressed: isPressed,
          disabled: props.disabled ?? void 0,
          focusVisible: isFocusVisible
        }) : children
      );
    }
  );
}
var Pressable_default = Pressable;
export {
  Pressable_default as default
};
//# sourceMappingURL=Pressable.js.map
