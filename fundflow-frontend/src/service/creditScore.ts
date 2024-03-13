import { Observable,map } from "rxjs";
import apiClient from "./api";

import { CreditScore } from "../types/CreditScore";


interface creditScoreApiResponse {
    data?: CreditScore;

}

const creditScoreClient = apiClient({
    baseURL: "http://localhost:8080/api/v1",
    timeout: 30000
});

export interface CreditScoreService{
    createCreditScore(creditScore: CreditScore): Observable<creditScoreApiResponse>;
    updateCreditScore(creditScore: CreditScore): Observable<creditScoreApiResponse>;
    deleteCreditScore(id: string): Observable<creditScoreApiResponse>;
    getAllCreditScore(): Observable<creditScoreApiResponse>;
    getCreditScoreByUserId(id: string): Observable<creditScoreApiResponse>;
}


export const creditScoreService: CreditScoreService = {
    createCreditScore: function (creditScore: CreditScore): Observable<creditScoreApiResponse> {
        return creditScoreClient.post<creditScoreApiResponse>("/creditScore/", creditScore).pipe(map(response => response.data));
    },
    updateCreditScore: function (creditScore: CreditScore): Observable<creditScoreApiResponse> {
        return creditScoreClient.put<creditScoreApiResponse>(`/creditScore/${creditScore.id}`, creditScore).pipe(map(response => response.data));
    },
    deleteCreditScore: function (id: string): Observable<creditScoreApiResponse> {
        return creditScoreClient.delete<creditScoreApiResponse>(`/creditScore/${id}`).pipe(map(response => response.data));
    },
    getAllCreditScore: function (): Observable<creditScoreApiResponse> {
        return creditScoreClient.get<creditScoreApiResponse>("/creditScore/").pipe(map(response => response.data));
    },
    getCreditScoreByUserId: function (id: string): Observable<creditScoreApiResponse> {
        return creditScoreClient.get<creditScoreApiResponse>(`/creditScore/${id}`).pipe(map(response => response.data));
    }
};


export default creditScoreService;