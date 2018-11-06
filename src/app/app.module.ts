import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UnicornDetailComponent} from './pages/unicorn-detail/unicorn-detail.component';
import {MagicalNamePipe} from './shared/pipes/magical-name.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCardModule, MatChipsModule,
    MatDialogModule, MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import {NavComponent} from './nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {UnicornCardComponent} from './shared/components/unicorn-card/unicorn-card.component';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ErrorsInterceptor} from './shared/interceptors/errors.interceptor';
import {HomeComponent} from './pages/home/home.component';
import {EditUnicornModalComponent} from './shared/components/unicorn-card/modals/edit-unicorn/edit-unicorn.modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddUnicornComponent} from './pages/add-unicorn/add-unicorn.component';
import {StoreModule} from '@ngrx/store';
import {DevModule, environment} from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {cartReducer} from './store/reducers/cart.reducer';

@NgModule({
    declarations: [
        AppComponent,
        UnicornDetailComponent,
        MagicalNamePipe,
        NavComponent,
        UnicornCardComponent,
        UnicornListComponent,
        HomeComponent,
        EditUnicornModalComponent,
        AddUnicornComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatIconModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatDialogModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatChipsModule,
        StoreModule.forRoot({
            cart: cartReducer,
        }),
        DevModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: ErrorsInterceptor, multi: true}
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        EditUnicornModalComponent
    ]
})
export class AppModule {

}
