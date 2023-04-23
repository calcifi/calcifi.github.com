import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { RightComponent } from './right/right.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FlatVsBankComponent } from './flat-vs-bank/flat-vs-bank.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    RightComponent,
    HomeLoanComponent,
    DashboardComponent,
    FlatVsBankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
