import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/shared/material";
import { ProductsRoutingModule } from "./products.routing";
import { ProductsComponent } from "./products.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports: [
        ProductsRoutingModule,
        MaterialModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    providers: []
})

export class ProductsModule { }