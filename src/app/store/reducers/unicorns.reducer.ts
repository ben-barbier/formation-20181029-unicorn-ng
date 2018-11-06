import {Unicorn} from '../../shared/models/unicorn.model';
import {ADD_TO_CART, CartActions, REMOVE_FROM_CART} from '../actions/cart.actions';
import {ADD_UNICORN, EDIT_UNICORN, REMOVE_UNICORN, UnicornsActions} from '../actions/unicorns.actions';

export function unicornsReducer(state: Unicorn[] = [], action: UnicornsActions) {

    switch (action.type) {
        case ADD_UNICORN: {
            return state.concat(action.unicorn);
        }
        case REMOVE_UNICORN: {
            return state.filter((u: Unicorn) => u.id !== action.unicorn.id);
        }
        case EDIT_UNICORN: {
            const res: Unicorn[] = state.filter((u: Unicorn) => u.id !== action.unicorn.id);
            return res.concat(action.unicorn);
        }
        default: {
            return state;
        }
    }

}
