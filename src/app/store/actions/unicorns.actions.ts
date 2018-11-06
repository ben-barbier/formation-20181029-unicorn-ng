import {Action} from '@ngrx/store';
import {Unicorn} from '../../shared/models/unicorn.model';

export const ADD_UNICORN = '[Unicorn] ADD_UNICORN';
export const EDIT_UNICORN = '[Unicorn] EDIT_UNICORN';
export const REMOVE_UNICORN = '[Unicorn] REMOVE_UNICORN';

export class AddUnicorn implements Action {
    readonly type = ADD_UNICORN;
    constructor(public unicorn: Unicorn) {}
}

export class RemoveUnicorn implements Action {
    readonly type = EDIT_UNICORN;
    constructor(public unicorn: Unicorn) {}
}

export class EditUnicorn implements Action {
    readonly type = REMOVE_UNICORN;
    constructor(public unicorn: Unicorn) {}
}

export type UnicornsActions = AddUnicorn | RemoveUnicorn | EditUnicorn;
