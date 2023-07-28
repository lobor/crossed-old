import React, { forwardRef } from "react";
import { useFormControl } from "@crossed/form-control";
import { useInput } from "./InputContext";
import { mergeRefs } from "@crossed/utils";
const Input = (StyledInput) => forwardRef(
  ({
    children,
    onKeyPress,
    type = "text",
    accessibilityLabel = "Input Field",
    accessibilityHint,
    accessibilityRole = "text",
    ...props
  }, ref) => {
    const {
      isDisabled,
      isReadOnly,
      isFocused,
      isInvalid,
      setIsFocused,
      isHovered,
      isFocusVisible,
      inputFieldRef,
      isRequired
    } = useInput("InputContext");
    const inputProps = useFormControl({
      isDisabled: props.isDisabled,
      isInvalid: props.isInvalid,
      isReadOnly: props.isReadOnly,
      isRequired: props.isRequired,
      nativeID: props.nativeID
    });
    const handleFocus = (focusState, callback) => {
      setIsFocused(focusState);
      callback();
    };
    const mergedref = mergeRefs([ref, inputFieldRef]);
    return /* @__PURE__ */ React.createElement(
      StyledInput,
      {
        ...props,
        states: {
          focus: isFocused,
          invalid: isInvalid,
          readonly: isReadOnly,
          required: isRequired,
          hover: isHovered,
          focusVisible: isFocusVisible,
          disabled: isDisabled || inputProps.isDisabled
        },
        disabled: isDisabled || inputProps.isDisabled,
        secureTextEntry: type === "password",
        accessible: true,
        accessibilityLabel,
        accessibilityHint,
        accessibilityRole,
        accessibilityRequired: isRequired || inputProps.isRequired,
        accessibilityInvalid: isInvalid || inputProps.isInvalid,
        accessibilityState: {
          invalid: isInvalid || inputProps.isInvalid,
          disabled: isDisabled || inputProps.isDisabled,
          selected: isFocused
        },
        accessibilityElementsHidden: isDisabled,
        editable: isDisabled || isReadOnly ? false : true,
        onKeyPress: (e) => {
          e.persist();
          onKeyPress && onKeyPress(e);
        },
        onFocus: (e) => {
          handleFocus(
            true,
            (props == null ? void 0 : props.onFocus) ? () => props == null ? void 0 : props.onFocus(e) : () => {
            }
          );
        },
        onBlur: (e) => {
          handleFocus(
            false,
            (props == null ? void 0 : props.onBlur) ? () => props == null ? void 0 : props.onBlur(e) : () => {
            }
          );
        },
        ref: mergedref
      },
      children
    );
  }
);
export {
  Input
};
//# sourceMappingURL=Input.js.map
