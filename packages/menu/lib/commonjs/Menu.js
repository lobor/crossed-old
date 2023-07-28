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
var Menu_exports = {};
__export(Menu_exports, {
  Menu: () => Menu
});
module.exports = __toCommonJS(Menu_exports);
var import_react = __toESM(require("react"));
var import_menu = require("@react-native-aria/menu");
var import_react_stately = require("react-stately");
var import_Popover = require("./MenuPopover/Popover");
var import_MenuItem = require("./MenuItem");
var import_OverlayAnimatePresence = require("./MenuPopover/OverlayAnimatePresence");
var import_useTypeSelect = require("./useTypeSelect");
var import_utils = require("@react-stately/utils");
var import_MenuContext = require("./MenuContext");
var import_utils2 = require("@crossed/utils");
const Menu = ({
  StyledMenu,
  StyledMenuItem,
  StyledBackdrop,
  AnimatePresence
}) => {
  return (0, import_react.forwardRef)(
    ({
      crossOffset,
      closeOnSelect,
      defaultIsOpen,
      isOpen: isOpenProp,
      onOpen,
      onClose,
      offset,
      placement = "bottom start",
      shouldFlip = true,
      trigger,
      shouldOverlapWithTrigger,
      _experimentalOverlay = true,
      ...props
    }, ref) => {
      const [isOpen, setIsOpen] = (0, import_utils.useControlledState)(
        isOpenProp,
        defaultIsOpen,
        (isOpenValue) => {
          isOpenValue ? onOpen == null ? void 0 : onOpen() : onClose == null ? void 0 : onClose();
        }
      );
      const handleClose = () => {
        setIsOpen(false);
      };
      const showBackdrop = import_react.default.useRef(false);
      const state = (0, import_react_stately.useMenuTriggerState)({
        isOpen: isOpen || false,
        //@ts-ignore
        closeOnSelect,
        onOpenChange: (isOpenValue) => {
          setIsOpen(isOpenValue);
        },
        defaultOpen: defaultIsOpen
      });
      const triggerRef = import_react.default.useRef(null);
      const { menuTriggerProps, menuProps } = (0, import_menu.useMenuTrigger)(
        {},
        state,
        triggerRef
      );
      const updatedTrigger = () => {
        return trigger({
          ...menuTriggerProps,
          ref: triggerRef
        });
      };
      if (!_experimentalOverlay) {
        return /* @__PURE__ */ import_react.default.createElement(import_MenuContext.MenuContext.Provider, { value: { onClose: handleClose, showBackdrop } }, updatedTrigger(), /* @__PURE__ */ import_react.default.createElement(
          MenuComponent,
          {
            ...menuProps,
            ...props,
            isOpen: state.isOpen,
            AnimatePresence,
            autoFocus: state.focusStrategy || true,
            onClose: () => state.close(),
            StyledMenu,
            StyledMenuItem,
            closeOnSelect,
            ref
          }
        ));
      }
      return /* @__PURE__ */ import_react.default.createElement(import_MenuContext.MenuContext.Provider, { value: { onClose: handleClose, showBackdrop } }, updatedTrigger(), /* @__PURE__ */ import_react.default.createElement(
        import_Popover.Popover,
        {
          placement,
          triggerRef,
          state,
          AnimatePresence,
          shouldOverlapWithTrigger,
          crossOffset,
          offset,
          shouldFlip,
          StyledBackdrop
        },
        /* @__PURE__ */ import_react.default.createElement(
          MenuComponent,
          {
            ...menuProps,
            ...props,
            isOpen: state.isOpen,
            AnimatePresence,
            autoFocus: state.focusStrategy || true,
            onClose: () => state.close(),
            StyledMenu,
            StyledMenuItem,
            closeOnSelect,
            ref
          }
        )
      ));
    }
  );
};
const MenuComponent = (0, import_react.forwardRef)(
  ({
    StyledMenu,
    StyledMenuItem,
    AnimatePresence,
    isOpen,
    closeOnSelect,
    ...props
  }, ref) => {
    const state = (0, import_react_stately.useTreeState)(props);
    const menuRef = (0, import_react.useRef)(null);
    const mergeRef = (0, import_utils2.mergeRefs)([menuRef, ref]);
    const { menuProps } = (0, import_menu.useMenu)(props, state, menuRef);
    const {
      onClose,
      onOpen,
      selectionMode,
      onSelectChange,
      shouldFlip,
      children,
      placement,
      offset,
      crossOffset,
      trigger,
      StyledBackdrop,
      ...restProps
    } = props;
    const typeSelectProps = (0, import_useTypeSelect.useTypeSelect)(state);
    return /* @__PURE__ */ import_react.default.createElement(
      import_OverlayAnimatePresence.OverlayAnimatePresence,
      {
        visible: isOpen,
        AnimatePresence
      },
      /* @__PURE__ */ import_react.default.createElement(
        StyledMenu,
        {
          ...menuProps,
          ...typeSelectProps,
          ref: mergeRef,
          ...restProps
        },
        [...state.collection].map((item) => /* @__PURE__ */ import_react.default.createElement(
          import_MenuItem.MenuItem,
          {
            StyledMenuItem,
            key: item.key,
            item,
            state,
            onAction: props.onAction,
            onClose: props.onClose,
            closeOnSelect
          }
        ))
      )
    );
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Menu
});
//# sourceMappingURL=Menu.js.map
