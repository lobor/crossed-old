import React, { forwardRef } from "react";
import { useCheckbox } from "./CheckboxProvider";
const CheckboxIcon = (StyledCheckboxIcon) => forwardRef(({ children, ...props }, ref) => {
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, isChecked && /* @__PURE__ */ React.createElement(
    StyledCheckboxIcon,
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
  ));
});
var CheckboxIcon_default = CheckboxIcon;
export {
  CheckboxIcon_default as default
};
//# sourceMappingURL=CheckboxIcon.js.map
