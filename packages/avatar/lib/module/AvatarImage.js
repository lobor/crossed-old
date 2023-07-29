import React, { forwardRef } from "react";
const AvatarImage = (StyledAvatarImage) => forwardRef(({ source, ...props }, ref) => {
  const [error, setError] = React.useState(false);
  const getSource = () => {
    if (source) {
      if (source.hasOwnProperty("uri") && source.uri === null) {
        return source;
      } else if (!source.hasOwnProperty(source, "uri")) {
        return source;
      }
    }
    return null;
  };
  const imageSource = getSource();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, imageSource && !error && /* @__PURE__ */ React.createElement(
    StyledAvatarImage,
    {
      ref,
      ...props,
      source,
      onError: () => {
        setError(true);
      }
    }
  ));
});
var AvatarImage_default = AvatarImage;
export {
  AvatarImage_default as default
};
//# sourceMappingURL=AvatarImage.js.map
