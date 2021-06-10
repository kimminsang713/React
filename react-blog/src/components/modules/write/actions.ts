import {createAction} from "typesafe-actions";

// 액션 type
export const ADD_WRITE = 'write/ADD_WRITE';
// 액션 생성 함수
export const addWrite = createAction(ADD_WRITE)<String>();