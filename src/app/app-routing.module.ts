import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UnicornDetailComponent} from './pages/unicorn-detail/unicorn-detail.component';

const routes: Routes = [
    {path: '', component: UnicornDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
