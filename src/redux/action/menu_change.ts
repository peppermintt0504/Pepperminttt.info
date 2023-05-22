import { EnumHomeMenu } from "../../enum/homeMenu";
import { MENU_CHANGE } from "./types";

export function menuChange(menu: EnumHomeMenu) {
  return {
    type: MENU_CHANGE,
    payload: menu,
  };
}