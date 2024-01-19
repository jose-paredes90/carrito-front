import { NgModule } from "@angular/core";
import { ShoppingDetailRoutingModule } from "./shopping-detail.routing";
import { MaterialModule } from "src/app/shared/material";
import { ShoppingDetailComponent } from "./shopping-detail.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        ShoppingDetailComponent
    ],
    imports: [
        ShoppingDetailRoutingModule,
        MaterialModule,
        CommonModule
    ],
    providers: []
})

export class ShoppingDetailModule { }