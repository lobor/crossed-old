import { styled } from "@crossed/core";
import { View } from "react-native";
const GroupHSpacer = styled(
  View,
  {
    variants: {
      space: {
        xs: {
          width: "$1"
        },
        sm: {
          width: "$1.5"
        },
        md: {
          width: "$2"
        },
        lg: {
          width: "$3"
        },
        xl: {
          width: "$4"
        }
      }
    }
  },
  { ancestorStyle: ["_groupHSpacer"] }
);
export {
  GroupHSpacer
};
//# sourceMappingURL=GroupHSpacer.js.map
