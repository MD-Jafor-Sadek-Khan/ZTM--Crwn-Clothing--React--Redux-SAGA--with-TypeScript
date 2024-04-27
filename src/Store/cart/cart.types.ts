import { CategoryItem } from "../categories/category.types";

export type CartItem = CategoryItem & {
  quantity:number
}


export enum CART_ACTION_TYPES {
  Set_Cart_Items = "cart/Set_Cart_Items",
  Set_Cart_Icon = "cart/Set_Cart_Icon",
}
