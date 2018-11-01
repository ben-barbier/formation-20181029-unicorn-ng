import {Component, Input, OnInit} from '@angular/core';
import {Unicorn} from '../../../shared/models/unicorn.model';
import {CartService} from '../../../shared/services/cart.service';

@Component({
    selector: 'uni-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent {

    @Input()
    public unicorn: Unicorn;

    public isInCart = false;

    constructor(private cartService: CartService) {
    }

    public addOrRemoveFromCart() {
        if (this.isInCart) {
            this.cartService.removeFromCart(this.unicorn);
        } else {
            this.cartService.addToCart(this.unicorn);
        }
        this.isInCart = !this.isInCart;
    }
}
