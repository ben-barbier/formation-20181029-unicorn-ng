import {Action} from '@ngrx/store';
import {Unicorn} from '../../shared/models/unicorn.model';

export const ADD_TO_CART = '[Cart] ADD_TO_CART';
export const REMOVE_FROM_CART = '[Cart] REMOVE_FROM_CART';

export class AddToCart implements Action {
    readonly type = ADD_TO_CART;
    constructor(public unicorn: Unicorn) {}
}

export class RemoveFromCart implements Action {
    readonly type = REMOVE_FROM_CART;
    constructor(public unicorn: Unicorn) {}
}

export type CartActions = AddToCart | RemoveFromCart;
