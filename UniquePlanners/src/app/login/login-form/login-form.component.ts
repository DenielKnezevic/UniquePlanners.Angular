import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { LoginModel } from 'src/app/models/login-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output() login = new EventEmitter<LoginModel>();

  profileForm = this.form.group({
    username: ['',[Validators.minLength(4),Validators.required]],
    password: ['',[Validators.minLength(6),Validators.required]]
  });

  constructor(private form : FormBuilder, private service:UserService) {}

  ngOnInit(): void {
  }

  logIn(){

      const login : LoginModel = {
      username: this.profileForm.get('username')?.value ?? "",
      password: this.profileForm.get('password')?.value ?? ""
    }
      
    this.login.emit(login);
    
  }

}
