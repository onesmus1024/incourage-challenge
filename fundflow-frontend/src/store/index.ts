import { Action } from "redux";
import { ThunkAction,ThunkDispatch   } from "redux-thunk";
import {  configureStore } from "@reduxjs/toolkit";
import { rootReducer ,RootReducerState } from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  devTools: process.env.NODE_ENV !== 'production',

  
});

export type AppAction<T = void> = ThunkAction<T,RootReducerState,null,Action<string>>; 

export type AppDispatch = ThunkDispatch<RootReducerState, null, Action<string>>;

export type AppSelector<T> = (state:RootReducerState) => T;

export default store;