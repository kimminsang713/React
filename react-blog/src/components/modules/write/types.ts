import {ActionType} from "typesafe-actions";
import * as actions from './actions'

export type WriteAction = ActionType<typeof actions>;

export type write = {
    id:number;
    title : string;
    content : string;
};

export type WriteState = write[];