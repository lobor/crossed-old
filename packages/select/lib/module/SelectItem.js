import React, { forwardRef } from "react";
import { Platform } from "react-native";
import { SelectPortalContext } from "./SelectContext";
const SelectItem = (StyledSelectItem, StyledSelectItemText) => forwardRef(
  ({
    // isDisabled,
    // isFocused,
    // isFocusVisible,
    // isHovered,
    // isInvalid,
    label,
    value,
    ...props
  }, ref) => {
    const {
      onValueChange,
      handleClose,
      value: activeValue,
      setLabel
    } = React.useContext(SelectPortalContext);
    if (Platform.OS !== "web") {
      return /* @__PURE__ */ React.createElement(
        StyledSelectItem,
        {
          ref,
          onPress: () => {
            if (!props.isDisabled) {
              onValueChange(value);
              setLabel(label);
              handleClose();
            }
          },
          states: {
            active: activeValue === value
          },
          ...props
        },
        /* @__PURE__ */ React.createElement(StyledSelectItemText, null, label)
      );
    }
    return /* @__PURE__ */ React.createElement("option", { value, disabled: props.isDisabled, ref }, label);
  }
);
export {
  SelectItem
};
//# sourceMappingURL=SelectItem.js.map
