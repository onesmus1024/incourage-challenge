import { AxiosError } from "axios";
import { getUserSuccess} from "./actionCreators";
import { getUserError } from "./actionCreators";

import { AppAction } from "..";
import userService from "../../service/user.service";

export const  getOneuser=(id:string):AppAction< Promise<void>> => {
    return async dispatch => {
        userService.getUser(id).subscribe({
            next : (user:any)=>{
                dispatch(getUserSuccess(user));
            },
            error : (error:AxiosError)=>{
                dispatch(getUserError(error));
            }
        })
    }
} 


export const  getAllUser=():AppAction< Promise<void>> => {
    return async dispatch => {
        userService.getAllUser().subscribe({
            next : (user:any)=>{
                dispatch(getUserSuccess(user));
            },
            error : (error:AxiosError)=>{
                dispatch(getUserError(error));
            }
        })
    }
}

export const  createUser=(user:any):AppAction< Promise<void>> => {
    return async dispatch => {
        userService.createUser(user).subscribe({
            next : (user:any)=>{
                dispatch(getUserSuccess(user));
            },
            error : (error:AxiosError)=>{
                dispatch(getUserError(error));
            }
        })
    }
}


export const  updateUser=(user:any):AppAction< Promise<void>> => {
    return async dispatch => {
        userService.updateUser(user).subscribe({
            next : (user:any)=>{
                dispatch(getUserSuccess(user));
            },
            error : (error:AxiosError)=>{
                dispatch(getUserError(error));
            }
        })
    }
}

export const  deleteUser=(id:string):AppAction< Promise<void>> => {
    return async dispatch => {
        userService.deleteUser(id).subscribe({
            next : (user:any)=>{
                dispatch(getUserSuccess(user));
            },
            error : (error:AxiosError)=>{
                dispatch(getUserError(error));
            }
        })
    }
}

export const  getUserByEmail=(email:string):AppAction< Promise<void>> => {
    return async dispatch => {
        userService.getUserByEmail(email).subscribe({
            next : (user:any)=>{
                dispatch(getUserSuccess(user));
            },
            error : (error:AxiosError)=>{
                dispatch(getUserError(error));
            }
        })
    }
}

export const  getUserById=(id:string):AppAction< Promise<void>> => {
    return async dispatch => {
        userService.getUserById(id).subscribe({
            next : (user:any)=>{
                dispatch(getUserSuccess(user));
            },
            error : (error:AxiosError)=>{
                dispatch(getUserError(error));
            }
        })
    }
}

export const  login=({email, password}: {email: string, password: string;}):AppAction< Promise<void>> => {
    return async dispatch => {
        userService.login({email, password}).subscribe({
            next : (user:any)=>{
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', user.token);
                dispatch(getUserSuccess(user));
            },
            error : (error:AxiosError)=>{
                dispatch(getUserError(error));
            }
        })
    }
}

