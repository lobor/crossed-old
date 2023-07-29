import React, { forwardRef, memo } from "react";
import { Overlay } from "@crossed/overlay";
import PresenceTransition from "./PresenceTransition";
import { View } from "react-native";
const holderStyle = {
  top: {
    top: 0,
    right: 0,
    left: 0
  },
  right: {
    right: 0,
    top: 0,
    bottom: 0
  },
  bottom: {
    bottom: 0,
    right: 0,
    left: 0
  },
  left: {
    left: 0,
    bottom: 0,
    top: 0
  }
};
const Slide = memo(
  forwardRef(({ children, ...props }, ref) => {
    const {
      in: visible,
      placement = "bottom",
      overlay = true,
      duration = 500,
      ...resolvedProps
    } = props;
    const [containerOpacity, setContainerOpacity] = React.useState(0);
    const [size, setSize] = React.useState(0);
    const provideSize = (layoutSize) => {
      if (placement === "right" || placement === "left")
        setSize(layoutSize.width);
      else
        setSize(layoutSize.height);
      setContainerOpacity(1);
    };
    const transition = { duration };
    const animationStyle = {
      top: {
        initial: {
          translateY: -size
        },
        animate: {
          translateY: 0,
          transition
        }
      },
      bottom: {
        initial: {
          translateY: size
        },
        animate: {
          translateY: 0,
          transition
        },
        exit: {
          translateY: size,
          transition
        }
      },
      left: {
        initial: {
          translateX: -size
        },
        animate: {
          translateX: 0,
          transition
        }
      },
      right: {
        initial: {
          translateX: size
        },
        animate: {
          translateX: 0,
          transition
        }
      }
    };
    const slideComponent = /* @__PURE__ */ React.createElement(
      PresenceTransition,
      {
        visible,
        ...animationStyle[placement],
        style: [
          { position: "absolute" },
          holderStyle[placement],
          { height: "100%" }
        ]
      },
      /* @__PURE__ */ React.createElement(
        View,
        {
          ...resolvedProps,
          opacity: containerOpacity,
          ref,
          onLayout: (e) => provideSize(e.nativeEvent.layout)
        },
        size ? children : null
      )
    );
    if (overlay) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Overlay, { isKeyboardDismissable: false }, slideComponent));
    } else {
      return slideComponent;
    }
  })
);
var Slide_default = Slide;
export {
  Slide,
  Slide_default as default
};
//# sourceMappingURL=Slide.js.map
