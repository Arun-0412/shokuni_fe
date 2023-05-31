import { Injectable } from '@angular/core';
import { GlobalService } from '../../global/global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BarberService {

  constructor(public vars:GlobalService, private _http:HttpClient) { }

  /**
   * Method to get list of all barbers
   * 
   * @param number page
   * 
   * @return Observable
   */
  getSaloonBarbers (page:number, saloonId:number):Observable<any> {
    let url = new URL (this.vars.backend_url + '/saloon/barbers');

    // check for user role 
    if (this.vars.getUserRole() === 'admin') {
      url = new URL (this.vars.backend_url + '/admin/saloons/' + saloonId + '/barbers');
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
   * Method to invite barber by Saloon-admin
   * 
   * @access: saloon-admin
   * 
   * @param Object values
   * 
   * @return Observable
   */
  inviteBarber (values:Object, saloonId:number): Observable<any> {
    let url = this.vars.backend_url + '/saloon/barbers/invite';

    if (this.vars.getUserRole() === 'admin') {
      url = this.vars.backend_url + '/admin/saloons/' + saloonId + '/barbers/invite';
    }

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // append baseUrl for invitation registration link
    values['requestUrl'] = this.vars.baseUrl+"/signup";

    // request to update card detail
    return this._http.post (url, values, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * request to get saloon barber detail by barber admin
   * 
   * @method GET
   * @param number barberId
   * 
   * @return Observable
   */
  getSaloonBarberDetail (barberId:number):Observable <any> {

    let url = this.vars.backend_url + '/saloon/barbers/'+barberId;

    // check for user role 
    if (this.vars.getUserRole() === 'admin') {
      url = this.vars.backend_url + '/admin/barbers/'+barberId;
    }

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.get (url, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }

  /**
   * request to get saloon barber detail by barber admin
   * 
   * @method GET
   * @param number barberId
   * 
   * @return Observable
   */
  updateSaloonBarberDetail (barberId:number, values:Object):Observable <any> {
    let url = this.vars.backend_url + '/saloon/barbers/'+barberId;

    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });

    // request to update card detail
    return this._http.put (url, values, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );
  }


  /**
   * request to get saloon barber detail by barber admin
   * 
   * @method POST
   * @param name, standard_price, logo, address,postal_code, contact_number, lat, lng, user_id, header, country_id, vat_number, company_number
   * 
   * @return Observable
   */
  addSaloonBarberDetail (values:Object):Observable <any> {

    let url = this.vars.backend_url +'/saloon';
    // get request header
    let headers = new HttpHeaders ({Authorization: this.vars.getAuthToken() });
    // request to update password
    return this._http.post (url, values, {headers:headers}).pipe (
      catchError (this.vars.handleError)
    );

  }


}
