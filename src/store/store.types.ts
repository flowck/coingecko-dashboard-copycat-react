import { RootState } from ".";
import { Action, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

export type AppThunkDispatch = ThunkDispatch<RootState, void, Action>;
export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;
export type AppAction = { type: string; payload: unknown };
