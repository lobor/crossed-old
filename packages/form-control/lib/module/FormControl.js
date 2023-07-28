import React, { forwardRef } from "react";
import { useFormControlProvider, FormControlContext } from "./useFormControl";
const FormControl = (StyledFormControlBox) => forwardRef(({ ...props }, ref) => {
  const { htmlProps, ...context } = useFormControlProvider(props);
  const { isDisabled, isInvalid, ...remainingProps } = context;
  return /* @__PURE__ */ React.createElement(FormControlContext.Provider, { value: context }, /* @__PURE__ */ React.createElement(
    StyledFormControlBox,
    {
      ref,
      ...remainingProps,
      ...htmlProps,
      states: {
        disabled: isDisabled,
        invalid: isInvalid
      }
    }
  ));
});
var FormControl_default = FormControl;
export {
  FormControl_default as default
};
//# sourceMappingURL=FormControl.js.map
