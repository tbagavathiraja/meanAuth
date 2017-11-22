import { Injectable } from '@angular/core';
import {Http } from '@angular/http';

@Injectable()
export class UserdataService {

  constructor(private http: Http ) { }

  getUsers() {

    return this.http.get('http://localhost:3000/users').toPromise();
  }

}
