import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {name: '',
          surname: '',
          age: 0
        }
  
  showPicture:boolean = false;
  noAccessBox:boolean = false;

  constructor() { }

  ngOnInit() {
    if(sessionStorage.user) {
      this.user = JSON.parse(sessionStorage.user);
    }    
  }

  checkAccess() {
    if(this.user.age >= 18) {
      this.showPicture = true;
    } else {
      this.noAccessBox = true;
    }
  }
}
