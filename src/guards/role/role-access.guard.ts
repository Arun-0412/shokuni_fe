import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleAccessGuard implements CanActivate {
  
  constructor () {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let roles = next.data["roles"] as Array<string>;

      return roles.includes (JSON.parse (localStorage.getItem ('user_detail')).role);
  }
}
