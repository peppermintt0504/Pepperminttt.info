import { EnumHomeMenu } from "../enum/homeMenu";

export const nextMenu = (cur : EnumHomeMenu ,dir : "up" | "down") => {
    const menus = [EnumHomeMenu.HOME,EnumHomeMenu.ABOUT,EnumHomeMenu.WORKS,EnumHomeMenu.BLOG,EnumHomeMenu.CONTACT];
    if(dir === 'up'){
        if(cur === EnumHomeMenu.HOME)   return cur;
        return menus[menus.indexOf(cur) - 1];
    }else{
        if(cur === EnumHomeMenu.CONTACT)   return cur;
        return menus[menus.indexOf(cur) + 1];
    }
}