import React, { forwardRef } from "react";
import { useHover, usePress } from "@react-native-aria/interactions";
import { useFocusRing, useFocus } from "@react-native-aria/focus";
import { composeEventHandlers } from "@crossed/utils";
function Fab(StyledFab) {
  return forwardRef(
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
      const { pressProps, isPressed } = usePress({ isDisabled });
      const { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps } = useHover();
      return /* @__PURE__ */ React.createElement(
        StyledFab,
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
        children
      );
    }
  );
}
var Fab_default = Fab;
export {
  Fab_default as default
};
//# sourceMappingURL=Fab.js.map
