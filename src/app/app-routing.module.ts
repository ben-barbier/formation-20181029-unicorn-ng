import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UnicornDetailComponent} from './pages/unicorn-detail/unicorn-detail.component';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {HomeComponent} from './pages/home/home.component';
import {OneYearGuard} from './pages/unicorn-detail/guards/one-year.guard';
import {UnicornResolver} from './pages/unicorn-detail/resolvers/unicorn.resolver';
import {AddUnicornComponent} from './pages/add-unicorn/add-unicorn.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'unicorns', component: UnicornListComponent},
    {
        path: 'unicorns/:id',
        component: UnicornDetailComponent,
        canActivate: [OneYearGuard],
        resolve: {
            unicorn: UnicornResolver
        },
    },
    {
        path: 'add-unicorn',
        component: AddUnicornComponent
    },
    {path: '**', redirectTo: 'unicorns'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
