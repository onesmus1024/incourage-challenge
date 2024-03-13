import { AxiosError } from "axios";
import { getLoanSuccess } from "./actionCreators";
import { getLoanError } from "./actionCreators";
import { AppAction } from "..";

import loanService from "../../service/loan.service";


export const  getLoanByUserId=(id:string):AppAction< Promise<void>> => {
    return async dispatch => {
        loanService.getLoanByUserId(id).subscribe({
            next : (loan:any)=>{
                dispatch(getLoanSuccess(loan));
            },
            error : (error:AxiosError)=>{
                dispatch(getLoanError(error));
            }
        })
    }
}

export const  getAllLoan=():AppAction< Promise<void>> => {
    return async dispatch => {
        loanService.getAllLoan().subscribe({
            next : (loan:any)=>{
                dispatch(getLoanSuccess(loan));
            },
            error : (error:AxiosError)=>{
                dispatch(getLoanError(error));
            }
        })
    }
}


export const  createLoan=(loan:any):AppAction< Promise<void>> => {
    return async dispatch => {
        loanService.createLoan(loan).subscribe({
            next : (loan:any)=>{
                dispatch(getLoanSuccess(loan));
            },
            error : (error:AxiosError)=>{
                dispatch(getLoanError(error));
            }
        })
    }
}

export const  updateLoan=(loan:any):AppAction< Promise<void>> => {
    return async dispatch => {
        loanService.updateLoan(loan).subscribe({
            next : (loan:any)=>{
                dispatch(getLoanSuccess(loan));
            },
            error : (error:AxiosError)=>{
                dispatch(getLoanError(error));
            }
        })
    }
}

export const  deleteLoan=(id:string):AppAction< Promise<void>> => {
    return async dispatch => {
        loanService.deleteLoan(id).subscribe({
            next : (loan:any)=>{
                dispatch(getLoanSuccess(loan));
            },
            error : (error:AxiosError)=>{
                dispatch(getLoanError(error));
            }
        })
    }
}



