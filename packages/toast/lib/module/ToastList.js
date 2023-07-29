import React from "react";
import { ToastContext } from "./Toast";
import { Overlay } from "@crossed/overlay";
import { PresenceTransition } from "@crossed/transitions";
import { SafeAreaView } from "react-native";
import { View, Platform } from "react-native";
import { useKeyboardBottomInset } from "@crossed/hooks";
const initialAnimationOffset = 24;
const transitionConfig = {
  "bottom": initialAnimationOffset,
  "top": -initialAnimationOffset,
  "top right": -initialAnimationOffset,
  "top left": -initialAnimationOffset,
  "bottom left": initialAnimationOffset,
  "bottom right": initialAnimationOffset
};
const toastPositionStyle = Platform.OS === "web" ? "fixed" : "absolute";
const POSITIONS = {
  "top": {
    top: 0,
    left: 0,
    right: 0
  },
  "top right": {
    top: 0,
    right: 0
  },
  "top left": {
    top: 0,
    left: 0
  },
  "bottom": {
    bottom: 0,
    left: 0,
    right: 0
  },
  "bottom left": {
    bottom: 0,
    left: 0
  },
  "bottom right": {
    bottom: 0,
    right: 0
  }
};
const ToastList = () => {
  const { toastInfo, visibleToasts, removeToast } = React.useContext(ToastContext);
  const bottomInset = useKeyboardBottomInset() * 2;
  const getPositions = () => {
    return Object.keys(toastInfo);
  };
  let hasToastOnOverlay = false;
  getPositions().map((position) => {
    var _a;
    if (((_a = toastInfo[position]) == null ? void 0 : _a.length) > 0)
      hasToastOnOverlay = true;
  });
  return getPositions().length > 0 ? /* @__PURE__ */ React.createElement(Overlay, { isOpen: hasToastOnOverlay, isKeyboardDismissable: false }, getPositions().map((position) => {
    if (Object.keys(POSITIONS).includes(position))
      return /* @__PURE__ */ React.createElement(
        View,
        {
          key: position,
          pointerEvents: "box-none",
          style: {
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            position: toastPositionStyle,
            //@ts-ignore
            ...POSITIONS[position]
          }
        },
        toastInfo[position].map((toast) => {
          var _a;
          return /* @__PURE__ */ React.createElement(
            PresenceTransition,
            {
              key: toast.id,
              visible: visibleToasts[toast.id],
              onTransitionComplete: (status) => {
                var _a2, _b;
                if (status === "exited") {
                  removeToast(toast.id);
                  ((_a2 = toast.config) == null ? void 0 : _a2.onCloseComplete) && ((_b = toast.config) == null ? void 0 : _b.onCloseComplete());
                }
              },
              initial: {
                opacity: 0,
                translateY: transitionConfig[position]
              }
            },
            /* @__PURE__ */ React.createElement(SafeAreaView, { pointerEvents: "box-none" }, /* @__PURE__ */ React.createElement(
              View,
              {
                style: {
                  bottom: ["bottom", "bottom-left", "bottom-right"].includes(
                    position
                  ) && ((_a = toast.config) == null ? void 0 : _a.avoidKeyboard) ? bottomInset : void 0
                }
              },
              toast.component
            ))
          );
        })
      );
    else
      return null;
  })) : null;
};
export {
  ToastList
};
//# sourceMappingURL=ToastList.js.map
