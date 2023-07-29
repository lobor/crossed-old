import React, { forwardRef } from "react";
import { useCheckbox } from "./CheckboxProvider";
const CheckboxIndicator = (StyledCheckboxIndicator) => forwardRef(({ children, ...props }, ref) => {
  const {
    isChecked,
    isDisabled,
    isHovered,
    isInvalid,
    isReadOnly,
    isPressed,
    isFocused,
    isIndeterminate,
    isFocusVisible
  } = useCheckbox("CheckboxContext");
  return /* @__PURE__ */ React.createElement(
    StyledCheckboxIndicator,
    {
      states: {
        hover: isHovered,
        checked: isChecked,
        disabled: isDisabled,
        focusVisible: isFocusVisible,
        invalid: isInvalid,
        readOnly: isReadOnly,
        active: isPressed,
        focused: isFocused,
        indeterminate: isIndeterminate
      },
      ...props,
      ref
    },
    children
  );
});
var CheckboxIndicator_default = CheckboxIndicator;
export {
  CheckboxIndicator_default as default
};
//# sourceMappingURL=CheckboxIndicator.js.map
