import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';
import {UserLogin } from './login/login.service';

@Injectable()
export class AuthenticateService {

  constructor(private http: Http,private status: UserLogin) {

  }

  loginFn(userInfo) {
    const headers = new Headers();
    const userinfo = 'name=' + userInfo.username + '&password=' + userInfo.password;

    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000/connnect');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append("Authorization",'ASSSSSSSSSSSSSSSSSSss');

    return new Promise((resolve) => {

      this.http.post('http://localhost:3000/connect', userinfo, {headers: headers}).subscribe((data) => {

          console.log('successfully logged in with authentication ' + data.json());

          console.log('token is : ' + data.json().token)
         window.localStorage.setItem('auth_key', data.json().token);
          this.status.isLoggedIn = true;
          resolve(this.status.isLoggedIn);

      });
    });
  }


}
