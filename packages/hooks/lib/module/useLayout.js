import React from "react";
const useLayout = () => {
  const [layout, setLayout] = React.useState({
    width: 0,
    height: 0
  });
  return {
    onLayout: (e) => {
      setLayout(e.nativeEvent.layout);
    },
    layout
  };
};
export {
  useLayout
};
//# sourceMappingURL=useLayout.js.map
