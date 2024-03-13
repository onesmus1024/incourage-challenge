import { Action } from "redux";
import loanService from "../../service/loan.service";



export const enum LoanActionTypes {
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    DELETE = "DELETE",
    GET_ALL = "GET_ALL",
    GET_BY_USER_ID = "GET_BY_USER_ID",
    GET_LOAN_SUCCESS = "GET_LOAN_SUCCESS",
    GET_LOAN_ERROR = "GET_LOAN_ERROR",
}


interface createLoanActionCreator extends Action {
    type: LoanActionTypes.CREATE;
    payload: any;
}

export const createLoan = (loan: any) : createLoanActionCreator => ({
    type: LoanActionTypes.CREATE,
    payload: loanService.createLoan(loan)
});

interface updateLoanActionCreator extends Action {
    type: LoanActionTypes.UPDATE;
    payload: any;
}

export const updateLoan = (loan: any) : updateLoanActionCreator => ({
    type: LoanActionTypes.UPDATE,
    payload: loanService.updateLoan(loan)
});

interface deleteLoanActionCreator extends Action {
    type: LoanActionTypes.DELETE;
    payload: any;
}

export const deleteLoan = (id: string) : deleteLoanActionCreator => ({
    type: LoanActionTypes.DELETE,
    payload: loanService.deleteLoan(id)
});

interface getAllLoanActionCreator extends Action {
    type: LoanActionTypes.GET_ALL;
    payload: any;
}

export const getAllLoan = () : getAllLoanActionCreator => ({
    type: LoanActionTypes.GET_ALL,
    payload: loanService.getAllLoan()
});

interface getLoanByUserIdActionCreator extends Action {
    type: LoanActionTypes.GET_BY_USER_ID;
    payload: any;
}

export const getLoanByUserId = (id: string) : getLoanByUserIdActionCreator => ({
    type: LoanActionTypes.GET_BY_USER_ID,
    payload: loanService.getLoanByUserId(id)
});

interface getLoanSuccessActionCreator extends Action {
    type: LoanActionTypes.GET_LOAN_SUCCESS;
    payload: any;
}

export const getLoanSuccess = (loan: any) : getLoanSuccessActionCreator => ({
    type: LoanActionTypes.GET_LOAN_SUCCESS,
    payload: loan
});

interface getLoanErrorActionCreator extends Action {
    type: LoanActionTypes.GET_LOAN_ERROR;
    payload: any;
}

export const getLoanError = (error: any) : getLoanErrorActionCreator => ({
    type: LoanActionTypes.GET_LOAN_ERROR,
    payload: error
});

export type LoanActionsCreators = 
    |createLoanActionCreator
    | updateLoanActionCreator
    | deleteLoanActionCreator
    | getAllLoanActionCreator
    | getLoanByUserIdActionCreator
    | getLoanSuccessActionCreator
    | getLoanErrorActionCreator;
