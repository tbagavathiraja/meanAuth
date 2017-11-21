
import {DashboardComponent} from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import {Routes} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import { UserlistComponent } from '../dashboard/userlist/userlist.component';


export const ApplicationRoutes: Routes = [

  {
    path: 'dashboard', children : [
    {
        path : 'userslist' , component : UserlistComponent
    }
  ]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '' , redirectTo: 'home', pathMatch: 'full'
  }
];


