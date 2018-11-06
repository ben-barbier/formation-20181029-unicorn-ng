import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Unicorn} from '../models/unicorn.model';
import {select, State, Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {AddToCart, RemoveFromCart} from '../../store/actions/cart.actions';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(private store: Store<AppState>) {
    }

    public cart: Observable<Unicorn[]> = this.store.pipe(select('cart'));

    public addToCart(unicorn: Unicorn): void {
        this.store.dispatch(new AddToCart(unicorn));
    }

    public removeFromCart(unicorn: Unicorn): void {
        this.store.dispatch(new RemoveFromCart(unicorn));
    }

    public isInCart(unicorn: Unicorn): Observable<boolean> {
        return this.cart.pipe(
            map((unicorns: Unicorn[]) => {
                return !!unicorns.find(u => u.id === unicorn.id);
            }),
        );
    }

}
