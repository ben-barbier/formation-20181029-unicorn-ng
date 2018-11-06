import {Unicorn} from '../../shared/models/unicorn.model';
import {ADD_TO_CART, CartActions, REMOVE_FROM_CART} from '../actions/cart.actions';

export function cartReducer(state: Unicorn[] = [], action: CartActions) {

    switch (action.type) {
        case ADD_TO_CART: {
            return [...state, action.unicorn];
        }
        case REMOVE_FROM_CART: {
            return state.filter((unicorn: Unicorn) => unicorn.id !== action.unicorn.id);
        }
        default: {
            return state;
        }
    }

}
