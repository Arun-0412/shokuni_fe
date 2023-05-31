import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GlobalService } from '../../global/global.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(public vars:GlobalService, private _http:HttpClient) { }

  /**
   * Method to save user payment card
   * 
   * @param Object
   * 
   * @returns Observable
   */
  savepaymentCards (values:Object):Observable<any> {
    let url = this.vars.backend_url + '/payment/cards';

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

      // request to update password
    return this._http.post (url, values, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * Method to get customer card detail
   * 
   * @return void
   */
  getCustomerPaymentCard ():Observable <any> {
    let url = this.vars.backend_url + '/payment/cards';

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update password
    return this._http.get (url, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * Method to updated saved card details
   * 
   * @param token 
   * @param values 
   * 
   * @returns Observable
   */
  updatePaumentCard (token:string, values:Object):Observable <any> {
    let url = this.vars.backend_url + '/payment/cards/' + token;

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.put (url, values, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * Methof to get list of customer orders
   * 
   * @returns Observable
   */
  getCustomerOrders (page:number = 1, customerId:number):Observable <any> {
    let url = new URL (this.vars.backend_url + '/customer/orders');

    // check for role
    if (this.vars.getUserRole() === 'admin') {
      url = new URL (this.vars.backend_url + '/admin/customers/'+ customerId +'/orders');
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
   * Method to save customer support request
   * 
   * @param Object values
   * 
   * @returns Observable
   */
  saveCustomerSupport (values:Object): Observable<any> {
    let url = this.vars.backend_url + '/customer/support';

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.post (url, values, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }
}
