import React, { forwardRef, useEffect } from "react";
import { SelectContext } from "./SelectContext";
const SelectInput = (StyledSelectInput) => forwardRef(({ placeholder: placeholderProp, ...props }, ref) => {
  const { setValue, value, label, isDisabled, placeholder, setPlaceholder } = React.useContext(SelectContext);
  useEffect(() => {
    setPlaceholder && setPlaceholder(placeholderProp);
  }, [placeholderProp, setPlaceholder]);
  return /* @__PURE__ */ React.createElement(
    StyledSelectInput,
    {
      ref,
      states: {
        disabled: isDisabled
      },
      disabled: isDisabled,
      "aria-hidden": true,
      editable: false,
      focusable: false,
      importantForAccessibility: "no",
      placeholder,
      value: label ? label : value ? value : "",
      pointerEvents: "none",
      onChangeText: (text) => setValue(text),
      ...props
    }
  );
});
export {
  SelectInput
};
//# sourceMappingURL=SelectInput.js.map
