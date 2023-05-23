import { EnumHomeMenu } from "../enum/homeMenu";

export const getMenu = (index : number) => {
    const menus = [EnumHomeMenu.HOME,EnumHomeMenu.ABOUT,EnumHomeMenu.WORKS,EnumHomeMenu.BLOG,EnumHomeMenu.CONTACT];
    return menus[index];
}