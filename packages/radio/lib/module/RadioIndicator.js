import React, { forwardRef } from "react";
import { useRadio } from "./RadioProvider";
const RadioIndicator = (StyledRadioIndicator) => forwardRef(({ children, ...props }, ref) => {
  const {
    isChecked,
    isDisabled,
    isFocusVisible,
    isInvalid,
    isHovered,
    isReadOnly,
    isIndeterminate,
    isFocused,
    isPressed
  } = useRadio("RadioContext");
  return /* @__PURE__ */ React.createElement(
    StyledRadioIndicator,
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
  RadioIndicator
};
//# sourceMappingURL=RadioIndicator.js.map
