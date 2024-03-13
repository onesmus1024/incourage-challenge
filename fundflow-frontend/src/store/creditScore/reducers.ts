import { CreditScore } from "../../types/CreditScore";
import { CreditScoreActionsCreators } from "./actionCreators";
import { CreditScoreActionTypes } from "./actionCreators";


export interface CreditScoreState {
    creditScore: CreditScore[] | []
    message: string;
    
    }


export const initialState: CreditScoreState = {
    creditScore: [],
    message: "",

}


const reducer = (state = initialState, action:CreditScoreActionsCreators) => {
    switch (action.type) {
        case CreditScoreActionTypes.GET_ALL:
        return {
            ...state,
            creditScore: action.payload.data,
            message : 'CreditScore fetched successfully'
        };
        case CreditScoreActionTypes.CREATE:
        return {
            ...state,
            creditScore : action.payload,
        };
        case CreditScoreActionTypes.UPDATE:
        return {
            ...state,
            creditScore : action.payload,
        };
        case CreditScoreActionTypes.GET_CREDIT_SCORE_SUCCESS:
        return {
            ...state,
            creditScore : action.payload.creditScore,
            message : 'CreditScore fetched successfully'
        };
        default:
        return state;
    }
    }


export default reducer;