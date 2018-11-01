import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UnicornDetailComponent} from './pages/unicorn-detail/unicorn-detail.component';
import {MagicalNamePipe} from './shared/pipes/magical-name.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {NavComponent} from './nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {UnicornCardComponent} from './pages/unicorn-detail/unicorn-card/unicorn-card.component';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ErrorsInterceptor} from './shared/interceptors/errors.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        UnicornDetailComponent,
        MagicalNamePipe,
        NavComponent,
        UnicornCardComponent,
        UnicornListComponent,
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
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: ErrorsInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
