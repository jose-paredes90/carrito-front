import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/material";
import { CommonModule } from "@angular/common";
import { SignupComponent } from "./signup.component";
import { SignupRoutingModule } from "./signup.routing";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        SignupComponent
    ],

    imports: [
        MaterialModule,
        CommonModule,
        SignupRoutingModule,
        ReactiveFormsModule
    ],
    providers: []
})

export class SignupModule { }