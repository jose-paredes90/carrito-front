import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin.component";
import { MaterialModule } from "src/app/shared/material";
import { CommonModule } from "@angular/common";
import { SigninRoutingModule } from "./signin.routing";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        SigninComponent
    ],

    imports: [
        MaterialModule,
        CommonModule,
        SigninRoutingModule,
        ReactiveFormsModule
    ],
    providers: []
})

export class SigninModule { }