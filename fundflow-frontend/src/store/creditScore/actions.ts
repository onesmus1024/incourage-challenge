import { AxiosError } from "axios";
import { getCreditScoreSuccess } from "./actionCreators";
import { getCreditScoreError } from "./actionCreators";
import creditScoreService from "../../service/creditScore";
import { AppAction } from "..";



export const  getCreditScoreByUserId=(id:string):AppAction< Promise<void>> => {
    return async dispatch => {
        creditScoreService.getCreditScoreByUserId(id).subscribe({
            next : (creditScore:any)=>{
                dispatch(getCreditScoreSuccess(creditScore));
            },
            error : (error:AxiosError)=>{
                dispatch(getCreditScoreError(error));
            }
        })
    }
}

export const  getAllCreditScore=():AppAction< Promise<void>> => {
    return async dispatch => {
        creditScoreService.getAllCreditScore().subscribe({
            next : (creditScore:any)=>{
                dispatch(getCreditScoreSuccess(creditScore));
            },
            error : (error:AxiosError)=>{
                dispatch(getCreditScoreError(error));
            }
        })
    }
}


export const  createCreditScore=(creditScore:any):AppAction< Promise<void>> => {
    return async dispatch => {
        creditScoreService.createCreditScore(creditScore).subscribe({
            next : (creditScore:any)=>{
                dispatch(getCreditScoreSuccess(creditScore));
            },
            error : (error:AxiosError)=>{
                dispatch(getCreditScoreError(error));
            }
        })
    }
}

export const  updateCreditScore=(creditScore:any):AppAction< Promise<void>> => {
    return async dispatch => {
        creditScoreService.updateCreditScore(creditScore).subscribe({
            next : (creditScore:any)=>{
                dispatch(getCreditScoreSuccess(creditScore));
            },
            error : (error:AxiosError)=>{
                dispatch(getCreditScoreError(error));
            }
        })
    }
}

export const  deleteCreditScore=(id:string):AppAction< Promise<void>> => {
    return async dispatch => {
        creditScoreService.deleteCreditScore(id).subscribe({
            next : (creditScore:any)=>{
                dispatch(getCreditScoreSuccess(creditScore));
            },
            error : (error:AxiosError)=>{
                dispatch(getCreditScoreError(error));
            }
        })
    }
}

