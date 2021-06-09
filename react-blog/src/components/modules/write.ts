import {ActionType, createAction, createReducer} from "typesafe-actions";
import {write} from "fs";

const INITIALIZE ='write/INITIALIZE';
const WRITE = 'write/WRITE';

let nextId =1;


export const initialize = createAction(INITIALIZE);
export const addWrite = (title:string,content:string) =>({
    type:WRITE,
    payload:{
        id : nextId++,
        title,
        content
    }
});

type action = ReturnType<typeof addWrite>

export type writeState = {
    id :number,
    title:string,
    content:string
}



const initialState : writeState = {
    id : 0,
    title :'',
    content : ''
}

// function writer(
//     state: writeState = initialState,
//     action : action
// ) : writeState{


}