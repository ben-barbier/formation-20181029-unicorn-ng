import {Component, Input, OnInit} from '@angular/core';
import {Unicorn} from '../../models/unicorn.model';
import {CartService} from '../../services/cart.service';
import {MatDialog} from '@angular/material';
import {EditUnicornModalComponent} from './modals/edit-unicorn/edit-unicorn.modal.component';
import {BehaviorSubject, Observable} from 'rxjs';
import {State} from '@ngrx/store';
import {AppState} from '../../../store/app.state';

@Component({
    selector: 'uni-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent implements OnInit {

    @Input()
    public unicorn: Unicorn;

    public isInCart: boolean;

    constructor(private cartService: CartService,
                private matDialog: MatDialog) {
    }

    ngOnInit(): void {
        this.cartService.isInCart(this.unicorn).subscribe((isInCart: boolean) => {
            this.isInCart = isInCart;
        });
    }

    public addOrRemoveFromCart() {
        if (this.isInCart) {
            this.cartService.removeFromCart(this.unicorn);
        } else {
            this.cartService.addToCart(this.unicorn);
        }
    }

    public openDialog() {
        this.matDialog.open(EditUnicornModalComponent, {
            data: {
                unicorn: {...this.unicorn},
            }
        }).afterClosed().subscribe((updatedUnicorn: Unicorn) => {
            debugger;
            // if (updatedUnicorn) {
            this.unicorn = updatedUnicorn;
            // }
        });
    }
}
