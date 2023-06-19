import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  notify($event: boolean) {
    if(!$event)
    {
      this.snackbar.open("Wrong username or password", "Close" , {horizontalPosition:'right',verticalPosition:'top'});
    }
  }

}
