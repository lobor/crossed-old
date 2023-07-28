import React, { forwardRef } from "react";
import { combineContextAndProps } from "@crossed/utils";
import { useFormControlContext } from "./useFormControl";
const FormControlHelper = (StyledFormControlHelper) => forwardRef(({ children, ...props }, ref) => {
  const formControlContext = useFormControlContext();
  const combinedProps = combineContextAndProps(formControlContext, props);
  React.useEffect(() => {
    combinedProps == null ? void 0 : combinedProps.setHasHelpText(true);
    return () => {
      combinedProps == null ? void 0 : combinedProps.setHasHelpText(false);
    };
  });
  return /* @__PURE__ */ React.createElement(
    StyledFormControlHelper,
    {
      ref,
      ...combinedProps,
      nativeID: combinedProps == null ? void 0 : combinedProps.labelId
    },
    children
  );
});
var FormControlHelper_default = FormControlHelper;
export {
  FormControlHelper_default as default
};
//# sourceMappingURL=FormControlHelper.js.map
