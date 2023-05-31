import { Injectable } from '@angular/core';

import { GlobalService } from '../../global/global.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public vars:GlobalService, private _http:HttpClient) { }

  /**
   * Request for get all services of the saloon
   * 
   * @param number page
   * 
   * @returns Observable
   */
  getSaloonServices (page:number, saloonId:number = null):Observable<any> {
    let url = new URL (this.vars.backend_url + '/saloon/services');

    // check for role
    if (this.vars.getUserRole() === 'admin') {
      url = new URL (this.vars.backend_url + '/admin/saloons/' + saloonId +'/services');
    }

    // get default pagination limit
    // append param in url
    url.searchParams.append ('paginate', (this.vars.default_pagination_limit).toString());
    // append page number
    url.searchParams.append ('page', (page).toString());

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.get (url.href, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * Request to create new service under a saloon
   * 
   * @param Object values
   * 
   * @return Observable
   */
  addService (values:Object, saloonId:number = null):Observable<any> {
    let url = this.vars.backend_url + '/saloon/services';

    // check for role
    if (this.vars.getUserRole() === 'admin') {
      url = this.vars.backend_url + '/admin/saloons/' + saloonId +'/services';
    }

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.post (url, values, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * Request to create new service under a saloon
   * 
   * @param Object values
   * 
   * @return Observable
   */
  editService (values:Object, serviceId:number):Observable<any> {
    let url = this.vars.backend_url + '/saloon/services/'+serviceId;

    // check for role
    if (this.vars.getUserRole() === 'admin') {
      url = this.vars.backend_url + '/admin/saloons/services/' + serviceId;
    }

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.put (url, values, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }
}
