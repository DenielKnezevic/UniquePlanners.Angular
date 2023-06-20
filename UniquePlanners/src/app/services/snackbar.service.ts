import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snack:MatSnackBar) { }

  showMessage(message:string)
  {
    this.snack.open(message, "Close", {horizontalPosition:'right',verticalPosition:'top',duration: 2000});
  }
}
