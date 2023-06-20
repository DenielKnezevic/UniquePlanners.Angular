import { Component} from '@angular/core';
import { JwtService } from './services/jwt.service';
import { Router } from '@angular/router';
import { SnackbarService } from './services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UniquePlanners';

  constructor(public jwtService:JwtService, private router:Router, private snack:SnackbarService){}

  logOut(){
    localStorage.removeItem("jwt");
    this.router.navigateByUrl("");
    this.snack.showMessage("You logged out");
  }

}
