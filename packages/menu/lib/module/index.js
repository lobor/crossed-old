import { Menu as MenuMain } from "./Menu";
import { MenuItem } from "./MenuItemStately";
import { MenuItemLabel } from "./MenuItemLabel";
const createMenu = ({
  Root: StyledMenu,
  Item: StyledMenuItem,
  Label: StyledItemLabel,
  Backdrop: StyledBackdrop,
  AnimatePresence
}) => {
  const MenuTemp = MenuMain({
    StyledMenu,
    StyledMenuItem,
    StyledBackdrop,
    AnimatePresence
  });
  MenuTemp.Item = MenuItem;
  MenuTemp.ItemLabel = MenuItemLabel(StyledItemLabel);
  const Menu = MenuTemp;
  return Menu;
};
export {
  createMenu
};
//# sourceMappingURL=index.js.map
