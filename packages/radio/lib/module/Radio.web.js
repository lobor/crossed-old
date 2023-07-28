import React, { forwardRef, memo } from "react";
import { RadioProvider } from "./RadioProvider";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useFocusRing } from "@react-native-aria/focus";
import { useHover } from "@react-native-aria/interactions";
import { useRadio } from "@react-native-aria/radio";
import { useRadioGroup } from "./RadioGroupContext";
import { stableHash, composeEventHandlers } from "@crossed/utils";
import { useFormControlContext } from "@crossed/form-control";
const RadioComponent = memo(
  forwardRef(
    ({
      StyledRadio,
      inputProps,
      inputRef,
      combinedProps,
      isChecked: isCheckedProp,
      isDisabled: isDisabledProp,
      isFocusVisible: isFocusVisibleProp,
      isHovered: isHoveredProp,
      isInvalid: isInvalidProp,
      isReadOnly: isReadOnlyProp,
      isIndeterminate: isIndeterminateProp,
      isFocused: isFocusedProp,
      isPressed: isPressedProp,
      children,
      ...props
    }, ref) => {
      const { isInvalid, isReadOnly, isIndeterminate, ...restProps } = combinedProps;
      const { disabled: isDisabled, checked: isChecked } = inputProps;
      const _ref = React.useRef(null);
      const { isHovered } = useHover({}, _ref);
      const { focusProps, isFocusVisible } = useFocusRing();
      const [isFocused, setFocused] = React.useState(isFocusedProp);
      const [isPressed, setPressed] = React.useState(isPressedProp);
      const handleFocus = () => {
        setFocused(true);
      };
      const handleBlur = () => {
        isFocusedProp ? setFocused(true) : setFocused(false);
      };
      const handlePressIn = () => {
        setPressed(true);
      };
      const handlePressOut = () => {
        isPressedProp ? setPressed(true) : setPressed(false);
      };
      return /* @__PURE__ */ React.createElement(
        StyledRadio,
        {
          ...props,
          ...restProps,
          accessibilityRole: "label",
          ref: _ref,
          onMouseDown: handlePressIn,
          onMouseUp: handlePressOut,
          states: {
            readonly: isReadOnly,
            intermediate: isIndeterminate,
            checked: isChecked,
            focusVisible: isFocusVisible,
            disabled: isDisabled,
            invalid: isInvalid,
            hover: isHovered
          }
        },
        /* @__PURE__ */ React.createElement(
          RadioProvider,
          {
            isChecked: isChecked || isCheckedProp,
            isDisabled: isDisabled || isDisabledProp,
            isFocusVisible: isFocusVisible || isFocusVisibleProp,
            isHovered: isHovered || isHoveredProp,
            isInvalid: isInvalid || isInvalidProp,
            isReadOnly: isReadOnly || isReadOnlyProp,
            isIndeterminate: isIndeterminate || isIndeterminateProp,
            isFocused: isFocused || isFocusedProp,
            isPressed: isPressed || isPressedProp
          },
          /* @__PURE__ */ React.createElement(VisuallyHidden, null, /* @__PURE__ */ React.createElement(
            "input",
            {
              ...inputProps,
              ...focusProps,
              ref,
              onFocus: (composeEventHandlers(handleFocus), focusProps.onFocus),
              onBlur: (composeEventHandlers(handleBlur), focusProps.onBlur)
            }
          )),
          children
        )
      );
    }
  )
);
const Radio = (StyledRadio) => forwardRef(
  ({
    isFocusVisible: isFocusVisibleProp,
    isHovered: isHoveredProp,
    isIndeterminate: isIndeterminateProp,
    isFocused: isFocusedProp,
    isPressed: isPressedProp,
    isInvalid: isInvalidProp,
    children,
    ...props
  }, ref) => {
    var _a;
    const formControlContext = useFormControlContext();
    const contextState = useRadioGroup("RadioGroupContext");
    const combinedProps = {
      ...formControlContext,
      ...contextState,
      ...props
    };
    const inputRef = React.useRef(null);
    const radioState = useRadio(
      {
        ...combinedProps,
        "aria-label": props["aria-label"] ?? props.accessibilityLabel,
        children
      },
      contextState.state.state ?? {},
      inputRef
    );
    const inputProps = React.useMemo(
      () => radioState.inputProps,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [radioState.inputProps.checked, radioState.inputProps.disabled]
    );
    const contextCombinedProps = React.useMemo(() => {
      return { ...combinedProps };
    }, [stableHash(combinedProps)]);
    if (!contextState) {
      console.error("Error: Radio must be wrapped inside a Radio.Group");
    }
    const isInvalid = ((_a = contextCombinedProps == null ? void 0 : contextCombinedProps.state) == null ? void 0 : _a.validationState) === "invalid" ? true : false;
    return /* @__PURE__ */ React.createElement(
      RadioComponent,
      {
        StyledRadio,
        inputProps,
        combinedProps: contextCombinedProps,
        children,
        ref,
        isFocusVisible: isFocusVisibleProp,
        isHovered: isHoveredProp,
        isIndeterminate: isIndeterminateProp,
        isFocused: isFocusedProp,
        isPressed: isPressedProp,
        isInvalid: isInvalid || isInvalidProp
      }
    );
  }
);
export {
  Radio
};
//# sourceMappingURL=Radio.web.js.map
