import { Injectable } from '@angular/core';

import { GlobalService } from '../global/global.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaloonService {

  constructor(public vars:GlobalService, private _http:HttpClient) { }

  /**
   * Method to get saloon information
   * 
   * @param number saloonId
   * 
   * @return Observable
   */
  getSaloon (saloonId:number = null):Observable<any> {
    let url = this.vars.backend_url +'/saloon';

    // check for user role
    if (this.vars.getUserRole() === 'admin') {
      url = this.vars.backend_url +'/admin/saloons/' + saloonId;
    }
    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update password
    return this._http.get (url, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * Method to register ndew saloon
   * 
   * @param values 
   * 
   * @return Observable
   */
  createSaloon (values:Object):Observable <any> {
    let url = this.vars.backend_url +'/saloon';

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update password
    return this._http.post (url, values, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * Method to update saloon information
   * 
   * @param Object vales
   * 
   * @returns Observable
   */
  updateSaloon (values:Object, saloonId:number = null):Observable <any> {
    let url = this.vars.backend_url +'/saloon';

    // check for user role
    if (this.vars.getUserRole() === 'admin') {
      url = this.vars.backend_url +'/admin/saloons/'+saloonId;
    }

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update password
    return this._http.put (url, values, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * Method to fetch user detail from 
   */
   getUserDetail(): Observable<any> {
    let url = this.vars.backend_url + '/users/detail';
    // get request header
    let headers = new HttpHeaders({ Authorization: this.vars.getAuthToken() });
    // request for user detail
    return this._http.get(url, { headers: headers }).pipe(
      catchError(this.vars.handleError)
    );
  }

  /**
   * Request to get payment detail of the saloon
   * 
   * @return Observable
   */
  getSaloonPaymentDetail (saloonId:number):Observable <any> {
    let url = this.vars.backend_url +'/saloon/account';

    // check for role
    if (this.vars.getUserRole() === 'admin') {
      url = this.vars.backend_url +'/admin/saloons/' + saloonId + '/account';
    }

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update password
    return this._http.get (url, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  getUserStripeDetails (barberId:number):Observable<any> {
    let url = 'http://3.82.35.52/v2/getstripeid/' + barberId;
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.get (url, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }


  /**
   * Request to update payment detail of the saloon
   * 
   * @return Observable
   */
  updateSaloonPaymentDetail (values, saloonId:number):Observable <any> {
    let url = this.vars.backend_url +'/saloon/account';

    // check for role
    if (this.vars.getUserRole() === 'admin') {
      url = this.vars.backend_url +'/admin/saloons/' + saloonId + '/account';
    }

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update password
    return this._http.put (url, values, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  //stripe

  saveStripeAccount (values, barberId:number):Observable <any> {
    let url = 'http://3.82.35.52/v2/storeStripeKeys';
      let params: any = {
        "userid": barberId,
        "accountid":values.stripeCode,
        "stripe_secret":values.stripe_secret,
        "stripe_key":values.stripe_key
      }
    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update password
    return this._http.post (url, params, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  getStripeURL (barberId:number):Observable <any> {
    let url = 'http://3.82.35.52/v2/createStripeAccount'
    let params: any = {
      "userid":barberId

    }
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    return this._http.post (url,params, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );

  }

  getStripeAccountDetails (stripeId:string):Observable <any> {
    let url = 'http://3.82.35.52/v2/getStripeAccount/'+ stripeId
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    return this._http.get (url, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );

  }
  
  getStripeStatus (stripeId:string):Observable <any> {
    let url = 'http://3.82.35.52/v2/getStripeAccountLink/'+ stripeId
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    return this._http.get (url, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );

  }
  

  /**
   * Method to get saloon dashboard information
   * 
   * @return Observable
   */
  getSaloonDashboard (date:string, saloonId:number = null):Observable<any> {
    let url = new URL (this.vars.backend_url +'/saloon/dashboard');

    // check for the role
    if (this.vars.getUserRole() === 'admin') {
      url = new URL (this.vars.backend_url + '/admin/saloons/' + saloonId + '/dashboard');
    }

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    url.searchParams.append ('date', date);

    // request to update password
    return this._http.get (url.href, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * Method to get saloon dashboard information
   * 
   * @return Observable
   */
  getSaloonPaymentBreakDown (date:string, saloonId:number = null):Observable<any> {
    let url = new URL (this.vars.backend_url +'/saloon/payments/cut-breakdown');

    // check for the role
    if (this.vars.getUserRole() === 'admin') {
      url = new URL (this.vars.backend_url + '/admin/saloons/' + saloonId + '/cut-breakdown');
    }

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    url.searchParams.append ('date', date);

    // request to update password
    return this._http.get (url.href, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }
}
