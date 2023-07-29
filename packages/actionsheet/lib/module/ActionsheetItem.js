import { useFocusRing, useFocus } from "@react-native-aria/focus";
import React, { forwardRef, createContext } from "react";
import { composeEventHandlers } from "@crossed/utils";
import { usePress, useHover } from "@react-native-aria/interactions";
const ActionsheetContext = createContext({});
function ActionsheetItem(StyledActionsheetItem) {
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
      var _a;
      const { isFocusVisible, focusProps: focusRingProps } = useFocusRing();
      const { pressProps, isPressed } = usePress({ isDisabled });
      const { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps } = useHover();
      return /* @__PURE__ */ React.createElement(
        StyledActionsheetItem,
        {
          ref,
          disabled: isDisabled,
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
          ),
          ...props,
          states: {
            hover: isHoveredProp || isHovered,
            focus: isFocusedProp || isFocused,
            // @ts-ignore
            active: isPressedProp || isPressed || ((_a = props == null ? void 0 : props.states) == null ? void 0 : _a.active),
            disabled: isDisabled,
            focusVisible: isFocusVisibleProp || isFocusVisible
          }
        },
        children
      );
    }
  );
}
export {
  ActionsheetContext,
  ActionsheetItem
};
//# sourceMappingURL=ActionsheetItem.js.map
