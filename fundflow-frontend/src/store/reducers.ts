import { combineReducers } from "redux";
import user from "./user/reducers";
import loan from "./loan/reducers";
import creditScore from "./creditScore/reducers";
import { UserState } from "./user/reducers";
import { LoanState } from "./loan/reducers";
import { CreditScoreState } from "./creditScore/reducers";
import { initialState as UserInitialState } from "./user/reducers";
import { initialState as LoanInitialState } from "./loan/reducers";
import { initialState as CreditScoreInitialState } from "./creditScore/reducers";



export interface RootReducerState {
    user : UserState;
    loan : LoanState;
    creditScore : CreditScoreState;
    }

export const initialRootReducerState: RootReducerState = {
    user : UserInitialState,
    loan : LoanInitialState,
    creditScore : CreditScoreInitialState
}


export const rootReducer = combineReducers({
    user,
    loan,
    creditScore
    });

