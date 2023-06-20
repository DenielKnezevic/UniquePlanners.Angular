import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../services/snackbar.service';
import { LoginModel } from '../models/login-model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snackbar:SnackbarService, private service:UserService) { }

  ngOnInit(): void {
  }

  login($event: LoginModel) {

    this.service.login($event);

    if(localStorage.getItem("jwt") === null)
    {
      this.snackbar.showMessage("Wrong username or password");
    }

  }

}
