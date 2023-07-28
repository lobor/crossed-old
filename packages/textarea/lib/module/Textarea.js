import React, { forwardRef } from "react";
import { useFormControl } from "@crossed/form-control";
import { useTextarea } from "./TextareaContext";
const Textarea = (StyledTextarea) => forwardRef(
  ({
    children,
    multiline = true,
    onKeyPress,
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
      isHovered,
      isFocusVisible,
      isRequired,
      handleFocus
    } = useTextarea("TextareaContext");
    const textareaProps = useFormControl({
      isDisabled: props.isDisabled,
      isInvalid: props.isInvalid,
      isReadOnly: props.isReadOnly,
      isRequired: props.isRequired,
      nativeID: props.nativeID
    });
    return /* @__PURE__ */ React.createElement(
      StyledTextarea,
      {
        ref,
        ...props,
        states: {
          focus: isFocused,
          invalid: isInvalid,
          readonly: isReadOnly,
          required: isRequired,
          hover: isHovered,
          focusVisible: isFocusVisible,
          disabled: isDisabled || textareaProps.isDisabled
        },
        accessible: true,
        accessibilityLabel,
        accessibilityHint,
        accessibilityRole,
        accessibilityRequired: isRequired || textareaProps.isRequired,
        accessibilityInvalid: isInvalid || textareaProps.isInvalid,
        accessibilityState: {
          invalid: isInvalid || textareaProps.isInvalid,
          disabled: isDisabled || textareaProps.isDisabled,
          selected: isFocused
        },
        accessibilityElementsHidden: isDisabled,
        editable: isDisabled || isReadOnly ? false : true,
        disabled: isDisabled || textareaProps.isDisabled,
        multiline,
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
        }
      },
      children
    );
  }
);
export {
  Textarea
};
//# sourceMappingURL=Textarea.js.map
