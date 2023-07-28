import React, { forwardRef } from "react";
import { useRadio } from "./RadioProvider";
const RadioLabel = (StyledRadioLabel) => forwardRef(({ children, ...props }, ref) => {
  const {
    isHovered,
    isChecked,
    isDisabled,
    isFocusVisible,
    isInvalid,
    isReadOnly,
    isIndeterminate,
    isFocused,
    isPressed
  } = useRadio("RadioContext");
  return /* @__PURE__ */ React.createElement(
    StyledRadioLabel,
    {
      states: {
        checked: isChecked,
        disabled: isDisabled,
        focusVisible: isFocused || isFocusVisible,
        hover: isHovered,
        invalid: isInvalid,
        readonly: isReadOnly,
        indeterminate: isIndeterminate,
        focus: isFocused,
        active: isPressed
      },
      ...props,
      ref
    },
    children
  );
});
export {
  RadioLabel
};
//# sourceMappingURL=RadioLabel.js.map
