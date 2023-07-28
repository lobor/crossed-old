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
var Tooltip_exports = {};
__export(Tooltip_exports, {
  Tooltip: () => Tooltip
});
module.exports = __toCommonJS(Tooltip_exports);
var import_react = __toESM(require("react"));
var import_hooks = require("@crossed/hooks");
var import_interactions = require("@react-native-aria/interactions");
var import_context = require("./context");
var import_utils = require("@react-native-aria/utils");
var import_react_native = require("react-native");
var import_overlay = require("@crossed/overlay");
var import_utils2 = require("@crossed/utils");
function Tooltip(StyledTooltip) {
  return (0, import_react.forwardRef)(
    ({
      isOpen: isOpenProp,
      isDisabled,
      defaultIsOpen = false,
      onClose,
      onOpen,
      openDelay = 0,
      closeDelay = 0,
      placement = "bottom",
      children,
      closeOnClick = true,
      trigger,
      crossOffset,
      offset = 10,
      shouldOverlapWithTrigger = false,
      shouldFlip = true,
      // @ts-ignore
      _experimentalOverlay = true,
      ...props
    }, ref) => {
      const [isOpen, setIsOpen] = (0, import_hooks.useControllableState)({
        value: isOpenProp,
        defaultValue: defaultIsOpen,
        onChange: (value) => {
          value ? onOpen && onOpen() : onClose && onClose();
        }
      });
      const handleOpen = import_react.default.useCallback(() => {
        setIsOpen(true);
      }, [setIsOpen]);
      const handleClose = import_react.default.useCallback(() => {
        setIsOpen(false);
      }, [setIsOpen]);
      const enterTimeout = import_react.default.useRef();
      const exitTimeout = import_react.default.useRef();
      const openWithDelay = import_react.default.useCallback(() => {
        if (!isDisabled) {
          enterTimeout.current = setTimeout(handleOpen, openDelay);
        }
      }, [isDisabled, handleOpen, openDelay]);
      const closeWithDelay = import_react.default.useCallback(() => {
        if (enterTimeout.current) {
          clearTimeout(enterTimeout.current);
        }
        exitTimeout.current = setTimeout(handleClose, closeDelay);
      }, [closeDelay, handleClose]);
      const tooltipID = (0, import_utils.useId)();
      import_react.default.useEffect(
        () => () => {
          clearTimeout(enterTimeout.current);
          clearTimeout(exitTimeout.current);
        },
        []
      );
      const updatedTrigger = (reference) => {
        return trigger(
          {
            "ref": reference,
            "collapsable": false,
            "accessibilityDescribedBy": isOpen ? tooltipID : void 0,
            "onPress": (0, import_utils2.composeEventHandlers)(
              // newChildren.props.onPress,
              () => {
                if (closeOnClick) {
                  closeWithDelay();
                }
              }
            ),
            "onFocus": (0, import_utils2.composeEventHandlers)(
              // newChildren.props.onFocus,
              openWithDelay
            ),
            "onBlur": (0, import_utils2.composeEventHandlers)(
              // newChildren.props.onBlur,
              closeWithDelay
            ),
            "onMouseEnter": (0, import_utils2.composeEventHandlers)(
              // newChildren.props.onMouseEnter,
              openWithDelay
            ),
            "onMouseLeave": (0, import_utils2.composeEventHandlers)(
              // newChildren.props.onMouseLeave,
              closeWithDelay
            ),
            // 'ref': mergeRefs([newChildren.ref, targetRef]),
            "aria-describedby": isOpen ? tooltipID : void 0
          },
          { open: isOpen }
        );
      };
      const targetRef = import_react.default.useRef(null);
      (0, import_interactions.useKeyboardDismissable)({
        enabled: isOpen,
        callback: () => setIsOpen(false)
      });
      if (!_experimentalOverlay) {
        return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, updatedTrigger(targetRef), /* @__PURE__ */ import_react.default.createElement(
          import_context.TooltipProvider,
          {
            value: {
              placement,
              targetRef,
              handleClose,
              isOpen,
              crossOffset,
              offset,
              shouldOverlapWithTrigger,
              shouldFlip
            }
          },
          /* @__PURE__ */ import_react.default.createElement(
            StyledTooltip,
            {
              ...props,
              ref,
              accessibilityRole: import_react_native.Platform.OS === "web" ? "tooltip" : void 0,
              focussable: false,
              nativeID: tooltipID
            },
            children
          )
        ));
      }
      return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, updatedTrigger(targetRef), /* @__PURE__ */ import_react.default.createElement(import_overlay.Overlay, { isOpen, onRequestClose: handleClose, unmountOnExit: true }, /* @__PURE__ */ import_react.default.createElement(
        import_context.TooltipProvider,
        {
          value: {
            placement,
            targetRef,
            handleClose,
            isOpen,
            crossOffset,
            offset,
            shouldOverlapWithTrigger,
            shouldFlip
          }
        },
        /* @__PURE__ */ import_react.default.createElement(
          StyledTooltip,
          {
            ...props,
            ref,
            accessibilityRole: import_react_native.Platform.OS === "web" ? "tooltip" : void 0,
            focussable: false,
            nativeID: tooltipID
          },
          children
        )
      )));
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tooltip
});
//# sourceMappingURL=Tooltip.js.map
