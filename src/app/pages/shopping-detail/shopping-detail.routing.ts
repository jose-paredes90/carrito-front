import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingDetailComponent } from './shopping-detail.component';

const routes: Routes = [
    {
        path: '',
        component: ShoppingDetailComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppingDetailRoutingModule { }