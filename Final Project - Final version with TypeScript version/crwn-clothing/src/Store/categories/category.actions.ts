import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../utils/Reducer-Utils/reducer.utils"
import { CATEGORIES_ACTIONS_TYPES, Category } from "./category.types"

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTIONS_TYPES.Fetch_Categories_Start>

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTIONS_TYPES.Fetch_Categories_Success,
  Category[]
>

export type FetchCategoriesError = ActionWithPayload<
  CATEGORIES_ACTIONS_TYPES.Fetch_Categories_Error,
  Error
>


export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => {
  return createAction(CATEGORIES_ACTIONS_TYPES.Fetch_Categories_Start)
})

export const fetchCategoriesSuccess = withMatcher(
  (categories: Category[]): FetchCategoriesSuccess => {
    return createAction(
      CATEGORIES_ACTIONS_TYPES.Fetch_Categories_Success,
      categories
    )
  }
)

export const fetchCategoriesError = withMatcher(
  (error: Error): FetchCategoriesError => {
    return createAction(CATEGORIES_ACTIONS_TYPES.Fetch_Categories_Error, error)
  }
)
