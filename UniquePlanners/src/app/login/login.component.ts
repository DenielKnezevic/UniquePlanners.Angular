import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snackbar:SnackbarService) { }

  ngOnInit(): void {
  }

  notify($event: boolean) {
    if(!$event)
    {
      this.snackbar.showMessage("Wrong username or password");
    }
  }

}
