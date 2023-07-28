import React, { forwardRef } from "react";
import { useLink } from "./useLink";
import { mergeRefs } from "@crossed/utils";
import { composeEventHandlers } from "@crossed/utils";
import { useFocusRing, useFocus } from "@react-native-aria/focus";
import { useHover, usePress } from "@react-native-aria/interactions";
const Link = (StyledLink) => forwardRef(
  ({
    children,
    isDisabled,
    isHovered: isHoveredProp,
    isPressed: isPressedProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    isExternal,
    href,
    onPress,
    ...props
  }, ref) => {
    const { isFocusVisible, focusProps: focusRingProps } = useFocusRing();
    const { pressProps, isPressed } = usePress({ isDisabled });
    const { isFocused, focusProps } = useFocus();
    const { isHovered, hoverProps } = useHover();
    const _ref = React.useRef(null);
    const { linkProps } = useLink({
      isExternal,
      href,
      onPress,
      _ref
    });
    return /* @__PURE__ */ React.createElement(
      StyledLink,
      {
        ref: mergeRefs([_ref, ref]),
        states: {
          hover: isHoveredProp || isHovered,
          focus: isFocusedProp || isFocused,
          active: isPressedProp || isPressed,
          disabled: isDisabled,
          focusVisible: isFocusVisibleProp || isFocusVisible
        },
        disabled: isDisabled,
        ...linkProps,
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
export {
  Link
};
//# sourceMappingURL=Link.js.map
