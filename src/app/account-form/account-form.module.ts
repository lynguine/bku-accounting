import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountFormComponent } from './account-form.component';
import {RouterModule, Routes} from "@angular/router";

const route: Routes = [{path: '', component: AccountFormComponent}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [AccountFormComponent]
})
export class AccountFormModule { }
