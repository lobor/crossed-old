import { styled, AsForwarder } from "@crossed/core";
const IconTmp = styled(AsForwarder, {}, {});
const Icon = styled(
  IconTmp,
  {},
  {
    ancestorStyle: ["_icon"]
  },
  {
    propertyTokenMap: {
      stroke: "colors"
    }
  }
);
export {
  Icon
};
//# sourceMappingURL=Icon.js.map
