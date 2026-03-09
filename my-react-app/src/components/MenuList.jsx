import { menuLists } from "../../data";

const MenuList = () => {
  return menuLists.map((menulist) => (
    <li key={menulist.id}>
      <a href={menulist.url}>{menulist.title}</a>
    </li>
  ));
};

export default MenuList;
