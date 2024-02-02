import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../app.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: "",
        component: AppComponent,
        canActivate: [],
        children: [
            {
                path: 'signin',
                loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule)
            },
            {
                path: 'signup',
                loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }