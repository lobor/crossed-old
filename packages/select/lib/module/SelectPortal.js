import React, { forwardRef } from "react";
import { SelectContext, SelectPortalContext } from "./SelectContext";
import { StyleSheet, Platform } from "react-native";
import { mergeRefs } from "@crossed/utils";
const SelectPortal = (StyledSelectPortal) => forwardRef(({ children, ...props }, ref) => {
  const {
    isOpen,
    handleClose,
    closeOnOverlayClick,
    isDisabled,
    hoverRef,
    hoverProps,
    focusProps,
    onValueChange,
    value,
    setFocused,
    setValue,
    label,
    setLabel,
    onOpen,
    placeholder,
    isReadOnly,
    ...portalProps
  } = React.useContext(SelectContext);
  const tempFix = "__GluestackPlaceholder__";
  if (Platform.OS !== "web") {
    return /* @__PURE__ */ React.createElement(
      StyledSelectPortal,
      {
        isOpen,
        onClose: handleClose,
        closeOnOverlayClick,
        ...props,
        ref
      },
      /* @__PURE__ */ React.createElement(
        SelectPortalContext.Provider,
        {
          value: {
            isOpen,
            handleClose,
            closeOnOverlayClick,
            isDisabled,
            hoverRef,
            hoverProps,
            focusProps,
            setValue,
            value: value === null ? tempFix : value,
            setLabel,
            label,
            isReadOnly,
            setFocused,
            onValueChange,
            placeholder,
            ...portalProps
          }
        },
        children
      )
    );
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "select",
    {
      disabled: isDisabled || isReadOnly,
      ...focusProps,
      ...hoverProps,
      onChange: (e) => {
        onValueChange(e.target.value);
        setLabel(e.target.options[e.target.selectedIndex].text);
        handleClose();
      },
      onKeyDown: (e) => {
        if (e.code === "Space") {
          onOpen && onOpen();
        }
      },
      ref: mergeRefs([ref, hoverRef]),
      value: value === void 0 ? tempFix : value,
      "aria-label": placeholder,
      "aria-readonly": isReadOnly,
      style: StyleSheet.flatten([
        {
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: 0,
          zIndex: 1,
          cursor: isDisabled ? "not-allowed" : "pointer"
        }
      ]),
      onClick: onOpen,
      onFocus: () => {
        setFocused(true);
      },
      onBlur: () => {
        setFocused(false);
      }
    },
    /* @__PURE__ */ React.createElement("option", { disabled: true, value: tempFix }, placeholder),
    children
  ));
});
export {
  SelectPortal
};
//# sourceMappingURL=SelectPortal.js.map
