import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import {SnotifyService} from 'ng-snotify';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {  

  public project_title:String = "shokuni";
  public project_sub_title:String = "barber shop";

  // public user_role:String = "consumer";
  public backend_url:String = "http://localhost:8080/v2";
  //public backend_url:String = "http://103.250.84.164/shokuni_new/public/v2";/*http://10.10.10.145*/

  public client_id:number = 2;
  public client_secret:String = "FHboWXJfzSaM3Y8AH8aWht1XAZ9DqIIHhgt8dmeJ";
  public grant_type:String = "password";
  public baseUrl:string = window.location.origin; //"https://api.shokunidev.co.uk"; //

  public onInt_request_delay_in_ms:number = 100;

  public default_pagination_limit:number = 6;

  public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor (private snotifyService: SnotifyService, private router:Router) { }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {      
      // check if user is unauthorized 
      // or it's response code is 401
      if (error.status === 401) {
        // logout the user as it's token is not valid from browser memory
        localStorage.removeItem ('token_type');
        localStorage.removeItem ('access_token');
        localStorage.removeItem ('user_detail');
      }
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      /*console.error( `Backend returned code ${error.status}, `);
        `body was: ${error.error}`);*/
    }
    // return an observable with a user-facing error message
    return throwError(error.error || error);
  }

  displayLoader(value: boolean) {
    this.loaderStatus.next(value);
  }
  
  showNotification (message:string, title:string = null, type:string = 'error') {
    let config = {
      timeout: 2000,
      showProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      position:'rightTop'
    };

    switch (type.toLowerCase()) {
      case 'error':
        return this.snotifyService.error(message, title, config);
      case 'success':
        return this.snotifyService.success(message, title, config);
      case 'warning':
        return this.snotifyService.warning(message, title, config);
      case 'info':
        return this.snotifyService.info(message, title, config);
    }
  }

  /**
   * Method to convert server response error array into string
   * 
   * @param Object
   * 
   * @returns string
   */
  convertObjectToString (req:Object) {
    let result = '';
    // check if object not empty
    if (Object.keys (req).length) {
      // convert Onject into string
      for (let str in req) {
        result += req[str] + '\n';
      }
    }

    // remove last break from result
    return result.slice(0, -5);
  }

  /**
   * Method to logout user from localstorage
   * and redirect user to login page
   * 
   * @return void
   */
  logoutUser ():void {
    localStorage.removeItem ('token_type');
    localStorage.removeItem ('access_token');
    localStorage.removeItem ('user_detail');
    localStorage.removeItem ('admin_detail');

    // redirect user to login page
    //this.router.navigateByUrl('/login');
  }

  /**
   * Method to get default page url
   * 
   * @return string
   */
  getDefaultpage ():string {
    if (localStorage.getItem ('user_detail')) {
      // check for user role
      let user_role = String (JSON.parse (localStorage.getItem ('user_detail')).role).toUpperCase ();
      switch (user_role) {
        case 'CONSUMER':
          return 'customer/dashboard';
        case 'BARBER':
          return 'barber/dashboard';
        case 'ADMIN':
          return 'admin';
      }
    }
  }

  /**
   * Method to get Auth token
   */
  getAuthToken ():string {
    return (localStorage.getItem ('token_type') + ' ' + localStorage.getItem ('access_token')).trim();
  }

  /**
   * method to get user role
   * 
   * @return string
   */
  getUserRole () {
    return localStorage.getItem ('user_detail') ? JSON.parse (localStorage.getItem ('user_detail')).role : null;
  }
}
