import React, { useCallback, useMemo } from "react";
import { composeEventHandlers } from "@crossed/utils";
import { useHover, usePress } from "@react-native-aria/interactions";
import { useFocusRing } from "@react-native-aria/focus";
import { useMenuItem } from "@react-native-aria/menu";
import { Platform } from "react-native";
const usePressed = (onPressIn, onPressOut) => {
  if (Platform.OS === "web") {
    return {
      pressEvents: {
        onMouseDown: onPressIn,
        onMouseUp: onPressOut,
        onTouchStart: onPressIn,
        onTouchEnd: onPressOut
      }
    };
  }
  return {
    pressEvents: {
      onPressIn,
      onPressOut
    }
  };
};
function MenuItem({
  StyledMenuItem,
  item,
  state,
  onAction,
  onClose,
  closeOnSelect
}) {
  const itemProps = { ...item.props };
  const ref = React.useRef(null);
  const {
    menuItemProps: { focusable, ...restMenuProps }
  } = useMenuItem(
    {
      "key": item.key,
      onAction,
      onClose,
      closeOnSelect,
      "aria-label": itemProps.textValue,
      ...itemProps
    },
    state,
    ref
  );
  const toggleSelection = useCallback(() => {
    if (Platform.OS === "web") {
      state.selectionManager.toggleSelection(item.key);
    }
  }, [state.selectionManager, item.key]);
  const { focusProps: focusRingProps, isFocusVisible } = useFocusRing();
  const { pressProps, isPressed } = usePress({});
  const { isHovered, hoverProps } = useHover();
  const isFocused = state.selectionManager.focusedKey === item.key;
  const { children, ...rest } = item.props;
  const { pressEvents } = usePressed(
    // @ts-ignore
    composeEventHandlers(
      composeEventHandlers(rest == null ? void 0 : rest.onPressIn, pressProps.onPressIn),
      composeEventHandlers(restMenuProps.onPressIn, toggleSelection)
    ),
    composeEventHandlers(
      composeEventHandlers(rest == null ? void 0 : rest.onPressOut, pressProps.onPressOut),
      restMenuProps.onPressOut
    )
  );
  const pressEvents1 = useMemo(
    () => !state.selectionManager.isDisabled(item.key) ? pressEvents : {},
    [item.key, pressEvents, state.selectionManager]
  );
  return /* @__PURE__ */ React.createElement(
    StyledMenuItem,
    {
      ref,
      focusable: focusable === void 0 ? false : focusable,
      ...restMenuProps,
      states: {
        hover: isHovered,
        focus: isFocused,
        active: isPressed,
        focusVisible: isFocusVisible,
        selected: state.selectionManager.isSelected(item.key),
        disabled: state.selectionManager.isDisabled(item.key)
      },
      ...rest,
      ...pressEvents1,
      onHoverIn: composeEventHandlers(rest == null ? void 0 : rest.onHoverIn, hoverProps.onHoverIn),
      onHoverOut: composeEventHandlers(rest == null ? void 0 : rest.onHoverOut, hoverProps.onHoverOut),
      onFocus: composeEventHandlers(
        composeEventHandlers(rest == null ? void 0 : rest.onFocus, focusRingProps.onFocus),
        restMenuProps == null ? void 0 : restMenuProps.onFocus
      ),
      onBlur: composeEventHandlers(
        composeEventHandlers(rest == null ? void 0 : rest.onBlur, focusRingProps.onBlur),
        restMenuProps == null ? void 0 : restMenuProps.onBlur
      )
    },
    children
  );
}
export {
  MenuItem
};
//# sourceMappingURL=MenuItem.js.map
