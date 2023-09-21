import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FinancialYearComponent } from './financial-year/financial-year.component';
import { AllowanceComponent } from './allowance/allowance.component';
import { SaveFinancialYearComponent } from './financial-year/save-financial-year/save-financial-year.component';

const routes: Routes = [
  {path:'', component: DashboardComponent,
  children: [
    {path:'financialYear', component: FinancialYearComponent},
    {path:'allowance', component: AllowanceComponent},
    {path:'saveFinancialYear', component: SaveFinancialYearComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
