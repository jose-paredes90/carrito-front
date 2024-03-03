import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { MaterialModule } from 'src/app/shared/material';
import { AccountRoutingModule } from './account.routing';



@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
