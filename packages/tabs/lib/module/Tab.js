import { useFocusRing, useFocus } from "@react-native-aria/focus";
import React, { memo } from "react";
import { forwardRef } from "react";
import { useHover, usePress } from "@react-native-aria/interactions";
import { composeEventHandlers } from "@crossed/utils";
import { useTab } from "./TabProvider";
const Tab = (StyledTab) => memo(
  forwardRef(
    ({
      value,
      children,
      ...props
    }, ref) => {
      const { focusProps: focusRingProps, isFocusVisible } = useFocusRing();
      const { pressProps, isPressed } = usePress({
        isDisabled: props.disabled ?? void 0
      });
      const { isFocused, focusProps } = useFocus();
      const { isHovered, hoverProps } = useHover();
      const [isActive, setIsActive] = React.useState(false);
      const { onChange, currentActiveTab } = useTab("TabContext");
      React.useEffect(() => {
        setIsActive(value === currentActiveTab);
      }, [value, currentActiveTab]);
      return /* @__PURE__ */ React.createElement(
        StyledTab,
        {
          accessibilityRole: "tab",
          ref,
          states: {
            hover: isHovered,
            focus: isFocused,
            active: isActive,
            focusVisible: isFocusVisible
          },
          ...props,
          onPressIn: composeEventHandlers(
            props == null ? void 0 : props.onPressIn,
            pressProps.onPressIn
          ),
          onPressOut: () => onChange(value),
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
          active: isActive,
          pressed: isPressed,
          focused: isFocused
        }) : children
      );
    }
  )
);
export {
  Tab
};
//# sourceMappingURL=Tab.js.map
