"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var MenuItem_exports = {};
__export(MenuItem_exports, {
  MenuItem: () => MenuItem
});
module.exports = __toCommonJS(MenuItem_exports);
var import_react = __toESM(require("react"));
var import_utils = require("@crossed/utils");
var import_interactions = require("@react-native-aria/interactions");
var import_focus = require("@react-native-aria/focus");
var import_menu = require("@react-native-aria/menu");
var import_react_native = require("react-native");
const usePressed = (onPressIn, onPressOut) => {
  if (import_react_native.Platform.OS === "web") {
    return {
      pressEvents: {
        onMouseDown: onPressIn,
        onMouseUp: onPressOut,
        onTouchStart: onPressIn,
        onTouchEnd: onPressOut
      }
    };
  }
  return {
    pressEvents: {
      onPressIn,
      onPressOut
    }
  };
};
function MenuItem({
  StyledMenuItem,
  item,
  state,
  onAction,
  onClose,
  closeOnSelect
}) {
  const itemProps = { ...item.props };
  const ref = import_react.default.useRef(null);
  const {
    menuItemProps: { focusable, ...restMenuProps }
  } = (0, import_menu.useMenuItem)(
    {
      "key": item.key,
      onAction,
      onClose,
      closeOnSelect,
      "aria-label": itemProps.textValue,
      ...itemProps
    },
    state,
    ref
  );
  const toggleSelection = (0, import_react.useCallback)(() => {
    if (import_react_native.Platform.OS === "web") {
      state.selectionManager.toggleSelection(item.key);
    }
  }, [state.selectionManager, item.key]);
  const { focusProps: focusRingProps, isFocusVisible } = (0, import_focus.useFocusRing)();
  const { pressProps, isPressed } = (0, import_interactions.usePress)({});
  const { isHovered, hoverProps } = (0, import_interactions.useHover)();
  const isFocused = state.selectionManager.focusedKey === item.key;
  const { children, ...rest } = item.props;
  const { pressEvents } = usePressed(
    // @ts-ignore
    (0, import_utils.composeEventHandlers)(
      (0, import_utils.composeEventHandlers)(rest == null ? void 0 : rest.onPressIn, pressProps.onPressIn),
      (0, import_utils.composeEventHandlers)(restMenuProps.onPressIn, toggleSelection)
    ),
    (0, import_utils.composeEventHandlers)(
      (0, import_utils.composeEventHandlers)(rest == null ? void 0 : rest.onPressOut, pressProps.onPressOut),
      restMenuProps.onPressOut
    )
  );
  const pressEvents1 = (0, import_react.useMemo)(
    () => !state.selectionManager.isDisabled(item.key) ? pressEvents : {},
    [item.key, pressEvents, state.selectionManager]
  );
  return /* @__PURE__ */ import_react.default.createElement(
    StyledMenuItem,
    {
      ref,
      focusable: focusable === void 0 ? false : focusable,
      ...restMenuProps,
      states: {
        hover: isHovered,
        focus: isFocused,
        active: isPressed,
        focusVisible: isFocusVisible,
        selected: state.selectionManager.isSelected(item.key),
        disabled: state.selectionManager.isDisabled(item.key)
      },
      ...rest,
      ...pressEvents1,
      onHoverIn: (0, import_utils.composeEventHandlers)(rest == null ? void 0 : rest.onHoverIn, hoverProps.onHoverIn),
      onHoverOut: (0, import_utils.composeEventHandlers)(rest == null ? void 0 : rest.onHoverOut, hoverProps.onHoverOut),
      onFocus: (0, import_utils.composeEventHandlers)(
        (0, import_utils.composeEventHandlers)(rest == null ? void 0 : rest.onFocus, focusRingProps.onFocus),
        restMenuProps == null ? void 0 : restMenuProps.onFocus
      ),
      onBlur: (0, import_utils.composeEventHandlers)(
        (0, import_utils.composeEventHandlers)(rest == null ? void 0 : rest.onBlur, focusRingProps.onBlur),
        restMenuProps == null ? void 0 : restMenuProps.onBlur
      )
    },
    children
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MenuItem
});
//# sourceMappingURL=MenuItem.js.map
