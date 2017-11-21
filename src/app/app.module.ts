import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ApplicationRoutes} from './routing/routing';
import {AuthenticateService} from './authenticate.service';
import {HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './dashboard/userlist/userlist.component';
import {UserdataService} from './userdata.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(ApplicationRoutes), HttpModule
  ],
  providers: [AuthenticateService, UserdataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
