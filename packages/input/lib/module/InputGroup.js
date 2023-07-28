import React, { forwardRef } from "react";
import { InputProvider } from "./InputContext";
import { useHover } from "@react-native-aria/interactions";
import { useFormControlContext } from "@crossed/form-control";
import { mergeRefs } from "@crossed/utils";
import { useFocusRing } from "@react-native-aria/focus";
const InputGroup = (StyledInputRoot) => forwardRef(
  ({
    children,
    isReadOnly,
    isDisabled,
    isInvalid,
    isRequired,
    isHovered: isHoveredProp,
    isFocused: isFocusedProp,
    isFocusVisible: isFocusVisibleProp,
    ...props
  }, ref) => {
    const inputRef = React.useRef();
    const inputFieldRef = React.useRef(null);
    const [isFocused, setIsFocused] = React.useState(false);
    const handleFocus = (focusState, callback) => {
      setIsFocused(focusState);
      callback();
    };
    const inputProps = useFormControlContext();
    const { isHovered } = useHover({}, inputRef);
    const { isFocusVisible } = useFocusRing();
    const style = {};
    return /* @__PURE__ */ React.createElement(
      StyledInputRoot,
      {
        states: {
          hover: isHovered ? isHovered : isHoveredProp,
          focus: isFocusedProp ? isFocusedProp : isFocused,
          disabled: isDisabled || inputProps.isDisabled,
          invalid: isInvalid || inputProps.isInvalid,
          readonly: isReadOnly || inputProps.isReadOnly,
          required: isRequired || inputProps.isRequired,
          focusVisible: isFocusVisibleProp || isFocusVisible
        },
        ...props,
        ...style,
        ref: mergeRefs([inputRef, ref])
      },
      /* @__PURE__ */ React.createElement(
        InputProvider,
        {
          isDisabled: isDisabled || inputProps.isDisabled,
          isInvalid: isInvalid || inputProps.isInvalid,
          isHovered: isHovered ? isHovered : isHoveredProp,
          isFocused: isFocusedProp ? isFocusedProp : isFocused,
          isFocusVisible: isFocusVisibleProp || isFocusVisible,
          isReadOnly: isReadOnly || inputProps.isReadOnly,
          isRequired: isRequired || inputProps.isRequired,
          inputRef,
          handleFocus,
          setIsFocused,
          inputFieldRef
        },
        children
      )
    );
  }
);
export {
  InputGroup
};
//# sourceMappingURL=InputGroup.js.map
