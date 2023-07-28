"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Group_exports = {};
__export(Group_exports, {
  Group: () => Group
});
module.exports = __toCommonJS(Group_exports);
var import_core = require("@crossed/core");
var import_react_native = require("react-native");
const Group = (0, import_core.styled)(
  import_react_native.View,
  {
    variants: {
      size: {
        xs: {
          _button: {
            px: "$3.5",
            h: "$8",
            _icon: {
              h: "$3",
              w: "$3"
            },
            _text: {
              fontSize: "$xs",
              lineHeight: "$sm"
            }
          },
          _groupHSpacer: {
            size: "$xs"
          },
          _groupVSpacer: {
            size: "$xs"
          }
        },
        sm: {
          _button: {
            px: "$4",
            h: "$9",
            _icon: {
              h: "$4",
              w: "$4"
            },
            _text: {
              fontSize: "$sm",
              lineHeight: "$sm"
            }
          },
          _groupHSpacer: {
            size: "$sm"
          },
          _groupVSpacer: {
            size: "$sm"
          }
        },
        md: {
          _button: {
            px: "$5",
            h: "$10",
            _icon: {
              h: "$4.5",
              w: "$4.5"
            },
            _text: {
              fontSize: "$md",
              lineHeight: "$md"
            }
          },
          _groupHSpacer: {
            size: "$md"
          },
          _groupVSpacer: {
            size: "$md"
          }
        },
        lg: {
          _button: {
            px: "$6",
            h: "$11",
            _icon: {
              h: "$4.5",
              w: "$4.5"
            },
            _text: {
              fontSize: "$lg",
              lineHeight: "$xl"
            }
          },
          _groupHSpacer: {
            size: "$lg"
          },
          _groupVSpacer: {
            size: "$lg"
          }
        },
        xl: {
          _button: {
            px: "$7",
            h: "$12",
            _icon: {
              h: "$5",
              w: "$5"
            },
            _text: {
              fontSize: "$xl",
              lineHeight: "$xl"
            }
          },
          _groupHSpacer: {
            size: "$xl"
          },
          _groupVSpacer: {
            size: "$xl"
          }
        }
      }
    },
    defaultProps: {
      size: "md"
    }
  },
  {
    descendantStyle: ["_button", "_groupHSpacer", "_groupVSpacer"]
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Group
});
//# sourceMappingURL=Group.js.map
