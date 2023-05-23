export const getMenuIndex = (cur : string) => {
    const menus = ['home','about','works','blog','contact'];
    return menus.indexOf(cur);
}