import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../authenticate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthenticateService ]
})
export class LoginComponent implements OnInit {

  currentUser: object = {
    username: '',
    password: ''
  };



  constructor(private authenticatService: AuthenticateService, private router: Router) {

  }

  ngOnInit() {
  }

  login() {

  console.log('inside log in');

  this.authenticatService.loginFn(this.currentUser).then((res) => {

    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA")
    if (!res) {
      console.log(res + 'ERRORRRRRRRR');
    } else {
      this.router.navigate(['dashboard'] );

    }


  });
  console.log('just below the promise');
}

}
