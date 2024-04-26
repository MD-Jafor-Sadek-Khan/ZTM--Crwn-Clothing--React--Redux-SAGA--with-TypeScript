import { createSelector } from "reselect"
import { CategoriesState } from "./category.reducer"
import { CategoriesMap } from "./category.types"

const selectCategory = (state): CategoriesState => state.categories

export const selectCategoryReducer = createSelector(
  [selectCategory],
  (categoriesSlice) => {
    return categoriesSlice.categories
  }
)

export const categoryMapSelector = createSelector(
  [selectCategoryReducer],
  (categories): CategoriesMap => {
    return categories.reduce((acc, category) => {
      const { title, items } = category
      acc[title.toLowerCase()] = items
      return acc
    }, {} as CategoriesMap)
  }
)

export const selectCategoryIsLoading = createSelector(
  [selectCategory],
  (categoriesSlice) => categoriesSlice.isLoading
)
