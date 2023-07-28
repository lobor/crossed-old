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
var Root_exports = {};
__export(Root_exports, {
  Root: () => Root
});
module.exports = __toCommonJS(Root_exports);
var import_core = require("@crossed/core");
var import_react_native = require("react-native");
const Root = (0, import_core.styled)(
  import_react_native.Pressable,
  {
    // @ts-ignore
    "borderRadius": "$md",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "_text": {
      color: "$color",
      fontWeight: "$semibold"
    },
    "_icon": {
      color: "$textLight0",
      _dark: {
        color: "$textDark0"
      }
    },
    "_spinner": {
      props: {
        color: "$backgroundLight0"
      },
      _dark: {
        props: {
          color: "$backgroundDark0"
        }
      }
    },
    "variants": {
      // action: {
      //   primary: {
      //     'backgroundColor': '$background',
      //     'borderColor': '$primary300',
      //     ':hover': {
      //       backgroundColor: '$backgroundHover',
      //       borderColor: '$primary400',
      //     },
      //     ':active': {
      //       backgroundColor: '$backgroundPress',
      //       borderColor: '$primary700',
      //     },
      //     '_text': {
      //       'color': '$primary600',
      //       ':hover': {
      //         color: '$primary600',
      //       },
      //       ':active': {
      //         color: '$primary700',
      //       },
      //     },
      //     '_icon': {
      //       'color': '$primary600',
      //       ':hover': {
      //         color: '$primary600',
      //       },
      //       ':active': {
      //         color: '$primary700',
      //       },
      //     },
      //     '_spinner': {
      //       'props': {
      //         color: '$primary600',
      //       },
      //       ':hover': {
      //         props: {
      //           color: '$primary600',
      //         },
      //       },
      //       ':active': {
      //         props: {
      //           color: '$primary700',
      //         },
      //       },
      //     },
      //     '_dark': {
      //       'backgroundColor': '$primary400',
      //       'borderColor': '$primary700',
      //       ':hover': {
      //         backgroundColor: '$primary500',
      //         borderColor: '$primary400',
      //       },
      //       ':active': {
      //         backgroundColor: '$primary600',
      //         borderColor: '$primary300',
      //       },
      //       '_text': {
      //         'color': '$primary300',
      //         ':hover': {
      //           color: '$primary300',
      //         },
      //         ':active': {
      //           color: '$primary200',
      //         },
      //       },
      //       '_icon': {
      //         'color': '$primary300',
      //         ':hover': {
      //           color: '$primary300',
      //         },
      //         ':active': {
      //           color: '$primary200',
      //         },
      //       },
      //       '_spinner': {
      //         'props': { color: '$primary300' },
      //         ':hover': {
      //           props: { color: '$primary300' },
      //         },
      //         ':active': {
      //           props: { color: '$primary200' },
      //         },
      //       },
      //       ':focusVisible': {
      //         _web: {
      //           boxShadowidtch: 'offset 0 0 0 2paddingHorizontal $info400',
      //         },
      //       },
      //     },
      //   },
      //   secondary: {
      //     'backgroundColor': '$secondary500',
      //     'borderColor': '$secondary300',
      //     ':hover': {
      //       backgroundColor: '$secondary600',
      //       borderColor: '$secondary400',
      //     },
      //     ':active': {
      //       backgroundColor: '$secondary700',
      //       borderColor: '$secondary700',
      //     },
      //     '_text': {
      //       'color': '$secondary600',
      //       ':hover': {
      //         color: '$secondary600',
      //       },
      //       ':active': {
      //         color: '$secondary700',
      //       },
      //     },
      //     '_icon': {
      //       'color': '$secondary600',
      //       ':hover': {
      //         color: '$secondary600',
      //       },
      //       ':active': {
      //         color: '$secondary700',
      //       },
      //     },
      //     '_spinner': {
      //       'props': {
      //         color: '$secondary600',
      //       },
      //       ':hover': {
      //         props: { color: '$secondary600' },
      //       },
      //       ':active': {
      //         props: { color: '$secondary700' },
      //       },
      //     },
      //     '_dark': {
      //       'backgroundColor': '$secondary400',
      //       'borderColor': '$secondary700',
      //       ':hover': {
      //         backgroundColor: '$secondary500',
      //         borderColor: '$secondary400',
      //       },
      //       ':active': {
      //         backgroundColor: '$secondary600',
      //         borderColor: '$secondary300',
      //       },
      //       '_text': {
      //         'color': '$secondary300',
      //         ':hover': {
      //           color: '$secondary300',
      //         },
      //         ':active': {
      //           color: '$secondary200',
      //         },
      //       },
      //       '_icon': {
      //         'color': '$secondary300',
      //         ':hover': {
      //           color: '$secondary300',
      //         },
      //         ':active': {
      //           color: '$secondary200',
      //         },
      //       },
      //       '_spinner': {
      //         'props': {
      //           color: '$secondary300',
      //         },
      //         ':hover': {
      //           props: { color: '$secondary300' },
      //         },
      //         ':active': {
      //           props: { color: '$secondary200' },
      //         },
      //       },
      //     },
      //   },
      //   positive: {
      //     'backgroundColor': '$success500',
      //     'borderColor': '$success300',
      //     ':hover': {
      //       backgroundColor: '$success600',
      //       borderColor: '$success400',
      //     },
      //     ':active': {
      //       backgroundColor: '$success700',
      //       borderColor: '$success700',
      //     },
      //     '_text': {
      //       'color': '$success600',
      //       ':hover': {
      //         color: '$success600',
      //       },
      //       ':active': {
      //         color: '$success700',
      //       },
      //     },
      //     '_icon': {
      //       'color': '$success600',
      //       ':hover': {
      //         color: '$success600',
      //       },
      //       ':active': {
      //         color: '$success700',
      //       },
      //     },
      //     '_spinner': {
      //       'props': {
      //         color: '$success600',
      //       },
      //       ':hover': {
      //         props: { color: '$success600' },
      //       },
      //       ':active': {
      //         props: { color: '$success700' },
      //       },
      //     },
      //     '_dark': {
      //       'backgroundColor': '$success400',
      //       'borderColor': '$success700',
      //       ':hover': {
      //         backgroundColor: '$success500',
      //         borderColor: '$success400',
      //       },
      //       ':active': {
      //         backgroundColor: '$success600',
      //         borderColor: '$success300',
      //       },
      //       '_text': {
      //         'color': '$success300',
      //         ':hover': {
      //           color: '$success300',
      //         },
      //         ':active': {
      //           color: '$success200',
      //         },
      //       },
      //       '_icon': {
      //         'color': '$success300',
      //         ':hover': {
      //           color: '$success300',
      //         },
      //         ':active': {
      //           color: '$success200',
      //         },
      //       },
      //       '_spinner': {
      //         'props': {
      //           color: '$success300',
      //         },
      //         ':hover': {
      //           props: { color: '$success300' },
      //         },
      //         ':active': {
      //           props: { color: '$success200' },
      //         },
      //       },
      //       ':focusVisible': {
      //         _web: {
      //           boxShadowidtch: 'offset 0 0 0 2paddingHorizontal $info400',
      //         },
      //       },
      //     },
      //   },
      //   negative: {
      //     'backgroundColor': '$error500',
      //     'borderColor': '$error300',
      //     ':hover': {
      //       backgroundColor: '$error600',
      //       borderColor: '$error400',
      //     },
      //     ':active': {
      //       backgroundColor: '$error700',
      //       borderColor: '$error700',
      //     },
      //     '_text': {
      //       'color': '$error600',
      //       ':hover': {
      //         color: '$error600',
      //       },
      //       ':active': {
      //         color: '$error700',
      //       },
      //     },
      //     '_icon': {
      //       'color': '$error600',
      //       ':hover': {
      //         color: '$error600',
      //       },
      //       ':active': {
      //         color: '$error700',
      //       },
      //     },
      //     '_spinner': {
      //       'props': {
      //         color: '$error600',
      //       },
      //       ':hover': {
      //         props: { color: '$error600' },
      //       },
      //       ':active': {
      //         props: { color: '$error700' },
      //       },
      //     },
      //     '_dark': {
      //       'backgroundColor': '$error400',
      //       'borderColor': '$error700',
      //       ':hover': {
      //         backgroundColor: '$error500',
      //         borderColor: '$error400',
      //       },
      //       ':active': {
      //         backgroundColor: '$error600',
      //         borderColor: '$error300',
      //       },
      //       '_text': {
      //         'color': '$error300',
      //         ':hover': {
      //           color: '$error300',
      //         },
      //         ':active': {
      //           color: '$error200',
      //         },
      //       },
      //       '_icon': {
      //         'color': '$error300',
      //         ':hover': {
      //           color: '$error300',
      //         },
      //         ':active': {
      //           color: '$error200',
      //         },
      //       },
      //       '_spinner': {
      //         'props': {
      //           color: '$error300',
      //         },
      //         ':hover': {
      //           props: { color: '$error300' },
      //         },
      //         ':active': {
      //           props: { color: '$error200' },
      //         },
      //       },
      //       ':focusVisible': {
      //         _web: {
      //           boxShadowidtch: 'offset 0 0 0 2paddingHorizontal $info400',
      //         },
      //       },
      //     },
      //   },
      //   default: {
      //     'backgroundColor': '$transparent',
      //     ':hover': {
      //       backgroundColor: '$backgroundLight50',
      //     },
      //     ':active': {
      //       backgroundColor: 'transparent',
      //     },
      //     '_dark': {
      //       'backgroundColor': 'transparent',
      //       ':hover': {
      //         backgroundColor: '$backgroundDark900',
      //       },
      //       ':active': {
      //         backgroundColor: 'transparent',
      //       },
      //     },
      //   },
      // },
      variant: {
        default: {},
        filled: {},
        outlined: {
          "backgroundColor": "$red1",
          ":hover": {
            backgroundColor: "$backgroundHover"
          },
          ":active": {
            backgroundColor: "$backgroundPress"
          }
          // '_dark': {
          //   'backgroundColor': 'transparent',
          //   ':hover': {
          //     backgroundColor: '$backgroundDark900',
          //   },
          //   ':active': {
          //     backgroundColor: 'transparent',
          //   },
          // },
        }
        // link: {
        //   'paddingHorizontal': '$0',
        //   ':hover': {
        //     _text: {
        //       textDecorationLine: 'underline',
        //     },
        //   },
        //   ':active': {
        //     _text: {
        //       textDecorationLine: 'underline',
        //     },
        //   },
        // },
        // outline: {
        //   'backgroundColor': 'transparent',
        //   // @ts-ignore
        //   'borderWidth': '$1',
        //   ':hover': {
        //     backgroundColor: '$backgroundLight50',
        //   },
        //   ':active': {
        //     backgroundColor: 'transparent',
        //   },
        //   '_dark': {
        //     'backgroundColor': 'transparent',
        //     ':hover': {
        //       backgroundColor: '$backgroundDark900',
        //     },
        //     ':active': {
        //       backgroundColor: 'transparent',
        //     },
        //   },
        // },
        // solid: {
        //   _text: {
        //     'color': '$textLight0',
        //     ':hover': {
        //       color: '$textLight0',
        //     },
        //     ':active': {
        //       color: '$textLight0',
        //     },
        //   },
        //   _spinner: {
        //     'props': { color: '$textLight0' },
        //     ':hover': {
        //       props: { color: '$textLight0' },
        //     },
        //     ':active': {
        //       props: { color: '$textLight0' },
        //     },
        //   },
        //   _icon: {
        //     'props': { color: '$textLight0' },
        //     ':hover': {
        //       props: { color: '$textLight0' },
        //     },
        //     ':active': {
        //       props: { color: '$textLight0' },
        //     },
        //   },
        //   _dark: {
        //     _text: {
        //       'color': '$textDark0',
        //       ':hover': {
        //         color: '$textDark0',
        //       },
        //       ':active': {
        //         color: '$textDark0',
        //       },
        //     },
        //     _spinner: {
        //       'props': { color: '$textDark0' },
        //       ':hover': {
        //         props: { color: '$textDark0' },
        //       },
        //       ':active': {
        //         props: { color: '$textDark0' },
        //       },
        //     },
        //     _icon: {
        //       'props': { color: '$textDark0' },
        //       ':hover': {
        //         props: { color: '$textDark0' },
        //       },
        //       ':active': {
        //         props: { color: '$textDark0' },
        //       },
        //     },
        //   },
        // },
      },
      size: {
        xs: {
          paddingHorizontal: "$3.5",
          height: "$2",
          _icon: {
            height: "$3",
            widtch: "$3"
          },
          _text: {
            fontSize: "$xs",
            lineHeight: "$sm"
          }
        },
        sm: {
          paddingHorizontal: "$4",
          height: "$3",
          _icon: {
            height: "$4",
            widtch: "$4"
          },
          _text: {
            fontSize: "$sm",
            lineHeight: "$sm"
          }
        },
        md: {
          paddingHorizontal: "$5",
          height: "$4",
          _icon: {
            height: "$4.5",
            widtch: "$4.5"
          },
          _text: {
            fontSize: "$md",
            lineHeight: "$md"
          }
        },
        lg: {
          paddingHorizontal: "$6",
          height: "$5",
          _icon: {
            height: "$4.5",
            widtch: "$4.5"
          },
          _text: {
            fontSize: "$lg",
            lineHeight: "$xl"
          }
        },
        xl: {
          paddingHorizontal: "$7",
          height: "$6",
          _icon: {
            height: "$5",
            widtch: "$5"
          },
          _text: {
            fontSize: "$xl",
            lineHeight: "$xl"
          }
        }
      }
    },
    // 'compoundVariants': [
    //   {
    //     action: 'primary',
    //     variant: 'link',
    //     value: {
    //       'paddingHorizontal': '$0',
    //       'backgroundColor': 'transparent',
    //       ':hover': {
    //         backgroundColor: 'transparent',
    //       },
    //       ':active': {
    //         backgroundColor: 'transparent',
    //       },
    //       '_dark': {
    //         'backgroundColor': 'transparent',
    //         ':hover': {
    //           backgroundColor: 'transparent',
    //         },
    //         ':active': {
    //           backgroundColor: 'transparent',
    //         },
    //       },
    //     },
    //   },
    //   {
    //     action: 'secondary',
    //     variant: 'link',
    //     value: {
    //       'paddingHorizontal': '$0',
    //       'backgroundColor': 'transparent',
    //       ':hover': {
    //         backgroundColor: 'transparent',
    //       },
    //       ':active': {
    //         backgroundColor: 'transparent',
    //       },
    //       '_dark': {
    //         'backgroundColor': 'transparent',
    //         ':hover': {
    //           backgroundColor: 'transparent',
    //         },
    //         ':active': {
    //           backgroundColor: 'transparent',
    //         },
    //       },
    //     },
    //   },
    //   {
    //     action: 'positive',
    //     variant: 'link',
    //     value: {
    //       'paddingHorizontal': '$0',
    //       'backgroundColor': 'transparent',
    //       ':hover': {
    //         backgroundColor: 'transparent',
    //       },
    //       ':active': {
    //         backgroundColor: 'transparent',
    //       },
    //       '_dark': {
    //         'backgroundColor': 'transparent',
    //         ':hover': {
    //           backgroundColor: 'transparent',
    //         },
    //         ':active': {
    //           backgroundColor: 'transparent',
    //         },
    //       },
    //     },
    //   },
    //   {
    //     action: 'negative',
    //     variant: 'link',
    //     value: {
    //       'paddingHorizontal': '$0',
    //       'backgroundColor': 'transparent',
    //       ':hover': {
    //         backgroundColor: 'transparent',
    //       },
    //       ':active': {
    //         backgroundColor: 'transparent',
    //       },
    //       '_dark': {
    //         'backgroundColor': 'transparent',
    //         ':hover': {
    //           backgroundColor: 'transparent',
    //         },
    //         ':active': {
    //           backgroundColor: 'transparent',
    //         },
    //       },
    //     },
    //   },
    //   {
    //     action: 'primary',
    //     variant: 'outline',
    //     value: {
    //       'backgroundColor': 'transparent',
    //       ':hover': {
    //         backgroundColor: '$backgroundLight50',
    //       },
    //       ':active': {
    //         backgroundColor: 'transparent',
    //       },
    //       '_dark': {
    //         'backgroundColor': 'transparent',
    //         ':hover': {
    //           backgroundColor: '$backgroundDark900',
    //         },
    //         ':active': {
    //           backgroundColor: 'transparent',
    //         },
    //       },
    //     },
    //   },
    //   {
    //     action: 'secondary',
    //     variant: 'outline',
    //     value: {
    //       'backgroundColor': 'transparent',
    //       ':hover': {
    //         backgroundColor: '$backgroundLight50',
    //       },
    //       ':active': {
    //         backgroundColor: 'transparent',
    //       },
    //       '_dark': {
    //         'backgroundColor': 'transparent',
    //         ':hover': {
    //           backgroundColor: '$backgroundDark900',
    //         },
    //         ':active': {
    //           backgroundColor: 'transparent',
    //         },
    //       },
    //     },
    //   },
    //   {
    //     action: 'positive',
    //     variant: 'outline',
    //     value: {
    //       'backgroundColor': 'transparent',
    //       ':hover': {
    //         backgroundColor: '$backgroundLight50',
    //       },
    //       ':active': {
    //         backgroundColor: 'transparent',
    //       },
    //       '_dark': {
    //         'backgroundColor': 'transparent',
    //         ':hover': {
    //           backgroundColor: '$backgroundDark900',
    //         },
    //         ':active': {
    //           backgroundColor: 'transparent',
    //         },
    //       },
    //     },
    //   },
    //   {
    //     action: 'negative',
    //     variant: 'outline',
    //     value: {
    //       'backgroundColor': 'transparent',
    //       ':hover': {
    //         backgroundColor: '$backgroundLight50',
    //       },
    //       ':active': {
    //         backgroundColor: 'transparent',
    //       },
    //       '_dark': {
    //         'backgroundColor': 'transparent',
    //         ':hover': {
    //           backgroundColor: '$backgroundDark900',
    //         },
    //         ':active': {
    //           backgroundColor: 'transparent',
    //         },
    //       },
    //     },
    //   },
    //   {
    //     action: 'primary',
    //     variant: 'solid',
    //     value: {
    //       _text: {
    //         'color': '$textLight0',
    //         ':hover': {
    //           color: '$textLight0',
    //         },
    //         ':active': {
    //           color: '$textLight0',
    //         },
    //       },
    //       _icon: {
    //         'color': '$textLight0',
    //         ':hover': {
    //           color: '$textLight0',
    //         },
    //         ':active': {
    //           color: '$textLight0',
    //         },
    //       },
    //       _spinner: {
    //         'props': { color: '$textLight0' },
    //         ':hover': {
    //           props: { color: '$textLight0' },
    //         },
    //         ':active': {
    //           props: { color: '$textLight0' },
    //         },
    //       },
    //       _dark: {
    //         _text: {
    //           'color': '$textDark0',
    //           ':hover': {
    //             color: '$textDark0',
    //           },
    //           ':active': {
    //             color: '$textDark0',
    //           },
    //         },
    //         _icon: {
    //           'color': '$textDark0',
    //           ':hover': {
    //             color: '$textDark0',
    //           },
    //           ':active': {
    //             color: '$textDark0',
    //           },
    //         },
    //         _spinner: {
    //           'props': { color: '$textDark0' },
    //           ':hover': {
    //             props: { color: '$textDark0' },
    //           },
    //           ':active': {
    //             props: { color: '$textDark0' },
    //           },
    //         },
    //       },
    //     },
    //   },
    //   {
    //     action: 'secondary',
    //     variant: 'solid',
    //     value: {
    //       _text: {
    //         'color': '$textLight0',
    //         ':hover': {
    //           color: '$textLight0',
    //         },
    //         ':active': {
    //           color: '$textLight0',
    //         },
    //       },
    //       _icon: {
    //         'color': '$textLight0',
    //         ':hover': {
    //           color: '$textLight0',
    //         },
    //         ':active': {
    //           color: '$textLight0',
    //         },
    //       },
    //       _spinner: {
    //         'props': { color: '$textLight0' },
    //         ':hover': {
    //           props: { color: '$textLight0' },
    //         },
    //         ':active': {
    //           props: { color: '$textLight0' },
    //         },
    //       },
    //       _dark: {
    //         _text: {
    //           'color': '$textDark0',
    //           ':hover': {
    //             color: '$textDark0',
    //           },
    //           ':active': {
    //             color: '$textDark0',
    //           },
    //         },
    //         _icon: {
    //           'color': '$textDark0',
    //           ':hover': {
    //             color: '$textDark0',
    //           },
    //           ':active': {
    //             color: '$textDark0',
    //           },
    //         },
    //         _spinner: {
    //           'props': { color: '$textDark0' },
    //           ':hover': {
    //             props: { color: '$textDark0' },
    //           },
    //           ':active': {
    //             props: { color: '$textDark0' },
    //           },
    //         },
    //       },
    //     },
    //   },
    //   {
    //     action: 'positive',
    //     variant: 'solid',
    //     value: {
    //       _text: {
    //         'color': '$textLight0',
    //         ':hover': {
    //           color: '$textLight0',
    //         },
    //         ':active': {
    //           color: '$textLight0',
    //         },
    //       },
    //       _icon: {
    //         'color': '$textLight0',
    //         ':hover': {
    //           color: '$textLight0',
    //         },
    //         ':active': {
    //           color: '$textLight0',
    //         },
    //         'props': { color: '$textLight0' },
    //       },
    //       _spinner: {
    //         'props': { color: '$textLight0' },
    //         ':hover': {
    //           props: { color: '$textLight0' },
    //         },
    //         ':active': {
    //           props: { color: '$textLight0' },
    //         },
    //       },
    //       _dark: {
    //         _text: {
    //           'color': '$textDark0',
    //           ':hover': {
    //             color: '$textDark0',
    //           },
    //           ':active': {
    //             color: '$textDark0',
    //           },
    //         },
    //         _icon: {
    //           'color': '$textDark0',
    //           ':hover': {
    //             color: '$textDark0',
    //           },
    //           ':active': {
    //             color: '$textDark0',
    //           },
    //         },
    //         _spinner: {
    //           'props': { color: '$textDark0' },
    //           ':hover': {
    //             props: { color: '$textDark0' },
    //           },
    //           ':active': {
    //             props: { color: '$textDark0' },
    //           },
    //         },
    //       },
    //     },
    //   },
    //   {
    //     action: 'negative',
    //     variant: 'solid',
    //     value: {
    //       _text: {
    //         'color': '$textLight0',
    //         ':hover': {
    //           color: '$textLight0',
    //         },
    //         ':active': {
    //           color: '$textLight0',
    //         },
    //       },
    //       _icon: {
    //         'color': '$textLight0',
    //         ':hover': {
    //           color: '$textLight0',
    //         },
    //         ':active': {
    //           color: '$textLight0',
    //         },
    //       },
    //       _spinner: {
    //         'props': { color: '$textLight0' },
    //         ':hover': {
    //           props: { color: '$textLight0' },
    //         },
    //         ':active': {
    //           props: { color: '$textLight0' },
    //         },
    //       },
    //       _dark: {
    //         _text: {
    //           'color': '$textDark0',
    //           ':hover': {
    //             color: '$textDark0',
    //           },
    //           ':active': {
    //             color: '$textDark0',
    //           },
    //         },
    //         _icon: {
    //           'color': '$textDark0',
    //           ':hover': {
    //             color: '$textDark0',
    //           },
    //           ':active': {
    //             color: '$textDark0',
    //           },
    //         },
    //         _spinner: {
    //           'props': { color: '$textDark0' },
    //           ':hover': {
    //             props: { color: '$textDark0' },
    //           },
    //           ':active': {
    //             props: { color: '$textDark0' },
    //           },
    //         },
    //       },
    //     },
    //   },
    // ],
    "defaultProps": {
      size: "md",
      variant: "outlined"
      // action: 'primary',
    },
    "_web": {
      ":focusVisible": {
        outlineWidth: "$0.5",
        outlineColor: "$backgroundFocus",
        outlineStyle: "solid",
        _dark: {
          outlineColor: "$primary300"
        }
      }
    },
    ":disabled": {
      opacity: 0.4
    }
  },
  {
    descendantStyle: ["_text", "_spinner", "_icon"],
    ancestorStyle: ["_button"]
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Root
});
//# sourceMappingURL=Root.js.map
