import React, { forwardRef } from "react";
import { TextareaProvider } from "./TextareaContext";
import { useHover } from "@react-native-aria/interactions";
import { useFormControlContext } from "@crossed/form-control";
import { mergeRefs } from "@crossed/utils";
import { useFocusRing } from "@react-native-aria/focus";
const TextareaRoot = (StyledTextareaRoot) => forwardRef(
  ({
    children,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    isHovered = false,
    isFocused: isFocusedProp = false,
    isFocusVisible: isFocusVisibleProp,
    ...props
  }, ref) => {
    const inputRef = React.useRef();
    const { isHovered: isHoveredProp } = useHover({}, inputRef);
    const { isFocusVisible } = useFocusRing();
    const [isFocused, setIsFocused] = React.useState(false);
    const handleFocus = (focusState, callback) => {
      setIsFocused(focusState);
      callback();
    };
    const inputProps = useFormControlContext();
    return /* @__PURE__ */ React.createElement(
      StyledTextareaRoot,
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
        ref: mergeRefs([inputRef, ref])
      },
      /* @__PURE__ */ React.createElement(
        TextareaProvider,
        {
          isDisabled: isDisabled || inputProps.isDisabled,
          isInvalid: isInvalid || inputProps.isInvalid,
          isFocused: isFocusedProp ? isFocusedProp : isFocused,
          isHovered: isHovered ? isHovered : isHoveredProp,
          isReadOnly: isReadOnly || inputProps.isReadOnly,
          isRequired: isRequired || inputProps.isRequired,
          inputRef,
          handleFocus
        },
        children
      )
    );
  }
);
export {
  TextareaRoot
};
//# sourceMappingURL=TextareaRoot.js.map
