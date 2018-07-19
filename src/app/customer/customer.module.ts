import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import {RouterModule, Routes} from "@angular/router";
import {
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule, MatTableModule,
  MatToolbarModule
} from "@angular/material";

const route: Routes = [{path: '', component: CustomerComponent}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),

    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule
  ],
  declarations: [CustomerComponent]
})
export class CustomerModule { }
