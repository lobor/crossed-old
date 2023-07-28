import React, { forwardRef } from "react";
import { useInput } from "./InputContext";
import { useFormControl } from "@crossed/form-control";
const InputIcon = (StyledInputIcon) => forwardRef(({ children, onPress, ...props }, ref) => {
  const { inputFieldRef, isDisabled } = useInput("InputContext");
  const handleFocus = () => {
    var _a;
    (_a = inputFieldRef == null ? void 0 : inputFieldRef.current) == null ? void 0 : _a.focus();
  };
  const inputProps = useFormControl({
    isDisabled: props.isDisabled
  });
  return /* @__PURE__ */ React.createElement(
    StyledInputIcon,
    {
      states: {
        disabled: isDisabled || inputProps.isDisabled
      },
      onPress: () => {
        handleFocus();
        if (onPress)
          onPress();
      },
      accessibilityElementsHidden: true,
      focusable: false,
      ref,
      ...props
    },
    children
  );
});
export {
  InputIcon
};
//# sourceMappingURL=InputIcon.js.map
