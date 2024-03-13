import { Action } from "redux";
import creditScoreService from "../../service/creditScore";

export const enum CreditScoreActionTypes {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    DELETE = "DELETE",
    GET_ALL = "GET_ALL",
    GET_BY_USER_ID = "GET_BY_USER_ID",
    GET_CREDIT_SCORE_SUCCESS = "GET_CREDIT_SCORE_SUCCESS",
    GET_CREDIT_SCORE_ERROR = "GET_CREDIT_SCORE_ERROR",
}

interface createCreditScoreActionCreator extends Action {
    type: CreditScoreActionTypes.CREATE;
    payload: any;
}

export const createCreditScore = (creditScore: any) : createCreditScoreActionCreator => ({
    type: CreditScoreActionTypes.CREATE,
    payload: creditScoreService.createCreditScore(creditScore)
});


interface updateCreditScoreActionCreator extends Action {
    type: CreditScoreActionTypes.UPDATE;
    payload: any;
}

export const updateCreditScore = (creditScore: any) : updateCreditScoreActionCreator => ({
    type: CreditScoreActionTypes.UPDATE,
    payload: creditScoreService.updateCreditScore(creditScore)
});

interface deleteCreditScoreActionCreator extends Action {
    type: CreditScoreActionTypes.DELETE;
    payload: any;
}

export const deleteCreditScore = (id: string) : deleteCreditScoreActionCreator => ({
    type: CreditScoreActionTypes.DELETE,
    payload: creditScoreService.deleteCreditScore(id)
});

interface getAllCreditScoreActionCreator extends Action {
    type: CreditScoreActionTypes.GET_ALL;
    payload: any;
}

export const getAllCreditScore = () : getAllCreditScoreActionCreator => ({
    type: CreditScoreActionTypes.GET_ALL,
    payload: creditScoreService.getAllCreditScore()
});

interface getCreditScoreByUserIdActionCreator extends Action {
    type: CreditScoreActionTypes.GET_BY_USER_ID;
    payload: any;
}

export const getCreditScoreByUserId = (id: string) : getCreditScoreByUserIdActionCreator => ({
    type: CreditScoreActionTypes.GET_BY_USER_ID,
    payload: creditScoreService.getCreditScoreByUserId(id)
});

interface getCreditScoreSuccessActionCreator extends Action {
    type: CreditScoreActionTypes.GET_CREDIT_SCORE_SUCCESS;
    payload: any;
}

export const getCreditScoreSuccess = (creditScore: any) : getCreditScoreSuccessActionCreator => ({
    type: CreditScoreActionTypes.GET_CREDIT_SCORE_SUCCESS,
    payload: creditScore
});

interface getCreditScoreErrorActionCreator extends Action {
    type: CreditScoreActionTypes.GET_CREDIT_SCORE_ERROR;
    payload: any;
}

export const getCreditScoreError = (error: any) : getCreditScoreErrorActionCreator => ({
    type: CreditScoreActionTypes.GET_CREDIT_SCORE_ERROR,
    payload: error
});

export type CreditScoreActionsCreators = 
    |createCreditScoreActionCreator
    | updateCreditScoreActionCreator
    | deleteCreditScoreActionCreator
    | getAllCreditScoreActionCreator
    | getCreditScoreByUserIdActionCreator
    | getCreditScoreSuccessActionCreator
    | getCreditScoreErrorActionCreator
    