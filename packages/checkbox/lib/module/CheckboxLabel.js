import React, { forwardRef } from "react";
import { useCheckbox } from "./CheckboxProvider";
const CheckboxLabel = (StyledCheckboxLabel) => forwardRef(({ children, ...props }, ref) => {
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
    StyledCheckboxLabel,
    {
      states: {
        hover: isHovered,
        checked: isChecked,
        disabled: isDisabled,
        focusVisible: isFocusVisible,
        invalid: isInvalid,
        readOnly: isReadOnly,
        pressed: isPressed,
        focused: isFocused,
        indeterminate: isIndeterminate
      },
      ...props,
      ref
    },
    children
  );
});
var CheckboxLabel_default = CheckboxLabel;
export {
  CheckboxLabel_default as default
};
//# sourceMappingURL=CheckboxLabel.js.map
