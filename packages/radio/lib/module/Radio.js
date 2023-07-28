import React, { forwardRef, memo } from "react";
import { useFocusRing, useFocus } from "@react-native-aria/focus";
import { RadioProvider } from "./RadioProvider";
import { useRadio } from "@react-native-aria/radio";
import { useRadioGroup } from "./RadioGroupContext";
import { usePress, useHover } from "@react-native-aria/interactions";
import { stableHash, composeEventHandlers } from "@crossed/utils";
import { useFormControlContext } from "@crossed/form-control";
const RadioComponent = memo(
  forwardRef(
    ({
      StyledRadio,
      inputProps,
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
      _onPress,
      onPressIn,
      onPressOut,
      onHoverIn,
      onHoverOut,
      onFocus,
      onBlur,
      children,
      ...props
    }, ref) => {
      const { isInvalid, isReadOnly, isIndeterminate, ...restProps } = combinedProps;
      const { hoverProps, isHovered } = useHover();
      const { focusProps, isFocused } = useFocus();
      const { disabled: isDisabled, checked: isChecked } = inputProps;
      const { focusProps: focusRingProps, isFocusVisible } = useFocusRing();
      const { pressProps, isPressed } = usePress({
        isDisabled: isDisabled || isDisabledProp
      });
      return /* @__PURE__ */ React.createElement(
        StyledRadio,
        {
          disabled: isDisabled || isDisabledProp,
          ...pressProps,
          ...restProps,
          ...inputProps,
          ...props,
          ref,
          accessibilityRole: "radio",
          onPressIn: composeEventHandlers(onPressIn, pressProps.onPressIn),
          onPressOut: composeEventHandlers(onPressOut, pressProps.onPressOut),
          onHoverIn: composeEventHandlers(onHoverIn, hoverProps.onHoverIn),
          onHoverOut: composeEventHandlers(onHoverOut, hoverProps.onHoverOut),
          onFocus: composeEventHandlers(
            composeEventHandlers(onFocus, focusProps.onFocus),
            focusRingProps.onFocus
          ),
          onBlur: composeEventHandlers(
            composeEventHandlers(onBlur, focusProps.onBlur),
            focusRingProps.onBlur
          ),
          states: {
            readonly: isReadOnly || isReadOnlyProp,
            intermediate: isIndeterminate || isIndeterminateProp,
            checked: isChecked || isCheckedProp,
            focusVisible: isFocusVisible || isFocusVisibleProp,
            disabled: isDisabled || isDisabledProp,
            invalid: isInvalid || isInvalidProp,
            hover: isHovered || isHoveredProp,
            focus: isFocused || isFocusedProp,
            active: isPressed || isPressedProp
          }
        },
        /* @__PURE__ */ React.createElement(
          RadioProvider,
          {
            isChecked: isChecked || isCheckedProp,
            isDisabled: isDisabled || isDisabledProp,
            isFocusVisible: isFocused || isFocusVisibleProp,
            isHovered: isHovered || isHoveredProp,
            isInvalid: isInvalid || isInvalidProp,
            isReadOnly: isReadOnly || isReadOnlyProp,
            isIndeterminate: isIndeterminate || isIndeterminateProp,
            isFocused: isFocused || isFocusedProp,
            isPressed: isPressed || isPressedProp
          },
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
    const { inputProps } = useRadio(
      {
        ...combinedProps,
        "aria-label": props["aria-label"] ?? props.accessibilityLabel,
        children
      },
      contextState.state.state ?? {},
      inputRef
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
//# sourceMappingURL=Radio.js.map
