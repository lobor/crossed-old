import { styled } from "@crossed/core";
import { Text as TextNative } from "react-native";
const Text = styled(
  TextNative,
  {
    color: "$color",
    fontFamily: "$body",
    //@ts-ignore
    userSelect: "none",
    shade: 0
  },
  { ancestorStyle: ["_text"], DEBUG: "STYLEDBUTTONTEXT" }
);
export {
  Text
};
//# sourceMappingURL=Text.js.map
