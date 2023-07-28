import { Linking, Platform } from "react-native";
const linkToHREF = (URL) => {
  Linking.openURL(URL).catch((err) => console.error("An error occurred", err));
};
const addOnPressFunctionality = (href, callback) => {
  href ? linkToHREF(href) : "";
  callback ? callback() : () => {
  };
};
function useLink(props) {
  const { href, isExternal, onPress, _ref } = props;
  let platformLinkProps = {};
  if (Platform.OS === "web") {
    platformLinkProps = {
      href,
      onPress
    };
    if (isExternal && _ref.current) {
      _ref.current.target = "_blank";
      _ref.current.rel = "noopener";
    }
  } else {
    platformLinkProps = {
      onPress: () => {
        addOnPressFunctionality(href, onPress);
      }
    };
  }
  return {
    linkProps: {
      ...platformLinkProps,
      accessibilityRole: "link",
      accessible: true
    }
  };
}
export {
  useLink
};
//# sourceMappingURL=useLink.js.map
