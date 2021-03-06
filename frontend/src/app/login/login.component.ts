import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

    //create register function and call the server
    loginUser(user) {
      this.apiService.loginUser(user);
    }

}
