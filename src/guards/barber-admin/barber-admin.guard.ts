import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BarberAdminGuard implements CanActivate {

  constructor (private auth:AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //console.log('----------------->');
    // check from server for user detail
    return new Observable <boolean> (observer => {
      this.auth.checkBarberIsAdmin().toPromise().catch(err => {
        console.log('----------------->',err)
        if (err !== undefined) {
          return observer.next (err.status)
        }
        
      }).then (res => {
        console.log('----------------->',res)

         if (res !== undefined) {
          return observer.next (res.status)
        }
      })
    });
  }
}
