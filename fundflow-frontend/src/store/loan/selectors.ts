import { createSelector } from "reselect"

import { RootReducerState } from "../reducers"

import { LoanState } from "./reducers"


export const selectLoanReducerState =(state:RootReducerState):LoanState => state.loan


export const selectLoan = createSelector(
    selectLoanReducerState,
    loanState => loanState.loan
    )
