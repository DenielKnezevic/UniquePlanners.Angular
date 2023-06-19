import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User } from '../models/user';
import { LoginModel } from '../models/login-model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {

  constructor(http:HttpClient, private router:Router, private snackbar:MatSnackBar) { super("user",http) }

  login(model:LoginModel){
    
    this.http.post(`${this.baseUrl}${this.endpoint}/login`, model).subscribe(x => {
      const response = JSON.stringify(x);
      const parse = JSON.parse(response)
      localStorage.setItem("jwt",parse.token);

      if(localStorage.getItem("jwt") !== null)
      {
        this.snackbar.open("Logged in successfully", "Close" , {horizontalPosition:'right',verticalPosition:'top'});
      }

      this.router.navigateByUrl("");
    });

  }
}
