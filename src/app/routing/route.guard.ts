import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import {UserLogin} from '../login/login.service';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class OnlyLoggedInUsers implements CanActivate{

  constructor(private status: UserLogin){}

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

   console.log("CAN ACTIVATE"+this.status.isLogged())
    if (this.status.isLogged()) {
      return true;
    } else {
     alert("something went wrong")
      return false;
    }
  }

}
