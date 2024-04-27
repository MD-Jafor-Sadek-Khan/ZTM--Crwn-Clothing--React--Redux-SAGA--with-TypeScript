export enum CATEGORIES_ACTIONS_TYPES {
  Fetch_Categories_Start = "categories/Fetch_Categories_Start",
  Fetch_Categories_Success = "categories/Fetch_Categories_Success",
  Fetch_Categories_Error = "categories/Fetch_Categories_Error",
}

export type CategoryItem = {
  id: number
  imageUrl: string
  name: string
  price: number
}

export type Category = {
  title: string
  imageUrl: string
  items: CategoryItem[]
}

export type CategoriesMap = {
  [key: string]: CategoryItem[]
}
