import { User } from "../../types/Use";
import { UserActionsCreators } from "./actionCreators";
import { UserActionTypes } from "./actionCreators";


export interface UserState {
    user: User[] | []
    message: string;
    
    }




export  const initialState: UserState = {
user: [],
message: "",

};




const reducer = (state = initialState, action:UserActionsCreators) => {
    switch (action.type) {
        case UserActionTypes.GET_USER:
        return {
            ...state,
            user: action.payload.data,
            message : 'User fetched successfully'
        };
        case UserActionTypes.CREATE:
        return {
            ...state,
            user : action.payload,
        };
        case UserActionTypes.UPDATE:
        return {
            ...state,
            user : action.payload,
        };
        case UserActionTypes.GET_USER_SUCCESS:
        return {
            ...state,
            user : action.payload.user,
            message : 'User fetched successfully'
        };
        case UserActionTypes.LOGIN:
        return {
            ...state,
            user : action.payload,
        };
        default:
        return state;
    }
    }


export default reducer;