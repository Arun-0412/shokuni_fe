import { Injectable } from '@angular/core';
import { GlobalService } from '../global/global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public vars: GlobalService,
    private _http: HttpClient
  ) { }

  /**
   * Method to loging user
   * 
   * @param values {username: "barber@email.com", password: "123456", remember: null}
   */
  loginUser(values: Object): Observable<any> {
    let url = this.vars.backend_url + '/users/login';

    // append required parameters for login
    // values['role'] = this.vars.user_role;
    values['client_id'] = this.vars.client_id;
    values['client_secret'] = this.vars.client_secret;
    values['grant_type'] = this.vars.grant_type;

    // request for login
    return this._http.post(url, values).pipe(
      catchError(this.vars.handleError)
    );
  }

  /**
   * Method to register user
   * 
   * @param Object {first_name: "Test", last_name: "Dev", email: "barber@email.com", password: "123456", number: "1234567890"}
   * 
   * @returns Observable
   */
  registerUser(values: Object): Observable<any> {
    let url = this.vars.backend_url + '/users/register';

    // append required parameters for login
    // values['role'] = this.vars.user_role;

    // request for login
    return this._http.post(url, values).pipe(
      catchError(this.vars.handleError)
    );
  }


  /**
*	Send request for invite-barber
*/
  inviteBarber(values: Object): Observable<any> {
    let url = this.vars.backend_url + '/inviteemail';

    // request for login
    return this._http.post(url, values).pipe(
      catchError(this.vars.handleError)
    );
  }
  /**
 * Method to register user
 * 
 * @param Object { "barbar_id":1,  "pay_out_balance": 10 }
 * 
 * @returns Observable
 */
  payBarber(values: Object): Observable<any> {
    let url = this.vars.backend_url + '/queue/payout-balance';
    let headers = new HttpHeaders({ Authorization: this.vars.getAuthToken() });
    return this._http.post(url, values, { headers: headers }).pipe(
      catchError(this.vars.handleError)
    );
  }

  /**
  *	Send request for forgot-password
  */
  forgotPassword(values: Object): Observable<any> {
    let url = this.vars.backend_url + '/user/forgot-password';

    // request for login
    return this._http.post(url, values).pipe(
      catchError(this.vars.handleError)
    );
  }

  /**
   * Method to save Login information
   * 
   * @param string access_token
   * @param string token_type
   * 
   * @return void
   */
  saveLoginInfo(access_token: string, token_type: string): void {
    // save token type and access token in memory
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('token_type', token_type);
  }

  /**
   * Method to check if user is logged in or not
   * 
   * @return boolean
   */
  public isLoggedIn(): boolean {
    // check if localstorage has access-token
    if (localStorage.getItem('access_token') && localStorage.getItem('token_type')) {
      return true;
    }
    return false;
  }

  /**
   * Method to logout user and redirect to login page
   * 
   * @return void
   */
  logoutUser(): Observable<any> {
    let url = this.vars.backend_url + '/users/logout';

    // get request header
    let headers = new HttpHeaders({ Authorization: this.vars.getAuthToken() });

    // logout user from server
    return this._http.delete(url, { headers: headers }).pipe(
      catchError(this.vars.handleError)
    );
  }

  /**
   * Method to check if login barber is admin
   * 
   * @return Observable
   */
  checkBarberIsAdmin(): Observable<any> {
    let url = this.vars.backend_url + '/saloon/is-admin';
    // get request header

    let headers = new HttpHeaders({ Authorization: this.vars.getAuthToken() });
    // logout user from server
    return this._http.get(url, { headers: headers }).pipe(
      catchError(this.vars.handleError)
    );
  }
}
