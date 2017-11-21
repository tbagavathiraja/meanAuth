import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../../userdata.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  usersName;
  constructor(private userData: UserdataService) { }

  ngOnInit() {
    console.log('In USERS');
          this.userData.getUsers().then(res => {
            this.usersName = res.json();
            console.log(this.usersName[0].name);
          });
  }

}
