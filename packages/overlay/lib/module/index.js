import { OverlayContainer } from "@react-native-aria/overlays";
import React from "react";
import { Modal, Platform } from "react-native";
import { useKeyboardDismissable } from "@react-native-aria/interactions";
const ExitAnimationContext = React.createContext({
  exited: true,
  setExited: (_exited) => {
  }
});
import { OverlayProvider } from "@react-native-aria/overlays";
const Overlay = ({
  children,
  isOpen,
  useRNModal = false,
  useRNModalOnAndroid = false,
  isKeyboardDismissable = true,
  animationPreset = "fade",
  onRequestClose,
  style,
  ref,
  unmountOnExit
}) => {
  const [exited, setExited] = React.useState(!isOpen);
  useKeyboardDismissable({
    enabled: isOpen && isKeyboardDismissable,
    callback: onRequestClose ? onRequestClose : () => {
    }
  });
  const styleObj = { ...style };
  if (Platform.OS === "web") {
    styleObj.zIndex = 9999;
  }
  if (animationPreset === "slide") {
    styleObj.overflow = "hidden";
    styleObj.display = "flex";
  } else {
    styleObj.display = exited && !isOpen ? "none" : "flex";
  }
  if (unmountOnExit && !isOpen && exited) {
    return null;
  }
  if (useRNModal || useRNModalOnAndroid && Platform.OS === "android") {
    return /* @__PURE__ */ React.createElement(ExitAnimationContext.Provider, { value: { exited, setExited } }, /* @__PURE__ */ React.createElement(
      Modal,
      {
        statusBarTranslucent: true,
        transparent: true,
        visible: isOpen,
        onRequestClose,
        animationType: animationPreset,
        ref
      },
      children
    ));
  }
  return /* @__PURE__ */ React.createElement(OverlayContainer, { style: { ...styleObj } }, /* @__PURE__ */ React.createElement(ExitAnimationContext.Provider, { value: { exited, setExited } }, children));
};
Overlay.displayName = "Overlay";
export {
  ExitAnimationContext,
  Overlay,
  OverlayProvider
};
//# sourceMappingURL=index.js.map
