import {Component} from '@angular/core';
import {DashboardComponent} from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import {Routes} from '@angular/router';

export const ApplicationRoutes: Routes = [

  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '' , redirectTo: '/login', pathMatch: 'full'
  }
];


