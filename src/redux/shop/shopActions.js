import { ShopActionTypes } from "./shopTypes";

export const changeShopParams = (item) => ({
  type: ShopActionTypes.CHANGE_PARAMS,
  payload: item,
});
