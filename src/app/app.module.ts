import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatExpansionModule} from "@angular/material";


const routes: Routes = [
  // {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'login', loadChildren:'./login/login.module#LoginModule'},
  {path: 'customer', loadChildren:'./customer/customer.module#CustomerModule'},
  {path: 'accounting', loadChildren:'./account-form/account-form.module#AccountFormModule'},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RouterModule.forRoot(routes),

    MatExpansionModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
