import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingService } from './services/shopping-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    PagesRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [ProductsService, ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
