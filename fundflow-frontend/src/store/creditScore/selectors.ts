import { createSelector } from "reselect"

import { RootReducerState } from "../reducers"

import { CreditScoreState } from "./reducers"


export const selectCreditScoreReducerState =(state:RootReducerState):CreditScoreState => state.creditScore


export const selectCreditScore = createSelector(
    selectCreditScoreReducerState,
    creditScoreState => creditScoreState.creditScore
    )