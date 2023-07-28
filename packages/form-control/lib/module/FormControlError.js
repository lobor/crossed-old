import React, { forwardRef } from "react";
import { combineContextAndProps } from "@crossed/utils";
import { useFormControlContext } from "./useFormControl";
const FormControlError = (StyledFormControlError) => forwardRef(({ children, ...props }, ref) => {
  const formControlContext = useFormControlContext();
  const combinedProps = combineContextAndProps(formControlContext, props);
  const { isInvalid, ...remainingProps } = combinedProps;
  React.useEffect(() => {
    remainingProps == null ? void 0 : remainingProps.setHasFeedbackText(true);
    return () => {
      remainingProps == null ? void 0 : remainingProps.setHasFeedbackText(false);
    };
  });
  return isInvalid && children ? /* @__PURE__ */ React.createElement(StyledFormControlError, { ref, ...remainingProps }, children) : null;
});
var FormControlError_default = FormControlError;
export {
  FormControlError_default as default
};
//# sourceMappingURL=FormControlError.js.map
