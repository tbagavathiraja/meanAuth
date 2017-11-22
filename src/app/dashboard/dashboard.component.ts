import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserLogin} from '../login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ UserLogin ]
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router , private status: UserLogin) { }

  ngOnInit() {
  }
  logout() {
    window.localStorage.removeItem('auth_key');
    this.status.isLoggedIn = false;
    this.router.navigate(['home']);

  }


}
