import { Injectable } from '@angular/core';

import { GlobalService } from '../global/global.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public vars:GlobalService, private _http:HttpClient) { }

  /**
   * Request to get saloon orders
   * 
   * @param number page
   * 
   * @method GET
   * 
   * @return Observable
   */
  getSaloons (page:number, search:string):Observable<any> {
    let url = new URL (this.vars.backend_url + '/admin/saloons');

    // get default pagination limit
    // append param in url
    url.searchParams.append ('paginate', (this.vars.default_pagination_limit).toString());
    // append page number
    url.searchParams.append ('page', (page).toString());

    // check if user fields to search by field
    if (search) {
      url.searchParams.append ('search', (search).toString());
    }

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.get (url.href, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

   /**
   * Request to get list of all barbers
   * 
   * @param number page
   * 
   * @method GET
   * 
   * @return Observable
   */
  getBarbers (page:number, search:string):Observable<any> {
    let url = new URL (this.vars.backend_url + '/admin/barbers');

    // get default pagination limit
    // append param in url
    url.searchParams.append ('paginate', (this.vars.default_pagination_limit).toString());
    // append page number
    url.searchParams.append ('page', (page).toString());

    if (search) {
      url.searchParams.append ('search', (search).toString());
    }

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.get (url.href, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * Request to get list of all customers
   * 
   * @param number page
   * 
   * @method GET
   * 
   * @return Observable
   */
  getCustomers (page:number, search:string):Observable<any> {
    let url = new URL (this.vars.backend_url + '/admin/customers');

    // get default pagination limit
    // append param in url
    url.searchParams.append ('paginate', (this.vars.default_pagination_limit).toString());
    // append page number
    url.searchParams.append ('page', (page).toString());

    if (search) {
      url.searchParams.append ('search', (search).toString());
    }

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.get (url.href, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * Request to get list of all users
   * 
   * @param number page
   * 
   * @method GET
   * 
   * @return Observable
   */
  getUsers (page:number, search:string):Observable<any> {
    let url = new URL (this.vars.backend_url + '/admin/users');

    // get default pagination limit
    // append param in url
    url.searchParams.append ('paginate', (this.vars.default_pagination_limit).toString());
    // append page number
    url.searchParams.append ('page', (page).toString());

    if (search) {
      url.searchParams.append ('search', (search).toString());
    }

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.get (url.href, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * Request to get saloon orders
   * 
   * @param number page
   * 
   * @method GET
   * 
   * @return Observable
   */
  getSaloonsSummary (page:number):Observable<any> {
    let url = new URL (this.vars.backend_url + '/admin/saloons/summary');

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
   * Request to get dashboard data for Admin
   * 
   * @return Observable
   */
  getDashboard (date:string):Observable<any> {
    let url = new URL (this.vars.backend_url + '/admin/dashboard');

    url.searchParams.append ('date', date);

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.get (url.href, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * Request to get dashboard data for Admin
   * 
   * @return Observable
   */
  getDashboardSummary (date:string):Observable<any> {
    let url = new URL (this.vars.backend_url + '/admin/dashboard/summary');

    url.searchParams.append ('date', date);

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.get (url.href, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * method to update saloon-s status
   * 
   * @param Object values
   * 
   * @return 
   */
  updateSaloonStatus (values:Object):Observable<any> {
    let url = this.vars.backend_url + '/admin/saloons/update-status';

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.put (url, values, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }
  
  /**
   * Request to update user email by admin
   * 
   * @param userId 
   * @param values 
   * 
   * @return Observable
   */
  changeUserEmail (userId:number, values:Object):Observable<any> {
    let url = this.vars.backend_url + '/users/' + userId + '/change-email';

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.put (url, values, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * Request to update user password
   * 
   * @param userId 
   * @param values 
   * 
   * @return Observable
   */
  changeUserPassword (userId:number, values:Object):Observable<any> {
    let url = this.vars.backend_url + '/users/' + userId + '/change-password';

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.put (url, values, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * Request to update user password
   * 
   * @param userId 
   * @param values 
   * 
   * @return Observable
   */
  deleteUser (userId:number):Observable<any> {
    let url = this.vars.backend_url + '/users/' + userId;

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.delete (url, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }
}
