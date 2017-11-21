import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private logincomponent: LoginComponent) { }

  ngOnInit() {
  }
  logout() {
    window.localStorage.removeItem('auth_key');
    this.router.navigate(['home']);
  }


}
