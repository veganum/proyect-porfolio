import { NgModule } from '@angular/core';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AdminPanelModule { }
