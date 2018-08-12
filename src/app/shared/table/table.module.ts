import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import {MatTableModule} from "@angular/material";
import {CdkTableModule} from "@angular/cdk/table";

@NgModule({
  imports: [
    CommonModule,

    MatTableModule,
    CdkTableModule
  ],
  declarations: [TableComponent],
  exports: [TableComponent]
})
export class TableModule { }
