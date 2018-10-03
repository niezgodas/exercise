import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  name: string = 'jan';
  changes;
  data = {
    name: '',
    surname: '',
    age: ''
  }

  constructor() { }

  ngOnInit() {
  }

  saveUser(user) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }
}
