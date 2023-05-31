import { Injectable } from '@angular/core';

import { GlobalService } from '../../global/global.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

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
  getSaloonOrders (page:number, saloonId:number):Observable<any> {
    let url = new URL (this.vars.backend_url + '/saloon/orders');

    // check for role
    if (this.vars.getUserRole() === 'admin') {
      url = new URL (this.vars.backend_url + '/admin/saloons/' + saloonId + '/orders');
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
   * Method to get list of all payment list belongs to saloon
   * 
   * @param number page
   * 
   * @method GET
   * 
   * @return Observable
   */
  getSaloonPayments (page:number, saloonId:number):Observable<any> {
    let url = new URL (this.vars.backend_url + '/saloon/payments');

    // check for role
    if (this.vars.getUserRole() === 'admin') {
      url = new URL (this.vars.backend_url + '/admin/saloons/' + saloonId + '/payments');
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
   * Method to get list of all payment list belongs to saloon
   * 
   * @param number page
   * 
   * @method GET
   * 
   * @return Observable
   */
  getSalesSummary (saloonId:number):Observable<any> {
    let url = this.vars.backend_url + '/saloon/sales-summary';

    // check for role
    if (this.vars.getUserRole() === 'admin') {
      url = this.vars.backend_url + '/admin/saloons/' + saloonId + '/sales-summary';
    }

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.get (url, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * Request to get complete invoice detail of an order by transaction-id
   * 
   * @param number transactionId
   * 
   * @return Observable
   */
  getPaymentDetail (transactionId:number):Observable <any> {
    let url = this.vars.backend_url + '/saloon/transactions/'+transactionId;

    // check for role
    if (this.vars.getUserRole() === 'admin') {
      url = this.vars.backend_url + '/admin/transactions/'+transactionId;
    }

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.get (url, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * Request to get saloon orders cut history
   * 
   * @param number page
   * @param number saloonId
   * 
   * @return Observable
   */
  getSaloonOrdersCutHistory (page:number, saloonId:number = null):Observable <any> {
    let url = new URL (this.vars.backend_url + '/saloon/orders/cut-history');

    // check for the role
    if (this.vars.getUserRole() === 'admin') {
      url = new URL (this.vars.backend_url + '/admin/saloons/' + saloonId + '/orders/cut-history');
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
}
