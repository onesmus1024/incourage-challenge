import { createSelector } from "reselect"

import { RootReducerState } from "../reducers"
import { UserState } from "./reducers"


export const selectUserReducerState =(state:RootReducerState):UserState => state.user


export const selectUser = createSelector(
    selectUserReducerState,
    userState => userState.user
    )