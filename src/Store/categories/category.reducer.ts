import { UnknownAction } from "redux"
import {
  fetchCategoriesError,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from "./category.actions"
import { Category } from "./category.types"

export type CategoriesState = {
  readonly categories: Category[]
  readonly isLoading: boolean
  readonly error: Error | null
}

const CATEGORIES_INITIAL_VALUE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
}

export const categoryReducer = (
  state = CATEGORIES_INITIAL_VALUE,
  action: UnknownAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (fetchCategoriesSuccess.match(action)) {
    return {
      ...state,
      categories: action.payload,
      isLoading: false,
    }
  }

  if (fetchCategoriesError.match(action)) {
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    }
  }

  return state
}
