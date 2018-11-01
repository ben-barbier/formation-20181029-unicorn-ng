import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Unicorn} from '../models/unicorn.model';

@Injectable(
    {
    providedIn: 'root'
}
)
export class CartService {

    public cart: BehaviorSubject<Unicorn[]> = new BehaviorSubject([]);

    public addToCart(unicorn: Unicorn) {
        this.cart.next(this.cart.getValue().concat(unicorn));
    }

    public removeFromCart(unicorn: Unicorn) {
        this.cart.next(this.cart.getValue().filter(u => u.id !== unicorn.id));
    }

}
