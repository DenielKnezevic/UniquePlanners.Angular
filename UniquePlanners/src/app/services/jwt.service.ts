import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenGetter } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private jwtHelper: JwtHelperService) { }

  public getTokenExpirationDate(token: string): Date | null {
    const decodedToken: any = this.jwtHelper.decodeToken(token);
    if (!decodedToken || !decodedToken.exp) {
      return null;
    }

    const expirationDate = new Date(0);
    expirationDate.setUTCSeconds(decodedToken.exp);

    return expirationDate;
  }

  public isTokenExpired(token: string, offsetSeconds: number = 0): boolean {
    const expirationDate = this.getTokenExpirationDate(token);
    if (expirationDate === null) {
      return false;
    }

    const currentDateTime = new Date();
    return expirationDate.valueOf() < (currentDateTime.valueOf() + offsetSeconds * 1000);
  }

  getRolesFromToken(token: string): string[] {
    const decodedToken = this.jwtHelper.decodeToken(token);
    const rolesClaim = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';
  
    if (decodedToken && decodedToken[rolesClaim]) {
      const roles = Array.isArray(decodedToken[rolesClaim])
        ? decodedToken[rolesClaim]
        : [decodedToken[rolesClaim]];
  
      return roles.map(role => role.toLowerCase());
    }
  
    return [];
  }

  checkAdminRole(){
    let isAdmin:Boolean = false;
    const token = tokenGetter();
    const roles = this.getRolesFromToken(token!);
    roles.forEach(element => {
      if(element === "admin" || element === "administrator")
      {
        isAdmin = true;
      }
    });

    return isAdmin;
  }

  public isLoggedIn(){
    if(localStorage.getItem("jwt") !== null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
