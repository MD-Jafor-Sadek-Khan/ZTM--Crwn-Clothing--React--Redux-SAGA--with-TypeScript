import { createSelector } from "reselect"
import { UserState } from "./user.reducer"

const selectUserSlice = (state): UserState => state.user

export const selectUserIsLoading = createSelector(
  [selectUserSlice],
  (userSlice): boolean => {
    return userSlice.isLoading
  }
)

export const userSelector = createSelector([selectUserSlice], (userSlice) => {
  return userSlice.currentUser
})
