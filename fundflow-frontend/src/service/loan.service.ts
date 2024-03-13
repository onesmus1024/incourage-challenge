import { Observable,map } from "rxjs";
import apiClient from "./api";
import { Loan } from "../types/Loan"; 

interface loanApiResponse {
    data?: Loan;

}

const loanClient = apiClient({
    baseURL: "http://localhost:8080/api/v1",
    timeout: 30000
});

export interface LoanService{
    createLoan(loan: Loan): Observable<loanApiResponse>;
    updateLoan(loan: Loan): Observable<loanApiResponse>;
    deleteLoan(id: string): Observable<loanApiResponse>;
    getAllLoan(): Observable<loanApiResponse>;
    getLoanByUserId(id: string): Observable<loanApiResponse>;
}

export const loanService: LoanService = {
    createLoan: function (loan: Loan): Observable<loanApiResponse> {
        return loanClient.post<loanApiResponse>("/loan/", loan).pipe(map(response => response.data));
    },
    updateLoan: function (loan: Loan): Observable<loanApiResponse> {
        return loanClient.put<loanApiResponse>(`/loan/${loan.id}`, loan).pipe(map(response => response.data));
    },
    deleteLoan: function (id: string): Observable<loanApiResponse> {
        return loanClient.delete<loanApiResponse>(`/loan/${id}`).pipe(map(response => response.data));
    },
    getAllLoan: function (): Observable<loanApiResponse> {
        return loanClient.get<loanApiResponse>("/loan/").pipe(map(response => response.data));
    },
    getLoanByUserId: function (id: string): Observable<loanApiResponse> {
        return loanClient.get<loanApiResponse>(`/loan/${id}`).pipe(map(response => response.data));
    }
};


export default loanService;
