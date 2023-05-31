import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GlobalService } from '../global/global.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public vars: GlobalService,
    private _http: HttpClient
  ) { }


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

  getAdmindetails(values: Object): Observable<any> {
    let url = this.vars.backend_url + '/saloon';

    // get request header
    let headers = new HttpHeaders({ Authorization: this.vars.getAuthToken() });

    // request to update password
    return this._http.get(url,  { headers: headers }).pipe(
      catchError(this.vars.handleError)
    );
  }

  /**
   * Method to updae user password
   * 
   * @param Object values
   * 
   * @returns Observable
   */
  changePassword(values: Object): Observable<any> {
    let url = this.vars.backend_url + '/users/change-password';
    // get request header
    let headers = new HttpHeaders({ Authorization: this.vars.getAuthToken() });

    // request to update password
    return this._http.put(url, values, { headers: headers }).pipe(
      catchError(this.vars.handleError)
    );
  }

  /**
   * method to update user profile
   * 
   * {email: "barber@email.com", first_name: "Test", last_name: "User", number: "1234567890", image: "avatar/a80b5278509a5288e7a6606700ea8c0f.jpg", "last_name":"User", "number":"1234567890"}
   * 
   * @param Object
   */
  updateProfile(values: Object): Observable<any> {
    let url = this.vars.backend_url + '/users/detail';
    // get request header
    let headers = new HttpHeaders({ Authorization: this.vars.getAuthToken() });

    // request for user detail
    return this._http.put(url, values, { headers: headers }).pipe(
      catchError(this.vars.handleError)
    );
  }

  /**
   * method to delete user account
   * 
   * @param string password
   * 
   * @returns
   */
  deleteAccount(values: Object): Observable<any> {
    let url = this.vars.backend_url + '/users';
    // get request header
    let headers = new HttpHeaders({ Authorization: this.vars.getAuthToken() });

    // request for user detail
    return this._http.put(url, values, { headers: headers }).pipe(
      catchError(this.vars.handleError)
    );
  }
}
