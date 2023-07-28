import React, { forwardRef, useContext } from "react";
import { MenuContext } from "../MenuContext";
const MenuBackdrop = forwardRef(
  ({ children, StyledBackdrop, ...props }, ref) => {
    const { onClose } = useContext(MenuContext);
    return /* @__PURE__ */ React.createElement(
      StyledBackdrop,
      {
        ...props,
        ref,
        onPress: onClose,
        style: {
          backgroundColor: "red"
        }
      },
      children
    );
  }
);
MenuBackdrop.displayName = "MenuBackdrop";
var Backdrop_default = MenuBackdrop;
export {
  MenuBackdrop,
  Backdrop_default as default
};
//# sourceMappingURL=Backdrop.js.map
