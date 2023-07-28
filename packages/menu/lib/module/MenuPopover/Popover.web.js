import React from "react";
import { View } from "react-native";
import { usePopover, DismissButton, Overlay } from "@react-aria/overlays";
import { MenuContext } from "../MenuContext";
function Popover({
  StyledBackdrop,
  // @ts-ignore
  _experimentalOverlay = true,
  ...props
}) {
  const ref = React.useRef(null);
  const { state, children } = props;
  const { onClose } = React.useContext(MenuContext);
  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef: ref,
      isNonModal: true
    },
    state
  );
  if (!state.isOpen) {
    return null;
  }
  if (!_experimentalOverlay) {
    return (
      // @ts-ignore
      /* @__PURE__ */ React.createElement(View, { ...popoverProps, ref }, /* @__PURE__ */ React.createElement(DismissButton, { onDismiss: state.close }), children, /* @__PURE__ */ React.createElement(DismissButton, { onDismiss: state.close }))
    );
  }
  return /* @__PURE__ */ React.createElement(Overlay, null, /* @__PURE__ */ React.createElement(
    StyledBackdrop,
    {
      ...underlayProps,
      onPress: onClose,
      focusable: false,
      "aria-hidden": true
    }
  ), /* @__PURE__ */ React.createElement(View, { ...popoverProps, ref }, /* @__PURE__ */ React.createElement(DismissButton, { onDismiss: state.close }), children, /* @__PURE__ */ React.createElement(DismissButton, { onDismiss: state.close })));
}
export {
  Popover
};
//# sourceMappingURL=Popover.web.js.map
