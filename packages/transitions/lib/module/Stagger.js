import React from "react";
import PresenceTransition from "./PresenceTransition";
const defaultStaggerConfig = { offset: 0, reverse: false };
const cloneDeep = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  let copy;
  if (obj instanceof Array) {
    copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = cloneDeep(obj[i]);
    }
    return copy;
  } else if (obj instanceof Object) {
    copy = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = cloneDeep(obj[key]);
      }
    }
    return copy;
  }
};
const Stagger = ({ children, ...restProps }) => {
  return React.Children.map(children, (child, index) => {
    const clonedAnimationConfig = cloneDeep(restProps);
    const { animate, exit } = clonedAnimationConfig;
    if (animate) {
      if (!animate.transition) {
        animate.transition = {};
      }
      animate.transition.delay = animate.transition.delay ?? 0;
      const stagger = animate.transition.stagger ?? defaultStaggerConfig;
      const offset = stagger.reverse ? (React.Children.count(children) - 1 - index) * stagger.offset : index * stagger.offset;
      animate.transition.delay = animate.transition.delay + offset;
    }
    if (exit) {
      if (!exit.transition) {
        exit.transition = {};
      }
      exit.transition.delay = exit.transition.delay ?? 0;
      const stagger = exit.transition.stagger ?? defaultStaggerConfig;
      const offset = stagger.reverse ? (React.Children.count(children) - 1 - index) * stagger.offset : index * stagger.offset;
      exit.transition.delay = exit.transition.delay + offset;
    }
    return /* @__PURE__ */ React.createElement(PresenceTransition, { key: child.key, ...clonedAnimationConfig }, child);
  });
};
var Stagger_default = Stagger;
export {
  Stagger_default as default
};
//# sourceMappingURL=Stagger.js.map
