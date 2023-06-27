import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private jwtService: JwtService, private router: Router) { }

  canActivate() {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtService.isTokenExpired(token)) {
      const roles = this.jwtService.getRolesFromToken(token);
      const adminRole = roles.includes('admin');

      if (adminRole) {
        return true;
      }

    };

    this.router.navigateByUrl("");
    return false;
  }
}

