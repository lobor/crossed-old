import React, { forwardRef } from "react";
import { useHover } from "@react-native-aria/interactions";
import { useToggleState } from "@react-stately/toggle";
import { useFormControlContext } from "@crossed/form-control";
import { mergeRefs } from "@crossed/utils";
function Switch(StyledSwitch) {
  return forwardRef(
    ({
      disabled,
      isDisabled,
      isInvalid,
      defaultValue,
      accessibilityLabel,
      accessibilityHint,
      onToggle,
      value,
      onValueChange,
      ...props
    }, ref) => {
      const formControlContext = useFormControlContext();
      const combinedProps = { ...formControlContext, ...props };
      const state = useToggleState({
        defaultSelected: !(defaultValue === null || defaultValue === void 0) ? defaultValue : !(value === null || value === void 0) ? value : false
      });
      const checked = !(value === null || value === void 0) ? value : state.isSelected;
      const _ref = React.useRef(null);
      const { isHovered } = useHover({}, _ref);
      const mergedRef = mergeRefs([ref, _ref]);
      return /* @__PURE__ */ React.createElement(
        StyledSwitch,
        {
          states: {
            hover: isHovered,
            disabled: disabled || isDisabled || combinedProps.isDisabled,
            invalid: isInvalid || combinedProps.isInvalid,
            checked: value || checked
          },
          accessibilityLabel,
          accessibilityHint,
          disabled: disabled || isDisabled || combinedProps.isDisabled,
          onValueChange: (val) => {
            onValueChange && onValueChange(val);
            onToggle ? onToggle(val) : state.toggle();
          },
          value: value || checked,
          ...combinedProps,
          ref: mergedRef
        }
      );
    }
  );
}
export {
  Switch
};
//# sourceMappingURL=Switch.js.map
