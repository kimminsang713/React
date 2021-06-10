import {action, createReducer} from "typesafe-actions";
import {WriteAction, WriteState} from "./types";
import {ADD_WRITE} from "./actions";

// 초기값
const initialState: WriteState = [
    {id:0,title:'', content:''}
];

// 입력값 저장
const addWrite = createReducer<WriteState, WriteAction>(initialState,{
    [ADD_WRITE]: (state, {payload : string}) =>


});

export default addWrite;