import React, { forwardRef } from "react";
import { SelectContext } from "./SelectContext";
import { mergeRefs } from "@crossed/utils";
import { Keyboard } from "react-native";
const SelectTrigger = (StyledSelectTrigger) => forwardRef(({ children, accessibilityLabel, ...props }, ref) => {
  const {
    isDisabled,
    hoverRef,
    setIsOpen,
    onOpen,
    isFocused,
    isFocusVisible,
    isHovered,
    isInvalid,
    isReadOnly
  } = React.useContext(SelectContext);
  return /* @__PURE__ */ React.createElement(
    StyledSelectTrigger,
    {
      onPress: () => {
        if (!isReadOnly) {
          Keyboard.dismiss();
          setIsOpen(true);
          onOpen && onOpen();
        }
      },
      states: {
        focus: isFocused,
        focusVisible: isFocusVisible,
        hover: isHovered,
        disabled: isDisabled,
        invalid: isInvalid
      },
      disabled: isDisabled,
      accessibilityLabel,
      accessibilityRole: "button",
      ref: mergeRefs([ref, hoverRef]),
      focusable: false,
      ...props
    },
    children
  );
});
export {
  SelectTrigger
};
//# sourceMappingURL=SelectTrigger.js.map
