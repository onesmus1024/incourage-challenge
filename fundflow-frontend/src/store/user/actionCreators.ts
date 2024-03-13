import { Action } from "redux";
import userService from "../../service/user.service";


export const enum UserActionTypes {
    GET_USER = "GET_USER",
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    DELETE = "DELETE",
    GET_ALL = "GET_ALL",
    GET_BY_EMAIL = "GET_BY_EMAIL",
    GET_BY_ID = "GET_BY_ID",
    GET_USER_SUCCESS = "GET_USER_SUCCESS",
    GET_USER_ERROR = "GET_USER_ERROR",
    LOGIN = "LOGIN",
}

interface getUserActionCreator extends Action {
    type: UserActionTypes.GET_USER;
    payload: any;
}

export const getUser = (id: string) : getUserActionCreator => ({
    type: UserActionTypes.GET_USER,
    payload: userService.getUser(id)
});

interface createUserActionCreator  extends Action {
    type: UserActionTypes.CREATE;
    payload: any;
}


export const createUser = (user: any) : createUserActionCreator => ({
    type: UserActionTypes.CREATE,
    payload: userService.createUser(user)
});

interface updateUserActionCreator  extends Action {
    type: UserActionTypes.UPDATE;
    payload: any;
}

export const updateUser = (user: any) : updateUserActionCreator => ({
    type: UserActionTypes.UPDATE,
    payload: userService.updateUser(user)
});


interface deleteUserActionCreator  extends Action {
    type: UserActionTypes.DELETE;
    payload: any;
}

export const deleteUser = (id: string) : deleteUserActionCreator => ({
    type: UserActionTypes.DELETE,
    payload: userService.deleteUser(id)
}); 



// login
interface loginActionCreator  extends Action {
    type: UserActionTypes.LOGIN;
    payload: any;
}

export const login = (user: any) : loginActionCreator => ({
    type: UserActionTypes.LOGIN,
    payload: userService.login(user)
});


interface getAllUserActionCreator  extends Action {
    type: UserActionTypes.GET_ALL;
    payload: any;
}

interface getUserByEmailActionCreator  extends Action {
    type: UserActionTypes.GET_BY_EMAIL;
    payload: any;
}

interface getByIdActionCreator  extends Action {
    type: UserActionTypes.GET_BY_ID;
    payload: any;
}


interface getUserSuccessActionCreator  extends Action {
    type: UserActionTypes.GET_USER_SUCCESS;
    payload: any;
}

export const getUserSuccess = (user: any) : getUserSuccessActionCreator => ({
    type: UserActionTypes.GET_USER_SUCCESS,
    payload: user
});

interface getUserErrorActionCreator  extends Action {
    type: UserActionTypes.GET_USER_ERROR;
    payload: any;
}

export const getUserError = (error: any) : getUserErrorActionCreator => ({
    type: UserActionTypes.GET_USER_ERROR,
    payload: error
});





export type UserActionsCreators = 
| getUserActionCreator
| createUserActionCreator
| updateUserActionCreator
| deleteUserActionCreator
| getAllUserActionCreator
| getUserByEmailActionCreator 
| getByIdActionCreator
| getUserSuccessActionCreator
| loginActionCreator

