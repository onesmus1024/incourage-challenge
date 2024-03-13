import { Observable,map } from "rxjs";
import apiClient from "./api";
import { User } from "../types/Use";

interface userApiResponse {
    data?: User;
}

const userClient = apiClient({
    baseURL: "http://localhost:8080/api/v1",
    timeout: 30000
});

export interface UserService{
    getUser(id: string): Observable<userApiResponse>;
    createUser(user: User): Observable<userApiResponse>;
    updateUser(user: User): Observable<userApiResponse>;
    deleteUser(id: string): Observable<userApiResponse>;
    getAllUser(): Observable<userApiResponse>;
    getUserByEmail(email: string): Observable<userApiResponse>;
    getUserById(id: string): Observable<userApiResponse>;
    login({email, password}: {email: string, password: string}): Observable<userApiResponse>;
    

}

export const userService: UserService = {
    getUser: (id: string): Observable<userApiResponse> => {
        return userClient.get<userApiResponse>(`/user/${id}`).pipe(map(response => response.data));
    },
    createUser: function (user: User): Observable<userApiResponse> {
        return userClient.post<userApiResponse>("/user/", user).pipe(map(response => response.data));
    },
    updateUser: function (user: User): Observable<userApiResponse> {
        return userClient.put<userApiResponse>(`/user/${user.id}`, user).pipe(map(response => response.data));
    },
    deleteUser: function (id: string): Observable<userApiResponse> {
        return userClient.delete<userApiResponse>(`/user/${id}`).pipe(map(response => response.data));
    },
    getAllUser: function (): Observable<userApiResponse> {
        return userClient.get<userApiResponse>("/user/").pipe(map(response => response.data));
    },
    getUserByEmail: function (email: string): Observable<userApiResponse> {
        return userClient.get<userApiResponse>(`/email/${email}`).pipe(map(response => response.data));
    },
    getUserById: function (id: string): Observable<userApiResponse> {
        return userClient.get<userApiResponse>(`/${id}`).pipe(map(response => response.data));
    },
    login: function ({ email, password }: { email: string; password: string; }): Observable<userApiResponse> {
        return userClient.post<userApiResponse>("user/login", { email, password }).pipe(map(response => response.data));
    }
};



export default userService;