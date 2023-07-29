import React, { createContext, forwardRef } from "react";
import { useCheckboxGroup } from "@react-native-aria/checkbox";
import { useCheckboxGroupState } from "@react-stately/checkbox";
import { useFormControlContext } from "@crossed/form-control";
const CheckboxGroupContext = createContext(null);
const CheckboxGroup = (StyledCheckboxGroup) => forwardRef(({ children, ...props }, ref) => {
  const state = useCheckboxGroupState({
    ...props,
    validationState: props.isInvalid ? "invalid" : "valid"
  });
  const { groupProps } = useCheckboxGroup(
    {
      ...props,
      "aria-label": props["aria-label"] ? props["aria-label"] : props.accessibilityLabel
    },
    //@ts-ignore
    state
  );
  const formControlContext = useFormControlContext();
  return /* @__PURE__ */ React.createElement(
    CheckboxGroupContext.Provider,
    {
      value: { state: { ...formControlContext, ...state } }
    },
    /* @__PURE__ */ React.createElement(StyledCheckboxGroup, { ...groupProps, ...props, ref }, children)
  );
});
export {
  CheckboxGroup,
  CheckboxGroupContext
};
//# sourceMappingURL=CheckboxGroup.js.map
