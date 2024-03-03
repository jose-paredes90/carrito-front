import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../app.component";


const routes: Routes = [
    {
        path: "",
        component: AppComponent,
        canActivate: [],
        children: [
            {
                path: 'products',
                loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
            },
            {
                path: 'cart',
                loadChildren: () => import('./shopping-detail/shopping-detail.module').then(m => m.ShoppingDetailModule)
            },
            {
                path: 'account',
                loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }