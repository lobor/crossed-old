import React, { forwardRef } from "react";
import { useRadioGroup } from "@react-native-aria/radio";
import { useRadioGroupState } from "@react-stately/radio";
import { RadioGroupProvider } from "./RadioGroupContext";
import { useFormControlContext } from "@crossed/form-control";
const RadioGroup = (StyledRadioGroup) => forwardRef(({ children, isInvalid, ...props }, ref) => {
  const formControlContext = useFormControlContext();
  const state = useRadioGroupState({
    ...props,
    validationState: isInvalid ? "invalid" : "valid"
  });
  const radioGroupState = useRadioGroup(
    {
      ...formControlContext,
      ...props,
      "aria-label": props.accessibilityLabel
    },
    state
  );
  const contextValue = React.useMemo(() => {
    return {
      ...formControlContext,
      state
    };
  }, [formControlContext, state]);
  const radioGroupProps = React.useMemo(
    () => radioGroupState.radioGroupProps,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return /* @__PURE__ */ React.createElement(RadioGroupProvider, { state: contextValue }, /* @__PURE__ */ React.createElement(StyledRadioGroup, { ...radioGroupProps, ...props, ref }, children));
});
export {
  RadioGroup
};
//# sourceMappingURL=RadioGroup.js.map
