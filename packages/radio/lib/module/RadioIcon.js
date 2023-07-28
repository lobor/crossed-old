import React, { forwardRef } from "react";
import { useRadio } from "./RadioProvider";
const RadioIcon = (StyledRadioIcon) => forwardRef(({ children, ...props }, ref) => {
  const {
    isHovered,
    isChecked,
    isDisabled,
    isFocusVisible,
    isInvalid,
    isFocused,
    isReadOnly,
    isIndeterminate,
    isPressed
  } = useRadio("RadioContext");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, isChecked && /* @__PURE__ */ React.createElement(
    StyledRadioIcon,
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
  ));
});
export {
  RadioIcon
};
//# sourceMappingURL=RadioIcon.js.map
