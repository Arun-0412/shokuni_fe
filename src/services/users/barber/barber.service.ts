import { Injectable } from '@angular/core';
import { GlobalService } from '../../global/global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BarberService {

  constructor( public vars:GlobalService, private _http:HttpClient) { }
  

  /**
   * Request to get login barber performance review
   * @param string date
   * @param number barberId
   * 
   * @return Observable
   */
  getbarberPerformanceReview (date:string = null, barberId:number = null):Observable<any> {
    let url = new URL (this.vars.backend_url + '/saloon/barber/dashboard');

    if (this.vars.getUserRole() === 'admin') {
      url = new URL (this.vars.backend_url + '/admin/barbers/' + barberId + '/dashboard');
    }

    // append date if exists
    if (date) {
      url.searchParams.append ('date', date);
    }

    // get login user auth tojen from localstorage
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    return this._http.get (url.href, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    )
  }

}
