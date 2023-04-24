import { NgModule, isDevMode } from '@angular/core';
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
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'environments/environment';


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
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerImmediately"
    })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
