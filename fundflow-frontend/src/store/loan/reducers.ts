import { Loan } from "../../types/Loan";
import { LoanActionsCreators } from "./actionCreators";
import { LoanActionTypes } from "./actionCreators";


export interface LoanState {
    loan: Loan[] | []
    message: string;
    
    }


export const initialState: LoanState = {
    loan: [],
    message: "",

}


const reducer = (state = initialState, action:LoanActionsCreators) => {
    switch (action.type) {
        case LoanActionTypes.GET_ALL:
        return {
            ...state,
            loan: action.payload.data,
            message : 'Loan fetched successfully'
        };
        case LoanActionTypes.CREATE:
        return {
            ...state,
            loan : action.payload,
        };
        case LoanActionTypes.UPDATE:
        return {
            ...state,
            loan : action.payload,
        };
        case LoanActionTypes.GET_LOAN_SUCCESS:
        return {
            ...state,
            loan : action.payload.loan,
            message : 'Loan fetched successfully'
        };
        default:
        return state;
    }
    }


export default reducer;