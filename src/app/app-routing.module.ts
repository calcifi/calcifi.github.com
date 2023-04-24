import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { FlatVsBankComponent } from './flat-vs-bank/flat-vs-bank.component';


const routes: Routes = [
  /* { path: '',redirectTo:'dashboard', pathMatch:'full' }, */
  { path: '',component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'flat-vs-bank', component: FlatVsBankComponent },
  { path: 'home-loan', component: HomeLoanComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
