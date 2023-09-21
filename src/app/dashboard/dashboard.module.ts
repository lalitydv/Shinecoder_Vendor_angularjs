import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { FinancialYearComponent } from './financial-year/financial-year.component';
import { AllowanceComponent } from './allowance/allowance.component';
import { SaveFinancialYearComponent } from './financial-year/save-financial-year/save-financial-year.component'
import { HeaderComponent } from '../layout/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    FinancialYearComponent,
    AllowanceComponent,
    AllowanceComponent,
    SaveFinancialYearComponent,
    SaveFinancialYearComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
